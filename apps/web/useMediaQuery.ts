import { useEffect, useState } from 'react';

export function useMediaQuery(isMobileUserAgent: boolean): boolean {
  // On the server, use the user agent to determine if the user is on a mobile device
  const [isMobile, setIsMobile] = useState(isMobileUserAgent);

  useEffect(() => {
    // On the client, use the media query API to determine if the user is on a mobile device
    const handleSizeChange = (event: MediaQueryListEvent) => setIsMobile(event.matches);

    const mediaQueryList = window.matchMedia('(max-width: 1440px)');
    mediaQueryList.addEventListener('change', handleSizeChange);

    setIsMobile(mediaQueryList.matches);

    return () => mediaQueryList.removeEventListener('change', handleSizeChange);
  }, []);

  return isMobile;
}
