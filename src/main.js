import AgeCalculator from './agecalculator.js';
import './styles.css';
import './img/comet.jpg';

$(document).ready(function() {
  $('#weekday-form').submit(function(event) {
    event.preventDefault();
    let myDate = $('#myDate').val();
    let myGender = $('input:radio[name=myGender]:checked').val();
    let d = new AgeCalculator(myDate, myGender);
    if (d.userBirthDateIsValid()) {
      $('#validDate').text("The date you entered is valid.");
      $('#earthAge').text(d.userAgeEarth());
      $('#mercuryAge').text(d.userAgeMercury());
      $('#venusAge').text(d.userAgeVenus());
      $('#marsAge').text(d.userAgeMars());
      $('#jupiterAge').text(d.userAgeJupiter());
      $('#saturnAge').text(d.userAgeSaturn());
      $('#userYearsLeftEarth').text(d.userYearsLeftEarth());
      $('#userYearsLeftMercury').text(d.userYearsLeftMercury());
      $('#userYearsLeftVenus').text(d.userYearsLeftVenus());
      $('#userYearsLeftMars').text(d.userYearsLeftMars());
      if (d.userYearsLeftJupiter() < 1) {
        $('#userYearsLeftJupiter').text('< 1');
      } else {
        $('#userYearsLeftJupiter').text(d.userYearsLeftJupiter());
      }
      if (d.userYearsLeftSaturn() < 1) {
        $('#userYearsLeftSaturn').text('< 1');
      } else {
        $('#userYearsLeftSaturn').text(d.userYearsLeftSaturn());
      }
      if (d.userExceededLifeExpectancy()) {
        $('#exceeded').text("Congratulations! You have exceeded your life expectancy!");
      } else {
        $('#exceeded').text("You have not yet exceeded your life expectancy...keep going!");
      }
    } else {
      $('#validDate').text("The date you entered is invalid");
    }
  });
});
