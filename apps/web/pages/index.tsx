import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import UAParser from 'ua-parser-js';

import test from '/public/test.jpg';

import { useMediaQuery } from '../useMediaQuery';
import styles from './index.module.scss';

interface IndexPageProps {
  isMobileUserAgent: boolean;
}

export default function Home({ isMobileUserAgent }: IndexPageProps) {
  const isMobile = useMediaQuery(isMobileUserAgent);

  return (
    <>
      <Head>
        <title>Hello media query!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p>{isMobile ? 'mobile' : 'desktop'}</p>
        <Image src={test} alt="blah"></Image>
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
