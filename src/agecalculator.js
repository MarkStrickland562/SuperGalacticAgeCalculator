export default class AgeCalculator {

  constructor(inputBirthDate, inputGender) {
    this.year = parseInt(inputBirthDate.substring(0,4));
    this.month = parseInt(inputBirthDate.substring(5,7));
    this.day = parseInt(inputBirthDate.substring(8,10));
    this.userBirthDate = new Date(this.year, this.month - 1, this.day);
    this.userGender = inputGender.toUpperCase();
    this.currentDate = new Date;
    this.currentYear = this.currentDate.getFullYear();
    this.leapDays = this.getLeapDays();
    this.currentDate.setDate(this.currentDate.getDate() - this.leapDays);
  }

  userBirthDateIsValid() {
    if (this.userBirthDate >= this.currentDate) {
      return false
    } else {
      return true
    }
  }

  isLeapYear(theYear) {
    if (theYear % 4 === 0 && (theYear % 100 != 0 || theYear % 400 === 0)) {
      return true;
    }
    else {
      return false;
    }
  }

  getLeapDays() {
    let leapDays = 0;
    for (let i = this.year + 1; i <= this.currentYear; i++) {
      if (this.isLeapYear(i)) {
        leapDays++;
      }
    }
    return leapDays;
  }

  userAgeEarth() {
    return Math.floor((this.currentDate - this.userBirthDate) / 31536000000);
  }

  userAgeMercury() {
    return Math.floor(((this.currentDate - this.userBirthDate) / 31536000000)*(1 / .24));
  }

  userAgeVenus() {
    return Math.floor(((this.currentDate - this.userBirthDate) / 31536000000)*(1 / .62));
  }

  userAgeMars() {
    return Math.floor(((this.currentDate - this.userBirthDate) / 31536000000)*(1 / 1.88));
  }

  userAgeJupiter() {
    return Math.floor(((this.currentDate - this.userBirthDate) / 31536000000)*(1 / 11.86));
  }

  userAgeSaturn() {
    return Math.floor(((this.currentDate - this.userBirthDate) / 31536000000)*(1 / 29.457));
  }

  userYearsLeftEarth() {
    const maleLifeExp = 76;
    const femaleLifeExp = 81;

    if (this.userGender === 'M') {
      return maleLifeExp - this.userAgeEarth();
    } else {
      return femaleLifeExp - this.userAgeEarth();
    }
  }

  userYearsLeftMercury() {
    const maleLifeExp = 76;
    const femaleLifeExp = 81;

    if (this.userGender === 'M') {
      return Math.floor((maleLifeExp - this.userAgeEarth()) * (1 / .24));
    } else {
      return Math.floor((femaleLifeExp - this.userAgeEarth()) * (1 / .24));
    }
  }

  userYearsLeftVenus() {
    const maleLifeExp = 76;
    const femaleLifeExp = 81;

    if (this.userGender === 'M') {
      return Math.floor((maleLifeExp - this.userAgeEarth()) * (1 / .62));
    } else {
      return Math.floor((femaleLifeExp - this.userAgeEarth()) * (1 / .62));
    }
  }

  userYearsLeftMars() {
    const maleLifeExp = 76;
    const femaleLifeExp = 81;

    if (this.userGender === 'M') {
      return Math.floor((maleLifeExp - this.userAgeEarth()) * (1 / 1.88));
    } else {
      return Math.floor((femaleLifeExp - this.userAgeEarth()) * (1 / 1.88));
    }
  }

  userYearsLeftJupiter() {
    const maleLifeExp = 76;
    const femaleLifeExp = 81;

    if (this.userGender === 'M') {
      return Math.floor((maleLifeExp - this.userAgeEarth()) * (1 / 11.86));
    } else {
      return Math.floor((femaleLifeExp - this.userAgeEarth()) * (1 / 11.86));
    }
  }

  userYearsLeftSaturn() {
    const maleLifeExp = 76;
    const femaleLifeExp = 81;

    if (this.userGender === 'M') {
      return Math.floor((maleLifeExp - this.userAgeEarth()) * (1 / 29.457));
    } else {
      return Math.floor((femaleLifeExp - this.userAgeEarth()) * (1 / 29.457));
    }
  }

  userExceededLifeExpectancy() {
    if (this.userYearsLeftEarth() < 0) {
      return true;
    } else {
      return false;
    }
  }
}
