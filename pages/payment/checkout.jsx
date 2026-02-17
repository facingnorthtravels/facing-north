import { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import RevolutCheckout from '@revolut/checkout';
import styles from './payment.module.css';

/**
 * Get Revolut SDK mode based on environment
 * Production: 'prod' | Sandbox: 'sandbox'
 */
const getRevolutMode = () => {
  const env = process.env.NEXT_PUBLIC_REVOLUT_ENV;
  if (env === 'production' || env === 'live' || env === 'prod') {
    return 'prod';
  }
  return 'sandbox';
};

const REVOLUT_MODE = getRevolutMode();

/**
 * Get Revolut Public Key for payments module
 */
const getRevolutPublicKey = () => {
  return process.env.NEXT_PUBLIC_REVOLUT_PUBLIC_KEY || '';
};

export default function CheckoutPage() {
  const router = useRouter();
  const { order_id, token } = router.query;
  
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState(null);
  const [orderToken, setOrderToken] = useState(null);
  const [error, setError] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [cardMounted, setCardMounted] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState({
    googlePay: false,
    applePay: false,
    revolutPay: false,
  });
  
  const cardRef = useRef(null);
  const googlePayRef = useRef(null);
  const applePayRef = useRef(null);
  const revolutPayRef = useRef(null);
  const cardInstanceRef = useRef(null);
  const checkoutRef = useRef(null);
  const paymentsRef = useRef(null);
  const paymentRequestRef = useRef(null);
  const initRef = useRef(false);
  const expressPaymentInitRef = useRef(false);

  // Step 1: Fetch order details
  useEffect(() => {
    if (!router.isReady || !order_id) return;

    const fetchOrder = async () => {
      try {
        const res = await fetch(`/api/payment/verify?order_id=${order_id}`);
        const data = await res.json();

        if (!data.success) throw new Error(data.error || 'Order not found');
        if (data.isSuccess) return router.replace(`/payment/success?order_id=${order_id}`);
        if (data.isFailed) return router.replace(`/payment/failure?order_id=${order_id}`);

        setOrder(data);
        setOrderToken(token || data.orderToken);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchOrder();
  }, [router.isReady, order_id, token, router]);

  // Step 2: Initialize Revolut SDK for Card payments
  useEffect(() => {
    if (!order || !orderToken || !cardRef.current || initRef.current) return;
    
    const initRevolutCheckout = async () => {
      try {
        initRef.current = true;
        
        const checkout = await RevolutCheckout(orderToken, REVOLUT_MODE);
        checkoutRef.current = checkout;

        const successHandler = () => {
          router.push(`/payment/success?order_id=${order_id}`);
        };
        const errorHandler = (err) => {
          setIsProcessing(false);
          setError(err.message || 'Payment failed. Please try again.');
        };
        const cancelHandler = () => setIsProcessing(false);

        // 1. Mount Card Field
        const card = checkout.createCardField({
          target: cardRef.current,
          hidePostcodeField: true,
          onSuccess: successHandler,
          onError: errorHandler,
          onCancel: cancelHandler,
          styles: {
            default: { 
              color: '#1f2937', 
              fontSize: '16px',
              '::placeholder': { color: '#9ca3af' }
            },
            invalid: { color: '#ef4444' },
          },
        });
        cardInstanceRef.current = card;
        setCardMounted(true);

        // Note: Google Pay / Apple Pay now handled via Payments Module in Step 4

      } catch (err) {
        console.error('Revolut init error:', err);
        setError('Failed to initialize payment. Please refresh and try again.');
      }
    };

    initRevolutCheckout();

    return () => {
      if (checkoutRef.current?.destroy) {
        checkoutRef.current.destroy();
      }
    };
  }, [order, orderToken, order_id, router]);

  // Step 3: Initialize Revolut Pay (New Payments Module API)
  useEffect(() => {
    if (!order || !orderToken || !revolutPayRef.current || paymentsRef.current) return;
    
    const publicKey = getRevolutPublicKey();
    if (!publicKey) {
      console.log('Revolut Pay: No public key configured');
      return;
    }

    const initRevolutPay = async () => {
      try {
        // Initialize the payments module with public key
        const payments = await RevolutCheckout.payments({
          publicToken: publicKey,
          mode: REVOLUT_MODE,
          locale: 'auto',
        });
        
        paymentsRef.current = payments;

        // Mount Revolut Pay button
        payments.revolutPay.mount(revolutPayRef.current, {
          currency: order.currency || 'USD',
          totalAmount: Math.round((order.amount || 0) * 100), // Amount in cents
          createOrder: async () => {
            // Return the existing order token (already created)
            return { publicId: orderToken };
          },
          customer: {
            email: order.customer?.email,
            name: order.customer?.name,
            phone: order.customer?.phone,
          },
          buttonStyle: {
            size: 'large',
            variant: 'light-outlined',
            radius: 'small',
          },
        });

        // Listen for payment events
        payments.revolutPay.on('payment', (event) => {
          switch (event.type) {
            case 'success':
              router.push(`/payment/success?order_id=${order_id}`);
              break;
            case 'error':
              setIsProcessing(false);
              setError(event.error?.message || 'Payment failed. Please try again.');
              break;
            case 'cancel':
              setIsProcessing(false);
              break;
          }
        });

        setPaymentMethods(prev => ({ ...prev, revolutPay: true }));

      } catch (err) {
        console.log('Revolut Pay not available:', err.message);
      }
    };

    initRevolutPay();

    return () => {
      if (paymentsRef.current?.destroy) {
        paymentsRef.current.destroy();
      }
    };
  }, [order, orderToken, order_id, router]);

  // Step 4: Initialize Apple Pay / Google Pay using Payments Module API
  // This uses the paymentRequest method which auto-detects device capability
  // - Apple Pay: Only available on Safari (macOS/iOS) with Apple Pay configured
  // - Google Pay: Available on Chrome, Edge, etc. with Google Pay configured
  // Note: Both are NOT available in sandbox mode - only production
  useEffect(() => {
    const expressPaymentTarget = googlePayRef.current || applePayRef.current;
    if (!order || !orderToken || !expressPaymentTarget || expressPaymentInitRef.current) return;
    
    const publicKey = getRevolutPublicKey();
    if (!publicKey) {
      console.log('Express Payment: No public key configured');
      return;
    }

    const initExpressPayment = async () => {
      try {
        expressPaymentInitRef.current = true;

        // Use existing payments instance or create new one
        let payments = paymentsRef.current;
        if (!payments) {
          payments = await RevolutCheckout.payments({
            publicToken: publicKey,
            mode: REVOLUT_MODE,
            locale: 'auto',
          });
        }

        // Create the payment request instance
        // The SDK automatically detects if Apple Pay or Google Pay is available
        const paymentRequestInstance = payments.paymentRequest(expressPaymentTarget, {
          currency: order.currency || 'USD',
          amount: Math.round((order.amount || 0) * 100), // Amount in cents
          createOrder: async () => {
            // Return the existing order token (already created)
            return { publicId: orderToken };
          },
          onSuccess: () => {
            router.push(`/payment/success?order_id=${order_id}`);
          },
          onError: (err) => {
            setIsProcessing(false);
            setError(err.message || 'Payment failed. Please try again.');
          },
          onCancel: () => {
            setIsProcessing(false);
          },
          buttonStyle: {
            size: 'large',
            variant: 'dark',
            radius: 'small',
          },
        });

        paymentRequestRef.current = paymentRequestInstance;

        // Check which payment method is available
        // Returns 'applePay', 'googlePay', or null
        const availableMethod = await paymentRequestInstance.canMakePayment();
        
        if (availableMethod) {
          // Update state based on what's available
          setPaymentMethods(prev => ({
            ...prev,
            googlePay: availableMethod === 'googlePay',
            applePay: availableMethod === 'applePay',
          }));
          
          // Render the appropriate button
          await paymentRequestInstance.render();
          
          console.log(`Express Payment: ${availableMethod} is available and rendered`);
        } else {
          // Neither Apple Pay nor Google Pay is available on this device/browser
          console.log('Express Payment: Neither Apple Pay nor Google Pay is available');
          paymentRequestInstance.destroy();
        }
      } catch (err) {
        console.log('Express Payment initialization error:', err.message);
      }
    };

    // Small delay to ensure DOM is ready and payments module might be initialized
    const timeoutId = setTimeout(initExpressPayment, 100);

    return () => {
      clearTimeout(timeoutId);
      if (paymentRequestRef.current?.destroy) {
        paymentRequestRef.current.destroy();
      }
    };
  }, [order, orderToken, order_id, router]);

  const handlePay = () => {
    if (cardInstanceRef.current && cardMounted) {
      setIsProcessing(true);
      setError(null);
      cardInstanceRef.current.submit({
        name: order?.customer?.name || '',
        email: order?.customer?.email || '',
      });
    }
  };

  const hasExpressCheckout = paymentMethods.googlePay || paymentMethods.applePay || paymentMethods.revolutPay;

  // Loading state
  if (loading) {
    return (
      <div className={styles.page_container}>
        <Head><title>Loading... | Facing North</title></Head>
        <div className={styles.page_content}>
          <div className={styles.loader} />
          <h1 className={styles.page_title}>Preparing Checkout</h1>
          <p className={styles.page_subtitle}>Please wait...</p>
        </div>
      </div>
    );
  }

  // Error state (no order data)
  if (error && !order) {
    return (
      <div className={styles.page_container}>
        <Head><title>Error | Facing North</title></Head>
        <div className={styles.page_content}>
          <div className={styles.icon_error}>
            <svg viewBox="0 0 24 24" fill="none"><path d="M12 9V13M12 17H12.01M21 12A9 9 0 1112 3a9 9 0 019 9Z" stroke="currentColor" strokeWidth="2"/></svg>
          </div>
          <h1 className={styles.page_title}>Checkout Error</h1>
          <p className={styles.page_subtitle}>{error}</p>
          <Link href="/book-now" className={styles.primary_btn}>Return to Booking</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page_container}>
      <Head>
        <title>Complete Payment | Facing North</title>
      </Head>
      
      <div className={styles.checkout_page}>
        {/* Left: Order Summary */}
        <div className={styles.order_section}>
          <div onClick={() => router.back()} className={styles.back_link}>
            ← Back to Booking
          </div>
          
          <h1 className={styles.checkout_title}>Order Summary</h1>
          
          {order && (
            <div className={styles.order_card}>
              <div className={styles.order_row}>
                <span>Tour</span>
                <strong>{order.tour?.title || 'Tour Booking'}</strong>
              </div>
              
              {order.pricing?.numberOfTravellers > 1 && (
                <div className={styles.order_row}>
                  <span>Travellers</span>
                  <strong>{order.pricing.numberOfTravellers}</strong>
                </div>
              )}
              
              {order.pricing?.couponCode && (
                <div className={styles.order_row}>
                  <span>Coupon</span>
                  <strong className={styles.coupon_tag}>{order.pricing.couponCode}</strong>
                </div>
              )}
              
              {order.pricing?.discountAmount > 0 && (
                <div className={styles.order_row}>
                  <span>Discount</span>
                  <strong className={styles.discount}>-${order.pricing.discountAmount.toFixed(2)}</strong>
                </div>
              )}
              
              <div className={styles.order_total}>
                <span>Total</span>
                <strong>${order.amount?.toFixed(2)} {order.currency}</strong>
              </div>
            </div>
          )}
        </div>

        {/* Right: Payment Form */}
        <div className={styles.payment_section}>
          <h2 className={styles.payment_title}>Payment Details</h2>
          <p className={styles.payment_subtitle}>Choose your preferred payment method</p>
          
          {/* Express Checkout: Apple Pay / Google Pay / Revolut Pay */}
          {/* Note: Apple Pay only shows on Safari (macOS/iOS), Google Pay on Chrome/Edge */}
          {/* Both require production environment - not available in sandbox */}
          <div className={styles.express_checkout}>
            {/* Apple Pay / Google Pay container - SDK auto-detects which to show */}
            <div ref={googlePayRef} className={styles.express_btn} />
            {/* Hidden ref for Apple Pay - same button rendered by SDK based on device */}
            <div ref={applePayRef} style={{ display: 'none' }} />
            {/* Revolut Pay button */}
            <div ref={revolutPayRef} className={styles.express_btn} />
          </div>
          
          {hasExpressCheckout && (
            <div className={styles.divider}>
              <span>or pay with card</span>
            </div>
          )}
          
          <div className={styles.card_container}>
            <div ref={cardRef} className={styles.card_field} />
            
            {error && (
              <p className={styles.error_message}>{error}</p>
            )}
            
            <button
              onClick={handlePay}
              disabled={isProcessing || !cardMounted}
              className={styles.pay_btn}
            >
              {isProcessing ? (
                <>
                  <span className={styles.btn_spinner} />
                  Processing...
                </>
              ) : (
                `Pay $${order?.amount?.toFixed(2) || '0.00'}`
              )}
            </button>
          </div>
          
          <div className={styles.secure_badge}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Secured by Revolut • 256-bit encryption</span>
          </div>
        </div>
      </div>
    </div>
  );
}
