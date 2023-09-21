import { Bird } from './bird.js';
import { Pipe } from './pipe.js';

const GRAVITY = 1.6;
const PIPE_INTERVAL = 15;
const PIPE_SPEED = 50;

export default class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.bird = new Bird(canvas.width / 2, canvas.height / 2, GRAVITY);
        this.pipes = [];
        this.pipeTimer = 0;
        this.score = 0;
    }

    start() {
        this.lastTime = Date.now();
        requestAnimationFrame(this.gameLoop.bind(this));

        canvas.addEventListener('click', () => {
            this.bird.flap();
        });
    }

    gameLoop() {
        const currentTime = Date.now();
        const deltaTime = (currentTime - this.lastTime) / 100;
        this.lastTime = currentTime;

        this.update(deltaTime);
        this.render();

        requestAnimationFrame(this.gameLoop.bind(this));
    }

    update(deltaTime) {
        this.bird.update(deltaTime);

        // Add new pipes
        this.pipeTimer += deltaTime;
        if (this.pipeTimer >= PIPE_INTERVAL) {
            this.pipeTimer = 0;
            const pipe = new Pipe(this.canvas.width, PIPE_SPEED);
            this.pipes.push(pipe);
        }

        // Update pipes
        for (let i = this.pipes.length - 1; i >= 0; i--) {
            const pipe = this.pipes[i];
            pipe.update(deltaTime);

            // Remove pipes that have gone off-screen
            if (pipe.x + pipe.width < 0) {
                this.pipes.splice(i, 1);
            }

            // Check for collision with bird
            if (pipe.collidesWith(this.bird)) {
                alert(`Game over! Score: ${this.score}`);
                location.reload();
            }

            // Increment score if bird passes pipe
            if (pipe.x + pipe.width < this.bird.x && !pipe.passed) {
                pipe.passed = true;
                this.score++;
            }
        }
    }

    render() {
        // Clear canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw bird
        this.bird.render(this.ctx);

        // Draw pipes
        for (const pipe of this.pipes) {
            pipe.render(this.ctx);
        }

        // Draw score
        this.ctx.fillStyle = '#000';
        this.ctx.font = '24px Arial';
        this.ctx.fillText(`Score: ${this.score}`, 10, 30);
    }
}