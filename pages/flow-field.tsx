import { Canvas, Layout } from '@components';
import { flowField, mouseMove } from 'animation';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return <Layout>
    <Canvas draw={flowField} mouseMove={mouseMove} />
  </Layout>;
};

export default Home;
