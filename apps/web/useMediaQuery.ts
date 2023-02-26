import { useEffect, useState } from 'react';

export function useMediaQuery(isMobileUserAgent: boolean): boolean {
  const [isMobile, setIsMobile] = useState(isMobileUserAgent);

  useEffect(() => {
    const changeSize = (event: MediaQueryListEvent) => setIsMobile(event.matches);

    const mediaQueryList = window.matchMedia('(max-width: 1044px)');
    mediaQueryList.addEventListener('change', changeSize);

    setIsMobile(mediaQueryList.matches);

    return () => mediaQueryList.removeEventListener('change', changeSize);
  }, []);

  return isMobile;
}
