import { Canvas, Layout } from '@components';
import { lavaLamp } from 'animation';
import type { NextPage } from 'next';

const LavaLampPage: NextPage = () => {
  return <Layout>
    <Canvas draw={lavaLamp} />
  </Layout>;
};

export default LavaLampPage;
