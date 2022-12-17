type Point = {
  x: number;
  y: number;
};

const cellSize = 15;
let length = 5;

const drawLine = (ctx: CanvasRenderingContext2D, from: Point, to: Point) => {
  ctx.beginPath();
  ctx.moveTo(from.x, from.y);
  ctx.lineTo(to.x, to.y);
  ctx.stroke();
};

const createGradient = (ctx: CanvasRenderingContext2D) => {
  const { width, height } = ctx.canvas;
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0.1, 'red');
  gradient.addColorStop(0.9, 'blue');
  ctx.strokeStyle = gradient;
};

export const flowField = (ctx: CanvasRenderingContext2D, frameCount: number) => {
  for (let x = 0; x < ctx.canvas.width; x += cellSize) {
    for (let y = 0; y < ctx.canvas.height; y += cellSize) {
      const toX = x + length;
      const toY = y + length;
      drawLine(ctx, { x, y }, { x: toX, y: toY });
      createGradient(ctx);
    }
  }
};

export const mouseMoveFlowField = (e: MouseEvent) => {
  // const { clientX, clientY } = e;
  // const angle = Math.atan2(clientY, clientX);
  // length = Math.sin(clientX) * 100 + Math.cos(clientY) * 100;
};
