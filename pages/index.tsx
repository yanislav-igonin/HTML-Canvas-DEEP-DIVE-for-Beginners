import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useRef } from 'react';

const Home: NextPage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const draw = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(50, 100, 20, 0, 2 * Math.PI);
    ctx.fill();
  };

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const context = canvas?.getContext('2d') as CanvasRenderingContext2D;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    //Our first draw
    draw(context);
  }, []);

  return <div>
    <Head>
      <title>HTML Canvas DEEP DIVE for Beginners</title>
    </Head>

    <canvas ref={canvasRef} />
  </div>;
};

export default Home;
