let x = 0;
let y = 0;
export const flowField = (ctx: CanvasRenderingContext2D, frameCount: number) => {
  const length = 10;
  ctx.beginPath();
  ctx.moveTo(x, y);
  x += length;
  y += length;
  ctx.lineTo(x * 0.2, y * 0.6);
  ctx.stroke();

  if (x > ctx.canvas.width || y > ctx.canvas.height) {
    x = 0;
    y = 0;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  }
};
