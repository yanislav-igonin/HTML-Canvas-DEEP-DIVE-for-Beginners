import { Canvas, Layout } from '@components';
import { collider, mouseMove } from 'animation';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return <Layout>
    <Canvas draw={collider} mouseMove={mouseMove} />
  </Layout>;
};

export default Home;
