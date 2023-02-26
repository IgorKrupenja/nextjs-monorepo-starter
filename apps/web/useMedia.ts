import { useEffect, useState } from 'react';

export function useMedia(): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // todo logic to detect mobile
    setIsMobile(true);
  }, []);

  return isMobile;
}
