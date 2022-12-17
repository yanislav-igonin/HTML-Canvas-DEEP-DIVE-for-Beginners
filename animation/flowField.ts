type Point = {
  x: number;
  y: number;
};

const pointMouse: Point = {
  x: 0,
  y: 0,
};

const cellSize = 10;
let vr = 0.1;
let radius = 5;
const radiusThreshold = {
  min: -20,
  max: 20,
};

const getDistance = (p1: Point, p2: Point) => {
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;
  return dx ^ 2 + dy ^ 2;
  // return Math.sqrt(dx ^ 2 + dy ^ 2);
};

const createGradient = (ctx: CanvasRenderingContext2D) => {
  const { width, height } = ctx.canvas;
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0.1, 'red');
  gradient.addColorStop(0.3, 'orange');
  gradient.addColorStop(0.5, 'yellow');
  gradient.addColorStop(0.7, 'green');
  gradient.addColorStop(0.9, 'blue');
  ctx.strokeStyle = gradient;
};

const drawLine = (ctx: CanvasRenderingContext2D, angle: number, from: Point, to: Point) => {
  ctx.beginPath();
  ctx.moveTo(from.x, from.y);
  ctx.lineTo(to.x, to.y);
  ctx.stroke();
};

export const flowField = (ctx: CanvasRenderingContext2D, frameCount: number) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  radius += vr;

  if (radius > radiusThreshold.max || radius < radiusThreshold.min) {
    vr *= -1;
  }

  for (let y = 0; y < ctx.canvas.height; y += cellSize) {
    for (let x = 0; x < ctx.canvas.width; x += cellSize) {
      const pointFrom = { x, y };
      const distance = getDistance(pointFrom, pointMouse);
      const length = distance / 5;
      const angle = (Math.cos(x * 0.005) + Math.sin(y * 0.005)) * radius;
      const toX = x + Math.cos(angle) * length;
      const toY = y + Math.sin(angle) * length;
      const pointTo = { x: toX, y: toY };
      drawLine(ctx, angle, pointFrom, pointTo);
      createGradient(ctx);
    }
  }
};

export const mouseMoveFlowField = (e: MouseEvent) => {
  const { clientX, clientY } = e;
  pointMouse.x = clientX;
  pointMouse.y = clientY;
};
