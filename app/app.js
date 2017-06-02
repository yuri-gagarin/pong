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

      if (lastTime) {
        this.updateGame((miliseconds - lastTime) / 1000);
      }
      lastTime = miliseconds;

      //rerenders assets at 60fps
      requestAnimationFrame(callback);
    };

    callback();

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

const game  = new Pong(canvas);

canvas.addEventListener('mousemove', event => {
  game.players[0].position.y = event.offsetY;
});
