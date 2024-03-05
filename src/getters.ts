export class MyDate {
  constructor(public year: number = 1993, public month: number = 6, private _day: number = 16) {}

  private addPadding(value: number): string {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    switch (type) {
      case 'days':
        this._day += amount;
      case 'months':
        this.month += amount;
      case 'years':
        this.year += amount;
      default:
        break;
    }
  }

  get day() {
    return this._day
  }

  get isLeapYear(): boolean {
    if(this.year % 400 === 0) return true;
    if(this.year % 100 === 0) return false;

    return this.year % 4 === 0;
  }
}

const myDate = new MyDate(1993, 10, 15);
console.log(myDate.printFormat());

const myDate2 = new MyDate();
console.log(myDate2.printFormat());

myDate.day;
myDate.isLeapYear
console.log(myDate.day)
console.log(myDate.isLeapYear);

const myDate3 = new MyDate(2000, 10, 15);
console.log("myDate3", myDate3.isLeapYear);

const myDate4 = new MyDate(2002, 10, 15);
console.log("myDate4", myDate4.isLeapYear);

const myDate5 = new MyDate(2003, 10, 15);
console.log("myDate5", myDate5.isLeapYear);

const myDate6 = new MyDate(2004, 10, 15);
console.log("myDate6", myDate6.isLeapYear);
