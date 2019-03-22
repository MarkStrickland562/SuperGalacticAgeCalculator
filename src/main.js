import AgeCalculator from './agecalculator.js';

$(document).ready(function() {
  $('#weekday-form').submit(function(event) {
    event.preventDefault();
    let myDate = $('#myDate').val();
    let d = new AgeCalculator(myDate, 'M');
    $('#result').text(d.userBirthDate);
console.log(d.userYearsLeftEarth());
  });
});
