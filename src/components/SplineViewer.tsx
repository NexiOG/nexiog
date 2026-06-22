'use client';
import React, { useRef } from 'react';
import Script from 'next/script';

export default function SplineViewer({ url, className }: { url: string; className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Script 
        type="module" 
        src="https://unpkg.com/@splinetool/viewer@1.9.0/build/spline-viewer.js" 
        strategy="lazyOnload"
      />
      <div ref={containerRef} className={className}>
        {React.createElement('spline-viewer', { url })}
      </div>
    </>
  );
}
