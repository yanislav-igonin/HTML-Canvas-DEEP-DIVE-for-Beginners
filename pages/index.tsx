import { Canvas, Layout } from '@components';
import { pulse } from 'animation';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return <Layout>
    <Head>
      <title>HTML Canvas DEEP DIVE for Beginners</title>
    </Head>

    <Canvas draw={pulse} />
  </Layout>;
};

export default Home;
