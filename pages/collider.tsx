import { Canvas, Layout } from '@components';
import { collider, mouseMove } from 'animation';
import type { NextPage } from 'next';

const ColliderPage: NextPage = () => {
  return <Layout>
    <Canvas draw={collider} mouseMove={mouseMove} />
  </Layout>;
};

export default ColliderPage;
