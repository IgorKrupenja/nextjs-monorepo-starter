import { useEffect, useState } from 'react';

export function useMedia(): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(true);
  }, []);

  return isMobile;
}
