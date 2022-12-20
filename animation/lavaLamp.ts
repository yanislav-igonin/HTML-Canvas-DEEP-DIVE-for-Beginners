class Ball {
  private x: number;
  private y: number;
  private r: number;
  private speedX = 10;
  private speedY = 10;

  constructor(x: number, y: number, r: number) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.fill();
  }

  move() {
    this.x += (Math.random() - 0.5) * this.speedX;
    this.y += (Math.random() - 0.5) * this.speedY;
  }
}

const balls: Ball[] = [];

export const lavaLamp = (ctx: CanvasRenderingContext2D, frameCount: number) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  const centerX = ctx.canvas.width / 2;
  const centerY = ctx.canvas.height / 2;
  const ballCount = 10;
  const ballRadius = 50;
  if (balls.length === 0) {
    for (let i = 0; i < ballCount; i++) {
      balls.push(new Ball(centerX, centerY, ballRadius));
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
