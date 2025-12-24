'use client';

import { Suspense } from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { trackPurchase } from '@/lib/tracking/conversions';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

function ThankYouContent() {
  const searchParams = useSearchParams();

  useEffect(() => {
    // IIFE to handle async trackPurchase
    (async () => {
      // Extract purchase data from URL parameters
      const transactionId = searchParams.get('transaction_id') || searchParams.get('order_id');
      const value = parseFloat(searchParams.get('value') || searchParams.get('amount') || '0');
      const email = searchParams.get('email');
      const plan = searchParams.get('plan');

      // Validate required parameters
      if (!transactionId || !value) {
        console.error('[Purchase] Missing transaction_id or value');
        return;
      }

      // Prevent duplicate tracking (check sessionStorage)
      const trackedKey = `purchase_tracked_${transactionId}`;
      if (sessionStorage.getItem(trackedKey)) {
        console.log('[Purchase] Already tracked, skipping duplicate');
        return;
      }

      // Track the purchase conversion
      await trackPurchase({
        transaction_id: transactionId,
        value: value,
        currency: 'USD',
        items: plan ? [{
          item_id: plan,
          item_name: `IPTV ${plan} Subscription`,
          price: value,
          quantity: 1,
        }] : undefined,
        email: email || undefined,
      });

      // Mark as tracked to prevent duplicates
      sessionStorage.setItem(trackedKey, 'true');

      console.log(`[Purchase] Conversion tracked: ${transactionId} - $${value}`);
    })();
  }, [searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted">
      <div className="max-w-md w-full mx-auto p-8 bg-card rounded-lg shadow-xl text-center">
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
        <p className="text-muted-foreground mb-6">
          Thank you for your purchase. Your IPTV subscription is now active.
        </p>
        
        <div className="bg-muted p-4 rounded-lg mb-6">
          <p className="text-sm text-muted-foreground mb-2">Order ID</p>
          <p className="font-mono text-lg">{searchParams.get('transaction_id') || searchParams.get('order_id')}</p>
        </div>

        <p className="text-sm text-muted-foreground mb-6">
          You will receive your login credentials via email within 5 minutes.
        </p>

        <a 
          href="/"
          className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
        >
          Return to Homepage
        </a>
      </div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading...</p>
        </div>
      </div>
    }>
      <ThankYouContent />
    </Suspense>
  );
}
