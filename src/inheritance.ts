export class Animal {
  constructor(public name: string) {}

  move() {
    console.log('Moving along!');
  }

  greet() {
    return `Hello I am ${this.name}`;
  }
}

export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
  }

  woof(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log('woof');
    }
  }
}

const fifi = new Animal('fifi');
fifi.move();
console.log(fifi.greet());

const cheis = new Dog('cheis', 'Andres');
cheis.move();
console.log(cheis.greet());
cheis.woof(5);
