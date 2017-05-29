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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

var Rectangle = exports.Rectangle = function () {
  function Rectangle(width, height) {
    _classCallCheck(this, Rectangle);

    this.position = new Vector();
    this.size = new Vector(width, height);
  }

  //helpers to easily get the edges of models


  _createClass(Rectangle, [{
    key: "leftEnd",
    get: function get() {
      return this.position.x - this.size.x / 2;
    }
  }, {
    key: "rightEnd",
    get: function get() {
      return this.position.x + this.size.x / 2;
    }
  }, {
    key: "topEnd",
    get: function get() {
      return this.position.y - this.size.y / 2;
    }
  }, {
    key: "bottomEnd",
    get: function get() {
      return this.position.y + this.size.y / 2;
    }
  }]);

  return Rectangle;
}();

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


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pongResources = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var canvas = document.getElementById("pong");
var context = canvas.getContext('2d');

var Player = function (_Rectangle) {
  _inherits(Player, _Rectangle);

  function Player(score) {
    _classCallCheck(this, Player);

    var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, 10, 60));

    _this.score = score;
    return _this;
  }

  return Player;
}(_pongResources.Rectangle);

var Pong = function () {
  function Pong(canvas) {
    var _this2 = this;

    _classCallCheck(this, Pong);

    this.canvas = canvas;
    this.context = context;

    //two player paddles
    this.players = [new Player(), new Player()];

    this.players[0].position.x = 10;
    this.players[0].position.y = this.canvas.height / 2;

    this.players[1].position.x = this.canvas.width - 10;
    this.players[1].position.y = this.canvas.height / 2;

    this.ball = new _pongResources.Ball();

    this.ball.position.x = 200;
    this.ball.position.y = 200;

    this.ball.velocity.x = 75;
    this.ball.velocity.y = 75;

    var lastTime = void 0;

    //animate the game
    var callback = function callback(miliseconds) {

      if (lastTime) {
        _this2.updateGame((miliseconds - lastTime) / 1000);
      }
      lastTime = miliseconds;

      //rerenders assets at 60fps
      requestAnimationFrame(callback);
    };

    callback();
  }

  _createClass(Pong, [{
    key: "renderModel",
    value: function renderModel(model) {
      // renders a game model, ball and paddle

      this.context.fillStyle = "#fff";
      this.context.fillRect(model.leftEnd, model.topEnd, model.size.x, model.size.y);
    }
  }, {
    key: "renderGame",
    value: function renderGame() {
      var _this3 = this;

      // renders the playing field and the ball model

      this.context.fillStyle = "#000";
      this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

      this.renderModel(this.ball);

      //renders the player paddles
      this.players.forEach(function (paddle) {
        _this3.renderModel(paddle);
      });
    }
  }, {
    key: "updateGame",
    value: function updateGame(time) {

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

      this.players[0].position.y = this.ball.position.y;
      this.players[1].position.y = this.ball.position.y;

      this.renderGame();
    }
  }]);

  return Pong;
}();

var newGame = new Pong(canvas);

/***/ })
/******/ ]);