require("bootstrap-webpack");
require('./css/app.css');
import { Vector, Rectangle, Ball, Player } from "./scripts/pong_resources";


const canvas  = document.getElementById("pong");
const context = canvas.getContext('2d');




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

    this.ball.position.x = canvas.width / 2;
    this.ball.position.y = canvas.height /2;

    this.ball.velocity.x = 75;
    this.ball.velocity.y = 75;


    let lastTime;

    //animate the game
    const animateGame = (miliseconds) => {

      if (paused) {
        lastTime = false;
        return;
      }

      if (lastTime) {
        this.updateGame((miliseconds - lastTime) / 1000);
      }
      lastTime = miliseconds;

      //rerenders assets at 60fps
      requestAnimationFrame(animateGame);

    };

    animateGame();

    //needed to unpause the game
    this.animateGame = animateGame;

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

    if (paused) {
      this.ball.velocity.x = 0;
      this.ball.velocity.y = 0;
    }

    this.ball.position.x += this.ball.velocity.x * time;
    this.ball.position.y += this.ball.velocity.y * time;

    if (this.ball.leftEnd < 0 || this.ball.rightEnd > this.canvas.width) {
      this.ball.velocity.x = -this.ball.velocity.x;
    }

    if (this.ball.topEnd < 0 || this.ball.bottomEnd > this.canvas.height) {
      this.ball.velocity.y = -this.ball.velocity.y;
    }

    if (this.ball.position.y < 0 || this.ball.position.y > 400) {
    }

    this.players[1].position.y = this.ball.position.y;

    this.players.forEach(player => {
      this.collideWithPaddle(player, this.ball);
    });
    this.renderGame();

  }
}

// game element and event listeners

let game;
let isPlaying = false;

const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

const warningPanel = document.getElementById("warning-panel");
const confirmReset = document.getElementById("reset-yes");
const cancelReset = document.getElementById("reset-cancel");

startButton.addEventListener('click', event => {

  if (!isPlaying) {
    game = new Pong(canvas);
    isPlaying = true;
    startButton.classList.add("disabled");
    startButton.innerHTML = "Good Luck!";
  }

});

pauseButton.addEventListener('click', event => {

  if (isPlaying && !paused) {
    paused = true;
    pauseButton.innerHTML = "Resume!";
  }

  else if (isPlaying && paused) {
    paused = false;
    pauseButton.innerHTML = "Pause!";
    requestAnimationFrame(game.animateGame);
  }

});

resetButton.addEventListener('click', event => {

  if (isPlaying) {
    warningPanel.classList.remove("hidden");
    paused = true;
  }

});

confirmReset.addEventListener('click', event => {

  paused  = false;
  pauseButton.innerHTML = "Pause!";
  warningPanel.classList.add("hidden");
  game = new Pong(canvas);


});

cancelReset.addEventListener('click', event => {

  if (paused) {
    paused = false;
    pauseButton.innerHTML = "Pause!";
    warningPanel.classList.add("hidden");
    requestAnimationFrame(game.animateGame);
    console.log(this);
  }

  else {
    warningPanel.classlikst.add("hidden");
    requestAnimationFrame(game.animateGame);
    console.log(this);
  }

});



canvas.addEventListener('mousemove', event => {

  if (isPlaying) {
    game.players[0].position.y = event.offsetY;
  }

});
