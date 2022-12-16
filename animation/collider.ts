let x = 0;
let y = 0;
let length = 100;

export const collider = (ctx: CanvasRenderingContext2D, frameCount: number) => {
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

  if (frameCount % 1000 === 0) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  }
};

export const mouseMove = (e: MouseEvent) => {
  length = Math.sin(e.clientX) * 100 + Math.cos(e.clientY) * 100;
};
