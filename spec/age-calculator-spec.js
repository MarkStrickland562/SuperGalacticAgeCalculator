import AgeCalculator from './../src/agecalculator.js';

describe('AgeCalculator', function() {

  it('should test whether an AgeCalculator constructor works', function() {
    let testDate = "1962-05-03";
    let gender = "M";
    let userAge = new AgeCalculator(testDate, gender);

    expect(userAge.userBirthDate).toEqual(new Date(1962, 4, 3));
    expect(userAge.userGender).toEqual("M");
  });

  it('should validate that the entered birth date is in the past', function() {
    let testDate = "2020-05-03";
    let gender = "M";
    let userAge = new AgeCalculator(testDate, gender);

    expect(userAge.userBirthDateIsValid()).toBeFalsy();
  });

  it('should calculate the age of the user on Earth', function() {
    let testDate = "1962-05-03";
    let gender = "M";
    let userAge = new AgeCalculator(testDate, gender);

    expect(userAge.userAgeEarth()).toEqual(56);
  });

  it('should calculate the age of the user on Mercury', function() {
    let testDate = "1962-05-03";
    let gender = "M";
    let userAge = new AgeCalculator(testDate, gender);

    expect(userAge.userAgeMercury()).toEqual(237);
  });

  it('should calculate the age of the user on Venus', function() {
    let testDate = "1962-05-03";
    let gender = "M";
    let userAge = new AgeCalculator(testDate, gender);

    expect(userAge.userAgeVenus()).toEqual(91);
  });

  it('should calculate the age of the user on Mars', function() {
    let testDate = "1962-05-03";
    let gender = "M";
    let userAge = new AgeCalculator(testDate, gender);

    expect(userAge.userAgeMars()).toEqual(30);
  });

  it('should calculate the age of the user on Jupiter', function() {
    let testDate = "1962-05-03";
    let gender = "M";
    let userAge = new AgeCalculator(testDate, gender);

    expect(userAge.userAgeJupiter()).toEqual(4);
  });

  it('should calculate the age of the user on Saturn', function() {
    let testDate = "1962-05-03";
    let gender = "M";
    let userAge = new AgeCalculator(testDate, gender);

    expect(userAge.userAgeSaturn()).toEqual(1);
  });

  it('should calculate the remaining years of life based on gender for the user on Earth', function() {
    let testDate = "1962-05-03";
    let gender = "M";
    let userAge = new AgeCalculator(testDate, gender);

    expect(userAge.userYearsLeftEarth()).toEqual(20);
  });

  it('should calculate the remaining years of life based on gender for the user on Mercury', function() {
    let testDate = "1962-05-03";
    let gender = "M";
    let userAge = new AgeCalculator(testDate, gender);

    expect(userAge.userYearsLeftMercury()).toEqual(83);
  });

  it('should calculate the remaining years of life based on gender for the user on Venus', function() {
    let testDate = "1962-05-03";
    let gender = "M";
    let userAge = new AgeCalculator(testDate, gender);

    expect(userAge.userYearsLeftVenus()).toEqual(32);
  });

  it('should calculate the remaining years of life based on gender for the user on Mars', function() {
    let testDate = "1962-05-03";
    let gender = "M";
    let userAge = new AgeCalculator(testDate, gender);

    expect(userAge.userYearsLeftMars()).toEqual(10);
  });

  it('should calculate the remaining years of life based on gender for the user on Jupiter', function() {
    let testDate = "1962-05-03";
    let gender = "M";
    let userAge = new AgeCalculator(testDate, gender);

    expect(userAge.userYearsLeftJupiter()).toEqual(1);
  });

  it('should calculate the remaining years of life based on gender for the user on Saturn', function() {
    let testDate = "1962-05-03";
    let gender = "M";
    let userAge = new AgeCalculator(testDate, gender);

    expect(userAge.userYearsLeftSaturn()).toBeLessThan(1);
  });

  it('should determine if the user has exceeded their life expectancy', function() {
    let testDate = "1900-01-01";
    let gender = "M";
    let userAge = new AgeCalculator(testDate, gender);

    expect(userAge.userExceededLifeExpectancy()).toBeTruthy();
  });
})
