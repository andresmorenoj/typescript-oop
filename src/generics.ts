// function getValue(value: unknown) {
//   return value;
// }

import { Dog } from "./protected";

// function getValue(value: number | string) {
//   return value;
// }

function getValue<myType>(value: myType) {
  const array: myType[] = [value]
  return array;
}

getValue<number>(12);
getValue<string>('12');
getValue<number[]>([2]);

const newDog = new Dog('fifi', 'fufu');
getValue<Dog>(newDog);
