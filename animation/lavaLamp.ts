const speedMultiplier = 10;

class Ball {
  private x: number;
  private y: number;
  private radius: number;
  private canvasWidth: number;
  private canvasHeight: number;
  private speedX = (Math.random() - 0.5) * speedMultiplier;
  private speedY = (Math.random() * 0.5) * speedMultiplier;

  constructor(x: number, y: number, r: number, canvasWidth: number, canvasHeight: number) {
    this.radius = r;
    this.x = this.radius * 2 + Math.random() * (canvasWidth - this.radius * 4);
    this.y = -r;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
  }

  move() {
    const { x, y, radius, canvasWidth, canvasHeight } = this;
    if (x + radius > canvasWidth || x - radius < 0) {
      this.speedX = -this.speedX;
    }
    if (y > canvasHeight + radius) {
      this.y = -radius;
    }
    this.x += this.speedX;
    this.y += this.speedY;
  }

  reset(newWidth: number, newHeight: number) {
    this.canvasWidth = newWidth;
    this.canvasHeight = newHeight;
    this.x = this.canvasWidth * 0.5;
    // this.y = this.canvasHeight * 0.5;
  }
}

const balls: Ball[] = [];
let canvasWidth = 0;
let canvasHeight = 0;

export const lavaLamp = (ctx: CanvasRenderingContext2D, frameCount: number) => {
  if (canvasWidth !== ctx.canvas.width || canvasHeight !== ctx.canvas.height) {
    canvasWidth = ctx.canvas.width;
    canvasHeight = ctx.canvas.height;
    balls.forEach((ball) => ball.reset(canvasWidth, canvasHeight));
  }

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  const centerX = ctx.canvas.width / 2;
  const centerY = ctx.canvas.height / 2;
  const ballCount = 30;
  if (balls.length === 0) {
    for (let i = 0; i < ballCount; i++) {
      const ballRadius = (Math.random() + 1) * 70;
      balls.push(new Ball(centerX, centerY, ballRadius, canvasWidth, canvasHeight));
    }
  }

  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  ctx.fillStyle = 'white';
  balls.forEach((ball) => {
    ball.draw(ctx);
    ball.move();
  });
};
