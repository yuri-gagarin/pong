import {Vector, Rectangle, Ball} from "./resources/pongResources";


const canvas  = document.getElementById("pong");
const context = canvas.getContext('2d');

const ball = new Ball;
ball.velocity.x = 15;
ball.velocity.y = 150;
ball.position.x = 20;
let lastTime;

function callback(miliseconds) {
  if (lastTime) {
    updateGame((miliseconds - lastTime) / 1000)
  }
  lastTime = miliseconds;
  requestAnimationFrame(callback);
}


function updateGame(time) {
  ball.position.x += ball.velocity.x * time;
  ball.position.y += ball.velocity.y * time;

  if (ball.position.x < 0 || ball.position.x > canvas.width) {
    ball.velocity.x = -ball.velocity.x;
  }

  if (ball.position.y < 0 || ball.position.y > canvas.height) {
    ball.velocity.y = -ball.velocity.y;
  }



  context.fillStyle = "#000";
  context.fillRect(0, 0, canvas.width, canvas.height);


  context.fillStyle = "#fff";
  context.fillRect(ball.position.x, ball.position.y, ball.size.x, ball.size.y);
  //console.log("x is", ball.position.x);
  if (ball.position.y < 0 || ball.position.y > 400) {
    console.log("y is", ball.position.y);
  }
}

callback();

console.log(ball);
