export class MyDate {
  year: number;
  month: number;
  private day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  private addPadding(value: number): string {
    if(value < 10) {
      return `0${value}`
    }
    return `${value}`
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
