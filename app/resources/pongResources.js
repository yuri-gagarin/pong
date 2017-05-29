export class Vector {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}

export class Rectangle {
  constructor(width, height) {
    this.position = new Vector;
    this.size = new Vector(width, height);
  }


  //helpers to easily get the edges of models
  get leftEnd () {
    return this.position.x - this.size.x / 2;
  }

  get rightEnd () {
    return this.position.x + this.size.x / 2;
  }

  get topEnd () {
    return this.position.y - this.size.y / 2;
  }
  get bottomEnd () {
    return this.position.y + this.size.y / 2;
  }
}

export class Ball extends Rectangle {
  constructor() {
    super(10, 10);
    this.velocity = new Vector;
  }
}
