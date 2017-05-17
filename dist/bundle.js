/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vector = exports.Vector = function Vector() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  _classCallCheck(this, Vector);

  this.x = x;
  this.y = y;
};

var Rectangle = exports.Rectangle = function Rectangle(width, height) {
  _classCallCheck(this, Rectangle);

  this.position = new Vector();
  this.size = new Vector(width, height);
};

var Ball = exports.Ball = function (_Rectangle) {
  _inherits(Ball, _Rectangle);

  function Ball() {
    _classCallCheck(this, Ball);

    var _this = _possibleConstructorReturn(this, (Ball.__proto__ || Object.getPrototypeOf(Ball)).call(this, 10, 10));

    _this.velocity = new Vector();
    return _this;
  }

  return Ball;
}(Rectangle);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _pongResources = __webpack_require__(0);

var canvas = document.getElementById("pong");
var context = canvas.getContext('2d');

var ball = new _pongResources.Ball();
ball.velocity.x = 15;
ball.velocity.y = 150;
ball.position.x = 20;
var lastTime = void 0;

function callback(miliseconds) {
  if (lastTime) {
    updateGame((miliseconds - lastTime) / 1000);
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

/***/ })
/******/ ]);