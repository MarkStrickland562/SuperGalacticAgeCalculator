export default class AgeCalculator {

  constructor(inputBirthDate) {
    this.year = parseInt(inputBirthDate.substring(0,4));
    this.month = parseInt(inputBirthDate.substring(5,7));
    this.day = parseInt(inputBirthDate.substring(8,10));
    this.userBirthDate = new Date(this.year, this.month - 1, this.day);
  }

  userAgeEarth() {
    return Math.floor((new Date() - this.userBirthDate) / 31536000000);
  }

  userAgeMercury() {
    return Math.floor((new Date() - this.userBirthDate) / 31536000000);
  }

  // constructor(myDate) {
  //   this.myDate = myDate;
  //   this.year = parseInt(this.myDate.substring(0,4));
  //   this.month = parseInt(this.myDate.substring(5,7));
  //   this.day = parseInt(this.myDate.substring(8,10));
  // }
  //
  // isLeapYear() {
  //   if (this.year % 4 === 0 && (this.year % 100 != 0 || this.year % 400 === 0)) {
  //       return true;
  //   }
  //   else {
  //       return false;
  //   }
  // }
  //
  // get dayOfWeek() {
  //   const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  //   let monthDays = [];
  //
  //   if (this.isLeapYear()) {
  //     monthDays = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
  //   } else {
  //     monthDays = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  //   }
  //
  //   let days = ((this.year - 1) * 365) + Math.floor(((this.year - 1) / 4)) - Math.floor(((this.year - 1) / 100)) + Math.floor(((this.year - 1) / 400))  + monthDays[this.month - 1] + this.day;
  //
  //   return daysOfWeek[(days % 7)];
  // }
}
