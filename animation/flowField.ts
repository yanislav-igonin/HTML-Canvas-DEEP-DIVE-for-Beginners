let x = 0;
let y = 0;
export const flowField = (ctx: CanvasRenderingContext2D, frameCount: number) => {
  const length = 100;
  const width = ctx.canvas.width;
  const height = ctx.canvas.height;
  const centerX = width / 2;
  const centerY = height / 2;

  x = centerX + Math.sin(frameCount) * 100;
  y = centerY + Math.cos(frameCount) * 100;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + length, y + length);
  ctx.stroke();

  // if (x > ctx.canvas.width || y > ctx.canvas.height) {
  //   x = 0;
  //   y = 0;
  //   ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  // }

  if (frameCount % 100 === 0) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  }
};
