import Head from 'next/head';
import { useState } from 'react';
import { Button } from 'ui';

import styles from './index.module.scss';

export default function Home() {
  const [num, setNum] = useState(13);

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

        <div>
          <button onClick={() => setNum(num + 1)}>CLICK</button>
          <h2>Number: {num}</h2>
        </div>

        <Button />
      </main>
    </>
  );
}
