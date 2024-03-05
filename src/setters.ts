export class MyDate {
  constructor(
    public year: number = 1993,
    private _month: number = 6,
    private _day: number = 16
  ) {}

  private addPadding(value: number): string {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this._month);
    return `${day}/${month}/${this.year}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    switch (type) {
      case 'days':
        this._day += amount;
      case 'months':
        this._month += amount;
      case 'years':
        this.year += amount;
      default:
        break;
    }
  }

  get day() {
    return this._day;
  }

  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }
  get month() {
    return this._month;
  }

  set month(newValue: number) {
    if(newValue >= 1 && newValue <= 12) this._month = newValue;
    else {
      throw new Error('Month out of range')
    }
  }
}

const myDate = new MyDate(1993, 10, 15);
console.log(myDate.printFormat());
myDate.month = 4;
console.log('get', myDate.month);

myDate.month = 100
console.log('get', myDate.month);
