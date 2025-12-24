'use client';

import { useEffect } from 'react';
import { initializeUTMTracking } from '@/lib/tracking/utm';
import { initializeConversionTracking } from '@/lib/tracking/conversions';

/**
 * Tracking Initializer Component
 * 
 * Place this in your root layout to initialize:
 * - UTM parameter capture and persistence
 * - Conversion tracking setup
 * - GA4/GTM integration
 * 
 * Usage in layout.tsx:
 * ```tsx
 * import { TrackingInitializer } from '@/components/tracking/TrackingInitializer';
 * 
 * export default function RootLayout({ children }) {
 *   return (
 *     <html>
 *       <body>
 *         <TrackingInitializer />
 *         {children}
 *       </body>
 *     </html>
 *   );
 * }
 * ```
 */
export function TrackingInitializer() {
  useEffect(() => {
    // Initialize UTM tracking on app load
    const currentUTM = initializeUTMTracking();
    
    if (Object.keys(currentUTM).length > 0) {
      console.log('[Tracking] UTM parameters captured:', currentUTM);
    }

    // Initialize conversion tracking
    initializeConversionTracking();
  }, []);

  return null; // This component renders nothing
}
