class MyClass {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  print() {
    console.log(this.x + this.y);
  }
}

const myClass = new MyClass(1, 3);
myClass.print();

/*function* generator() {
  let x = 10;
  while (true) {
    x += yield x;
  }
}

const g = generator();

console.log(g.next(5));
console.log(g.next(5));
console.log(g.next(4));
console.log(g.next(3));
*/
