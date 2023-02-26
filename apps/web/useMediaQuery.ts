import { useEffect, useState } from 'react';

export function useMediaQuery(isMobileUserAgent: boolean): boolean {
  // On the server,l use the user agent to determine if the user is on a mobile device
  const [isMobile, setIsMobile] = useState(isMobileUserAgent);

  useEffect(() => {
    // On the client, use the media query API to determine if the user is on a mobile device
    const changeSize = (event: MediaQueryListEvent) => setIsMobile(event.matches);

    const mediaQueryList = window.matchMedia('(max-width: 1440px)');
    mediaQueryList.addEventListener('change', changeSize);

    setIsMobile(mediaQueryList.matches);

    return () => mediaQueryList.removeEventListener('change', changeSize);
  }, []);

  return isMobile;
}
