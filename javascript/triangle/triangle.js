export default class {
  constructor(x, y, z) {
    this.sides = [x, y, z];
  }

  kind() {
    this.sides.sort(this.compareNumbers);

    if ((this.sides[0] <= 0 || this.sides[1] <= 0 || this.sides[2] <= 0)
    || (this.sides[2] > this.sides[0] + this.sides[1])) {
      throw true;
    }

    if (this.sides[0] === this.sides[1] && this.sides[0] === this.sides[2]) {
      return 'equilateral';
    } else if (this.sides[1] === this.sides[2]
       || this.sides[0] === this.sides[1]
       || this.sides[0] === this.sides[2]) {
      return 'isosceles';
    } else {
      return 'scalene';
    }
  }

  compareNumbers(a, b) {
    return a - b;
  }
}
