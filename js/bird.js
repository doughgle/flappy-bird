export class Bird {
  constructor(x, y, gravity) {
    this.x = x;
    this.y = y;
    this.velocityY = 0;
    this.gravity = gravity;
  }

  update(deltaTime) {
    this.velocityY += this.gravity * deltaTime;
    this.y += this.velocityY * deltaTime;
  }

  render(ctx) {
    ctx.fillStyle = '#f00';
    ctx.fillRect(this.x - 10, this.y - 10, 20, 20);
  }

  flap() {
    this.velocityY = -10;
  }
}