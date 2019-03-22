import AgeCalculator from './../src/agecalculator.js';

describe('AgeCalculator', function() {

  it('should test whether an AgeCalculator constructor works', function() {
    let testDate = "1962-05-03";
    let gender = "M";
    let userAge = new AgeCalculator(testDate, gender);

    expect(userAge.userBirthDate).toEqual(new Date(1962, 4, 3));
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


})
