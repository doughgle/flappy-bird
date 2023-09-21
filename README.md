# Flappy Bird Game

This project is a simple implementation of the popular game Flappy Bird that runs in the browser. The game consists of a bird that the player controls by clicking the mouse to make it flap its wings and avoid obstacles in the form of pipes.

## Project Structure

The project has the following files:

- `index.html`: This file is the entry point of the game. It contains the HTML structure of the game and links to the CSS and JS files.
- `css/style.css`: This file contains the styles for the game elements such as the bird and pipes.
- `js/game.js`: This file exports a class `Game` which has the following public methods:
  - `start`: starts the game loop and initializes the game elements.
  - `stop`: stops the game loop and clears the game elements.
  - `update`: updates the game state and checks for collisions.
  - `draw`: draws the game elements on the canvas.
  - `handleClick`: handles the click event and makes the bird flap.
- `js/bird.js`: This file exports a class `Bird` which has the following public properties and methods:
  - `x`: the x-coordinate of the bird.
  - `y`: the y-coordinate of the bird.
  - `width`: the width of the bird.
  - `height`: the height of the bird.
  - `velocity`: the vertical velocity of the bird.
  - `gravity`: the gravity that affects the bird.
  - `draw`: draws the bird on the canvas.
  - `update`: updates the bird's position and velocity.
  - `flap`: makes the bird flap and change its velocity.
- `js/pipe.js`: This file exports a class `Pipe` which has the following public properties and methods:
  - `x`: the x-coordinate of the pipe.
  - `y`: the y-coordinate of the pipe.
  - `width`: the width of the pipe.
  - `height`: the height of the pipe.
  - `gap`: the gap between the top and bottom pipes.
  - `speed`: the speed at which the pipe moves.
  - `draw`: draws the pipe on the canvas.
  - `update`: updates the pipe's position.
- `js/sprites.js`: This file exports an object `sprites` which contains the images for the game elements such as the bird and pipes.

## How to Play

To play the game, simply open the `index.html` file in a web browser. Click the mouse to make the bird flap its wings and avoid the pipes. The game ends when the bird collides with a pipe or the top/bottom of the screen.

## Credits

This project was created by [Your Name Here]. The game assets were obtained from [source of assets].