'use client';

import dynamic from 'next/dynamic';

const NextNProgress = dynamic(() => import('nextjs-progressbar'), {
  ssr: false,
});

export function ProgressBar() {
  return <NextNProgress />;
}
