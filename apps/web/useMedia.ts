import { useEffect, useState } from 'react';

export function useMedia(isMobileUserAgent: boolean): boolean {
  const [isMobile, setIsMobile] = useState(isMobileUserAgent);

  useEffect(() => {
    // runs on client only
    // todo logic to detect mobile on client side
    setIsMobile(true);
  }, []);

  return isMobile;
}
