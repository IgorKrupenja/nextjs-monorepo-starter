import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import UAParser from 'ua-parser-js';
import { Button } from 'ui';

import { useMediaQuery } from '../useMediaQuery';
import styles from './index.module.scss';

interface IndexPageProps {
  isMobileUserAgent: boolean;
}

export default function Home({ isMobileUserAgent }: IndexPageProps) {
  const [num, setNum] = useState(13);
  const isMobile = useMediaQuery(isMobileUserAgent);

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

        <p>{isMobile ? 'mobile' : 'desktop'}</p>

        <Button />
      </main>
    </>
  );
}

export function getServerSideProps({
  req,
}: GetServerSidePropsContext): GetServerSidePropsResult<IndexPageProps> {
  const userAgent = new UAParser(req.headers['user-agent']);
  const deviceType = userAgent.getDevice().type;

  return {
    props: {
      isMobileUserAgent: deviceType === 'mobile' || deviceType === 'tablet',
    },
  };
}
