import { Canvas } from '@components/Canvas';
import { pulse } from 'animation';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return <div>
    <Head>
      <title>HTML Canvas DEEP DIVE for Beginners</title>
    </Head>

    <Canvas draw={pulse} />
  </div>;
};

export default Home;
