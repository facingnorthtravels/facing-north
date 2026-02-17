import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './payment.module.css';

export default function PaymentFailure() {
  const router = useRouter();
  const orderId = router.query.order_id || router.query.id;
  
  const [order, setOrder] = useState(null);

  useEffect(() => {
    if (!router.isReady || !orderId) return;

    fetch(`/api/payment/verify?order_id=${orderId}`)
      .then(res => res.json())
      .then(data => {
        if (data.isSuccess) {
          router.replace(`/payment/success?order_id=${orderId}`);
        } else {
          setOrder(data);
        }
      })
      .catch(() => {});
  }, [router.isReady, orderId, router]);

  return (
    <div className={styles.container}>
      <Head><title>Payment Issue | Facing North</title></Head>
      <div className={styles.content}>
        <div className={styles.icon_error}>
          <svg viewBox="0 0 24 24" fill="none"><path d="M12 9V13M12 17H12.01M21 12A9 9 0 1112 3a9 9 0 019 9Z" stroke="currentColor" strokeWidth="2"/></svg>
        </div>

        <h1 className={styles.title}>Payment Unsuccessful</h1>
        <p className={styles.message}>
          We couldn't process your payment. No charges have been made to your account.
        </p>

        {orderId && (
          <p style={{ fontSize: '12px', color: '#9ca3af', margin: '12px 0' }}>
            Reference: {orderId}
          </p>
        )}

        <div className={styles.actions}>
          <Link href="/" className={styles.primary_btn}>Try Again</Link>
          <Link href="/contact" className={styles.secondary_btn}>Contact Support</Link>
        </div>
      </div>
    </div>
  );
}
