import { useEffect } from 'react';
import Lenis from 'lenis';
import { useResponsive } from '@/hooks/useResponsive';

export const useSmoothScroll = () => {
  const { lg } = useResponsive();

  useEffect( () => {
    const lenis = new Lenis({
      lerp: 0,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    if (lg) {
      requestAnimationFrame(raf);
    }
  }, [lg]);
}