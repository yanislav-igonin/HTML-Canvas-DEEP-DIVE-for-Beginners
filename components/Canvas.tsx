import { useRef, useEffect, type DetailedHTMLProps, type CanvasHTMLAttributes } from 'react';

type Props = DetailedHTMLProps<CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>

const Canvas = (props: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
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
  
  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const context = canvas?.getContext('2d') as CanvasRenderingContext2D;
    let frameCount = 0;
    let animationFrameId: number;
    
    //Our draw came here
    const render = () => {
      frameCount++;
      draw(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();
    
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  });
  
  return <canvas ref={canvasRef} {...props}/>;
};

export default Canvas;
