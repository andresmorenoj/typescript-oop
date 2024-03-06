export class MyService {
  static instance: MyService | null = null;
  private constructor(private name: string) {}

  getName() {
    return this.name;
  }

  static create(name: string) {
    if (MyService.instance === null) {
      console.log('create instance');
      MyService.instance = new MyService(name);
    }

    return MyService.instance;
  }
}

const newService = MyService.create('serviceName');
console.log('newService', newService);

const anotherService = MyService.create('anotherService');
console.log('anotherService', anotherService);

const service3 = MyService.create('service3');
console.log('service3', service3);

console.log(newService === anotherService);
