export const pulse = (ctx: CanvasRenderingContext2D, frameCount: number) => {
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
