'use client';

import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis with optimized settings for better performance
    const lenis = new Lenis({
      duration: 0.5, // Snappier scroll duration (reduced from 0.8)
      easing: (t) => 1 - Math.pow(1 - t, 3), // Cubic easing for smooth but responsive feel
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 2.0, // Increased for more responsive wheel scrolling
      touchMultiplier: 2.5, // Better touch responsiveness
      infinite: false,
      syncTouch: true, // Better touch device support
      syncTouchLerp: 0.1, // Smooth touch scrolling
    });

    lenisRef.current = lenis;

    // Animation frame loop with performance optimization
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
