import { Canvas, Layout } from '@components';
import { collider, mouseMoveCollider } from 'animation';
import type { NextPage } from 'next';

const ColliderPage: NextPage = () => {
  return <Layout>
    <Canvas draw={collider} mouseMove={mouseMoveCollider} />
  </Layout>;
};

export default ColliderPage;
