function* generator() {
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
