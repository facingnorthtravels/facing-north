import { useEffect, useState, useRef, useCallback } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './payment.module.css';

// Polling config
const POLL_INTERVAL = 2000; // 2 seconds
const MAX_POLL_ATTEMPTS = 15; // 30 seconds max

export default function PaymentSuccess() {
  const router = useRouter();
  const orderId = router.query.order_id || router.query.id;
  
  const [state, setState] = useState({ loading: true, error: null, order: null });
  const [emailStatus, setEmailStatus] = useState({ sent: false, sending: false, error: null });
  const emailSentRef = useRef(false);
  const pollCountRef = useRef(0);
  const pollIntervalRef = useRef(null);

  // Send confirmation emails after successful payment verification
  const sendConfirmationEmails = useCallback(async (orderIdToSend) => {
    if (emailSentRef.current) return; // Prevent duplicate sends
    emailSentRef.current = true;
    
    setEmailStatus({ sent: false, sending: true, error: null });
    
    try {
      const response = await fetch('/api/payment/send-confirmation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderId: orderIdToSend }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setEmailStatus({ sent: true, sending: false, error: null });
        console.log('Confirmation emails sent successfully');
      } else {
        setEmailStatus({ sent: false, sending: false, error: data.error || 'Failed to send emails' });
        console.warn('Email sending failed:', data.error);
      }
    } catch (error) {
      console.error('Error sending confirmation emails:', error);
      setEmailStatus({ sent: false, sending: false, error: 'Failed to send confirmation emails' });
    }
  }, []);

  // Verify order status
  const verifyOrder = useCallback(async () => {
    try {
      const res = await fetch(`/api/payment/verify?order_id=${orderId}`);
      const data = await res.json();
      return data;
    } catch {
      return null;
    }
  }, [orderId]);

  // Handle successful payment
  const handlePaymentSuccess = useCallback((data) => {
    // Clear any polling
    if (pollIntervalRef.current) {
      clearInterval(pollIntervalRef.current);
      pollIntervalRef.current = null;
    }
    
    // Clear preserved form state from sessionStorage (no longer needed after successful payment)
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('booking_form_state');
    }
    
    setState({ loading: false, error: null, order: data });
    sendConfirmationEmails(orderId);
  }, [orderId, sendConfirmationEmails]);

  // Poll for payment status (for Google Pay, Revolut Pay, etc.)
  const startPolling = useCallback(() => {
    if (pollIntervalRef.current) return; // Already polling
    
    pollIntervalRef.current = setInterval(async () => {
      pollCountRef.current += 1;
      
      if (pollCountRef.current >= MAX_POLL_ATTEMPTS) {
        // Stop polling after max attempts
        clearInterval(pollIntervalRef.current);
        pollIntervalRef.current = null;
        return;
      }
      
      const data = await verifyOrder();
      
      if (data?.isSuccess) {
        handlePaymentSuccess(data);
      } else if (data?.isFailed) {
        clearInterval(pollIntervalRef.current);
        pollIntervalRef.current = null;
        router.replace(`/payment/failure?order_id=${orderId}`);
      }
    }, POLL_INTERVAL);
  }, [verifyOrder, handlePaymentSuccess, orderId, router]);

  useEffect(() => {
    if (!router.isReady || !orderId) return;

    const checkOrder = async () => {
      const data = await verifyOrder();
      
      if (!data) {
        setState({ loading: false, error: 'Unable to verify payment', order: null });
        return;
      }
      
      if (data.isSuccess) {
        // Payment already confirmed
        handlePaymentSuccess(data);
      } else if (data.isFailed) {
        router.replace(`/payment/failure?order_id=${orderId}`);
      } else {
        // Payment pending - show processing and start polling
        setState({ loading: false, error: null, order: { ...data, pending: true } });
        startPolling();
      }
    };
    
    checkOrder();

    // Cleanup polling on unmount
    return () => {
      if (pollIntervalRef.current) {
        clearInterval(pollIntervalRef.current);
      }
    };
  }, [router.isReady, orderId, router, verifyOrder, handlePaymentSuccess, startPolling]);

  if (state.loading) {
    return (
      <div className={styles.container}>
        <Head><title>Verifying... | Facing North</title></Head>
        <div className={styles.content}>
          <div className={styles.loader} />
          <h1 className={styles.title}>Verifying Payment</h1>
        </div>
      </div>
    );
  }

  if (state.error) {
    return (
      <div className={styles.container}>
        <Head><title>Error | Facing North</title></Head>
        <div className={styles.content}>
          <div className={styles.icon_warning}>
            <svg viewBox="0 0 24 24" fill="none"><path d="M12 9V13M12 17H12.01M21 12A9 9 0 1112 3a9 9 0 019 9Z" stroke="currentColor" strokeWidth="2"/></svg>
          </div>
          <h1 className={styles.title}>Verification Issue</h1>
          <p className={styles.message}>{state.error}</p>
          <div className={styles.actions}>
            <Link href="/contact" className={styles.primary_btn}>Contact Support</Link>
          </div>
        </div>
      </div>
    );
  }

  const { order } = state;

  return (
    <div className={styles.container}>
      <Head><title>Booking Confirmed! | Facing North</title></Head>
      <div className={styles.content}>
        <div className={styles.icon_success}>
          <svg viewBox="0 0 24 24" fill="none"><path d="M9 12L11 14L15 10M21 12A9 9 0 1112 3a9 9 0 019 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
        </div>

        <h1 className={styles.title}>{order?.pending ? 'Processing...' : 'Booking Confirmed!'}</h1>
        <p className={styles.message}>
          {order?.pending 
            ? 'Your payment is being processed. You\'ll receive a confirmation email shortly.'
            : 'Thank you for booking with Facing North. Your adventure awaits!'}
        </p>

        {order && (
          <div className={styles.order_details}>
            <div className={styles.detail_row}>
              <span>Order ID</span>
              <strong style={{ fontSize: '12px', fontFamily: 'monospace' }}>{order.orderId}</strong>
            </div>
            {order.tour?.title && (
              <div className={styles.detail_row}>
                <span>Tour</span>
                <strong>{order.tour.title}</strong>
              </div>
            )}
            <div className={styles.detail_row}>
              <span>Travellers</span>
              <strong>{order.pricing?.numberOfTravellers || 1}</strong>
            </div>
            <div className={styles.detail_row}>
              <span>Total Paid</span>
              <strong className={styles.amount}>${order.amount?.toFixed(2)} {order.currency}</strong>
            </div>
          </div>
        )}

        <p className={styles.message} style={{ fontSize: '13px', marginTop: '16px' }}>
          {emailStatus.sending ? (
            <span>Sending confirmation email to <strong>{order?.customer?.email}</strong>...</span>
          ) : emailStatus.sent ? (
            <span>✓ Confirmation email sent to <strong>{order?.customer?.email}</strong></span>
          ) : emailStatus.error ? (
            <span style={{ color: '#f59e0b' }}>
              ⚠ Could not send confirmation email. Please contact support if you don&apos;t receive it.
            </span>
          ) : (
            <span>A confirmation email will be sent to <strong>{order?.customer?.email}</strong></span>
          )}
        </p>

        <div className={styles.actions} disabled={order?.pending}>
          <Link href="/" disabled={order?.pending} className={styles.primary_btn}>Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
