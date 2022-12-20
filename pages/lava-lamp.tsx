import { Canvas, Layout } from '@components';
import { flowField, mouseMoveFlowField } from 'animation';
import type { NextPage } from 'next';

const LavaLampPage: NextPage = () => {
  return <Layout>
    <Canvas draw={flowField} mouseMove={mouseMoveFlowField} />
  </Layout>;
};

export default LavaLampPage;
