import Head from 'next/head';
import { Button } from 'shared';

import styles from './index.module.scss';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing <code>pages/index.tsx</code>
        </p>

        <Button />
      </main>
    </>
  );
}
