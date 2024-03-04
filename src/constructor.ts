export class MyDate {
  constructor(public year: number = 1993, public month: number = 6, private day: number = 16) {}

  private addPadding(value: number): string {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    switch (type) {
      case 'days':
        this.day += amount;
      case 'months':
        this.month += amount;
      case 'years':
        this.year += amount;
      default:
        break;
    }
  }
}

const myDate = new MyDate(1993, 10, 15);
console.log(myDate.printFormat());

const myDate2 = new MyDate();
console.log(myDate2.printFormat());
