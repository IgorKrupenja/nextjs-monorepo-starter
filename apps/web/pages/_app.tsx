import 'styles/global.scss';
import 'normalize.css/normalize.css';

import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}
