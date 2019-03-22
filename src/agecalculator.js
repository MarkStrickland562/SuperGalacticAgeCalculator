export default class AgeCalculator {

  constructor(inputBirthDate, inputGender) {
    this.year = parseInt(inputBirthDate.substring(0,4));
    this.month = parseInt(inputBirthDate.substring(5,7));
    this.day = parseInt(inputBirthDate.substring(8,10));
    this.userBirthDate = new Date(this.year, this.month - 1, this.day);
    this.gender = inputGender;
  }

  userAgeEarth() {
    return Math.floor((new Date() - this.userBirthDate) / 31536000000);
  }

  userAgeMercury() {
    return Math.floor(((new Date() - this.userBirthDate) / 31536000000)*(1 / .24));
  }

  userAgeVenus() {
    return Math.floor(((new Date() - this.userBirthDate) / 31536000000)*(1 / .62));
  }

  userAgeMars() {
    return Math.floor(((new Date() - this.userBirthDate) / 31536000000)*(1 / 1.88));
  }

  userAgeJupiter() {
    return Math.floor(((new Date() - this.userBirthDate) / 31536000000)*(1 / 11.86));
  }

  userAgeSaturn() {
    return Math.floor(((new Date() - this.userBirthDate) / 31536000000)*(1 / 29.457));
  }

  userYearsLeftEarth() {
    const maleLifeExp = 76;
    const femaleLifeExp = 81;

    if (this.gender === 'M') {
      return maleLifeExp - this.userAgeEarth();
    } else {
      return femaleLifeExp - this.userAgeEarth();
    }
  }

  userYearsLeftMercury() {
    const maleLifeExp = 76;
    const femaleLifeExp = 81;

    if (this.gender === 'M') {
      return Math.floor((maleLifeExp - this.userAgeEarth()) * (1 / .24));
    } else {
      return Math.floor((femaleLifeExp - this.userAgeEarth()) * (1 / .24));
    }
  }

}
