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
}

export class Ball extends Rectangle {
  constructor() {
    super(10, 10);
    this.velocity = new Vector;
  }
}
