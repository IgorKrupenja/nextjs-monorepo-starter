import { useEffect, useState } from 'react';

export function useMediaQuery(isMobileUserAgent: boolean): boolean {
  const [isMobile, setIsMobile] = useState(isMobileUserAgent);

  useEffect(() => {
    const mediaQueryList = window.matchMedia('(max-width: 1044px)');

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQueryList.addEventListener('change', handleMediaQueryChange);
    setIsMobile(mediaQueryList.matches);

    return () => mediaQueryList.removeEventListener('change', handleMediaQueryChange);
  }, []);

  return isMobile;
}
