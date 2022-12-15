import { Canvas, Layout } from '@components';
import { flowField } from 'animation';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return <Layout>
    <Canvas draw={flowField} />
  </Layout>;
};

export default Home;
