export default class Vector2 {
  x: number;
  y: number;

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  add(v: Vector2) {
    return new Vector2(this.x + v.x, this.y + v.y);
  }

  subtract(v: Vector2) {
    return new Vector2(this.x - v.x, this.y - v.y);
  }

  multiply(v: Vector2) {
    return new Vector2(this.x * v.x, this.y * v.y);
  }

  divide(v: Vector2) {
    return new Vector2(this.x / v.x, this.y / v.y);
  }

  scale(s: number) {
    return new Vector2(this.x * s, this.y * s);
  }

  // 벡터의 크기(길이): 원점에서부터 벡터까지의 직선 거리
  magnitude() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}
