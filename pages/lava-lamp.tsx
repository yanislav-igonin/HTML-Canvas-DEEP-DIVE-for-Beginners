import { Canvas, Layout } from '@components';
import { lavaLamp } from 'animation';
import type { NextPage } from 'next';

const LavaLampPage: NextPage = () => {
  return <Layout>
    <Canvas draw={lavaLamp} className="blur-[10px] contrast-[20]" />
  </Layout>;
};

export default LavaLampPage;
