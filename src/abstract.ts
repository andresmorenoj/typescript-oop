import { Dog } from "./protected";

const newAnimal = new Dog('pepe', 'pepe2');
newAnimal.greet();

const cheis = new Dog('pepe', 'andres');
newAnimal.greet();
cheis.woof(2);
