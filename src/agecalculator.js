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

}
