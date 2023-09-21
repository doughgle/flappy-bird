export class Pipe {
  constructor(x, speed) {
    this.x = x;
    this.y = Math.random() * 200 + 100;
    this.width = 50;
    this.height = 300;
    this.speed = speed;
    this.passed = false;
  }

  update(deltaTime) {
    this.x -= this.speed * deltaTime;
  }

  render(ctx) {
    ctx.fillStyle = '#0f0';
    ctx.fillRect(this.x, 0, this.width, this.y);
    ctx.fillRect(this.x, this.y + this.height, this.width, ctx.canvas.height - this.y - this.height);
  }

  collidesWith(bird) {
    if (bird.x + 10 > this.x && bird.x - 10 < this.x + this.width) {
      if (bird.y - 10 < this.y || bird.y + 10 > this.y + this.height) {
        return true;
      }
    }
    return false;
  }
}