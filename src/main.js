import AgeCalculator from './agecalculator.js';

$(document).ready(function() {
  $('#weekday-form').submit(function(event) {
    event.preventDefault();
    let myDate = $('#myDate').val();
    let d = new AgeCalculator(myDate, 'M');
    $('#earthAge').text(d.userAgeEarth());
    $('#mercuryAge').text(d.userAgeMercury());
    $('#venusAge').text(d.userAgeVenus());
    $('#marsAge').text(d.userAgeMars());
    $('#jupiterAge').text(d.userAgeJupiter());
    $('#saturnAge').text(d.userAgeSaturn());
  });
});
