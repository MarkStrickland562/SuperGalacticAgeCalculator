import AgeCalculator from './../src/agecalculator.js';

describe('AgeCalculator', function() {

  it('should test whether an AgeCalculator constructor works', function() {
    let testDate = "1962-05-03";
    let userAge = new AgeCalculator(testDate);
    expect(userAge.userBirthDate).toEqual(new Date(1962, 04, 03));
  });

})
