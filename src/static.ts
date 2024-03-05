// console.log(Math.PI);
// console.log(Math.max(1,2,4,65,78,3));

class MyMath {
  static readonly PI = 3.14;

  static max(...args: number[]) {
    return args.reduce((max, item) => (max >= item ? max : item));
  }
}

// const math = new MyMath
// math.PI
console.log(MyMath.PI);
console.log(MyMath.max(-2, -4, -65, -78, -3, -1));
