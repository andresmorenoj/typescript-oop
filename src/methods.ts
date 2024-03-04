export class MyDate {
  year: number;
  month: number;
  day: number

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day
  }

  printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years'){
    switch (type) {
      case 'days':
        this.day += amount
      case 'months':
        this.month += amount
      case 'years':
        this.year += amount
      default:
        break;
    }
  }
}

const myDate = new MyDate(1993, 5, 15);
console.log(myDate.printFormat());
myDate.add(3, 'days');
console.log(myDate.printFormat());
