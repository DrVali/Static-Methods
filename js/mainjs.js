class squares {
  // A static method to calculate the square of an integer
  constructor(num) {
    this.myNum = num * num;
    //this.myNum = this.myNum * this.myNum;
  }
}

const x = new squares(15);
let u = x;
console.log(u.myNum);
