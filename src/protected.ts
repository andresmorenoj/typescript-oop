export class Animal {
  constructor(protected name: string) {}

  move() {
    console.log('Moving along!');
  }

  greet() {
    return `Hello I am ${this.name}`;
  }

  protected doSomething() {
    console.log('doooo');

  }
}

export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
  }

  woof(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log(`Woof! ${this.name}`);
    }
    this.doSomething();
  }

  move() {
    console.log('Move from Dog');
    super.move();
  }
}

const cheis = new Dog('cheis', 'Andres');
cheis.move();
console.log(cheis.greet());
// cheis.name = 'chous'
cheis.woof(1)
