require("bootstrap-webpack");
require('./css/app.css');
import {Vector, Rectangle, Ball} from "./resources/pongResources";


const canvas  = document.getElementById("pong");
const context = canvas.getContext('2d');



class Player extends  Rectangle {

  constructor(score) {
    super(10, 60);
    this.score = score;
  }

}

var paused = false;

class Pong {

  constructor(canvas) {

    this.canvas = canvas;
    this.context = context;


    //two player paddles
    this.players = [new Player, new Player];

    this.players[0].position.x = 10;
    this.players[0].position.y  = this.canvas.height / 2;

    this.players[1].position.x = this.canvas.width - 10;
    this.players[1].position.y = this.canvas.height / 2;

    this.ball = new Ball;

    this.ball.position.x = 200;
    this.ball.position.y = 200;

    this.ball.velocity.x = 75;
    this.ball.velocity.y = 75;


    let lastTime;

    //animate the game
    const callback = (miliseconds) => {
      if (paused) {
        return;
      }

      if (lastTime) {
        this.updateGame((miliseconds - lastTime) / 1000);
      }
      lastTime = miliseconds;

      //rerenders assets at 60fps
      requestAnimationFrame(callback);
    };

    callback();

    this.animate = callback;

  }

  renderModel(model) {
    // renders a game model, ball and paddle

    this.context.fillStyle = "#fff";
    this.context.fillRect(model.leftEnd, model.topEnd, model.size.x, model.size.y);

  }

  collideWithPaddle(paddle, ball) {
    if (paddle.leftEnd < ball.rightEnd && paddle.rightEnd > ball.leftEnd
        && paddle.topEnd < ball.bottomEnd && paddle.bottomEnd > ball.topEnd) {
          ball.velocity.x = -ball.velocity.x;
        }
  }

  renderGame() {
    // renders the playing field and the ball model

    this.context.fillStyle = "#000";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.renderModel(this.ball);

    //renders the player paddles
    this.players.forEach((paddle) => {
      this.renderModel(paddle);
    });


  }

  updateGame(time) {

    this.ball.position.x += this.ball.velocity.x * time;
    this.ball.position.y += this.ball.velocity.y * time;

    if (this.ball.leftEnd < 0 || this.ball.rightEnd > this.canvas.width) {
      this.ball.velocity.x = -this.ball.velocity.x;
    }

    if (this.ball.topEnd < 0 || this.ball.bottomEnd > this.canvas.height) {
      this.ball.velocity.y = -this.ball.velocity.y;
    }

    if (this.ball.position.y < 0 || this.ball.position.y > 400) {
      console.log("y is", this.ball.position.y);
    }

    this.players[1].position.y = this.ball.position.y;

    this.players.forEach(player => {
      this.collideWithPaddle(player, this.ball);
    });
    this.renderGame();

  }
}


var game;
var isPlaying = false;

const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

startButton.addEventListener('click', event => {
   if (!isPlaying) {
     game = new Pong(canvas);
     isPlaying = true;
     startButton.classList.add("disabled");
     startButton.innerHTML = "Good Luck!";
     console.log(startButton);
   }
});

pauseButton.addEventListener('click', event => {

  var velocity_x;
  var velocity_y;

  if (isPlaying && !paused) {

    velocity_x = game.ball.velocity.x;
    velocity_y = game.ball.velocity.y;
    paused = true;
    pauseButton.innerHTML = "Resume!";
    game.ball.velocity.x = 0;
    game.ball.velocity.y = 0;
    console.log(paused);
  }
  else if (isPlaying && paused) {
    game.ball.velocity.x = 75;
    game.ball.velocity.y = 75;
    paused = false;
    pauseButton.innerHTML = "Pause!";
    requestAnimationFrame(game.animate);

    console.log(velocity_y);
    console.log(velocity_x);
    console.log(game);
  }
  console.log(velocity_x);
});

resetButton.addEventListener('click', event => {
  if (paused) {
    paused = false;
    pauseButton.innerHTML = "Pause!";
    game = new Pong(canvas);
    game.ball.position.x = canvas.width / 2;
    game.ball.position.y = canvas.height / 2;
  }
  else {
    game = new Pong(canvas);
    game.ball.position.x = canvas.width / 2;
    game.ball.position.y = canvas.height / 2;
  }

});

canvas.addEventListener('mousemove', event => {
  if (isPlaying) {
    game.players[0].position.y = event.offsetY;
  }
});
