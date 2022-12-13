import Canvas from '@components/Canvas';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  const draw = (ctx: CanvasRenderingContext2D, frameCount: number) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    const x = ctx.canvas.width / 2;
    const y = ctx.canvas.height / 2;
    const radius = 200 * Math.sin(frameCount * 0.01) ** 2;
    const endAngle = 2 * Math.PI;
    ctx.arc(x, y, radius, 0, endAngle);
    ctx.fill();
  };

  return <div>
    <Head>
      <title>HTML Canvas DEEP DIVE for Beginners</title>
    </Head>

    <Canvas draw={draw}/>
  </div>;
};

export default Home;
