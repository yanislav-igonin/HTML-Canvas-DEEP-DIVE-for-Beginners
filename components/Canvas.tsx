import { useRef, useEffect, type DetailedHTMLProps, type CanvasHTMLAttributes } from 'react';

type Props = DetailedHTMLProps<CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>
 & { draw: (ctx: CanvasRenderingContext2D, frameCount: number) => void };

export const Canvas = ({ draw, ...props }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
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
