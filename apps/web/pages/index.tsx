import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import UAParser from 'ua-parser-js';
import { Button } from 'ui';

import { useMedia } from '../useMedia';
import styles from './index.module.scss';

export default function Home({ isMobileUserAgent }: IndexPageProps) {
  const [num, setNum] = useState(13);
  const isMobile = useMedia(isMobileUserAgent);

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

        <p>{isMobile ? 'CLIENT' : 'SERVER'}</p>

        <Button />
      </main>
    </>
  );
}

interface IndexPageProps {
  isMobileUserAgent: boolean;
}

export function getServerSideProps({
  req,
}: GetServerSidePropsContext): GetServerSidePropsResult<IndexPageProps> {
  const ua = new UAParser(req.headers['user-agent']);

  return {
    props: {
      isMobileUserAgent: ua.getDevice().type === 'mobile',
    },
  };
}
