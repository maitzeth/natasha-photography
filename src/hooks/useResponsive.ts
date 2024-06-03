import { useMedia, useWindowSize } from 'react-use';

export const useResponsive = () => {
  const {width, height} = useWindowSize();

  const isXS = useMedia('(max-width: 639px)');
  const isSM = useMedia('(min-width: 640px)');
  const isMD = useMedia('(min-width: 768px)');
  const isLG = useMedia('(min-width: 1024px)');
  const isXL = useMedia('(min-width: 1280px)');
  const is2XL = useMedia('(min-width: 1536px)');

  return {
    width,
    height,
    xs: isXS,
    sm: isSM,
    md: isMD,
    lg: isLG,
    xl: isXL,
    '2xl': is2XL,
  }
};