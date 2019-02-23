// Backend (Business) Logic
var add = function(q1answer, q2answer, q3answer, q4answer, q5answer, q6answer) {
  return q1answer + q2answer + q3answer + q4answer + q5answer + q6answer;
};

//function answercalculation(x) {

//}
// Front End Logic


$(document).ready(function() {
// Transition effects and apply hidden class to questions divs
//  $("button#climatebutton").click(function() {

//  });

//  $("button#weatherbutton").click(function() {

//  });

//  $("button#eventbutton").click(function() {
//  });

//
// Pull question answers

  var answer1 = $("form#climate").submit(function() {
    event.preventDefault();
    var q1answer = $("input:radio[name=choice1]:checked").val();
    alert(q1answer);
    $("div#q1").addClass("hide");
    $("div#q2").removeClass("hide");
    return q1answer;
  });

  var answer2 = $("form#weather").submit(function() {
    event.preventDefault();
    alert(answer1);
    var q2answer = $("input:radio[name=choice2]:checked").val();
    $("div#q2").addClass("hide");
    $("div#q3").removeClass("hide");
    alert(q2answer);
    return q2answer;
  });

  var answer3 = $("form#event").submit(function() {
    event.preventDefault();
    alert(answer2);
    var q3answer = $("input:radio[name=choice3]:checked").val();
    $("div#q3").addClass("hide");
    $("div#q4").removeClass("hide");
    return q3answer;
  });

  var answer4 = $("form#difficulty").submit(function() {
    event.preventDefault();
    var q4answer = $("input:radio[name=choice4]:checked").val();
    $("div#q4").addClass("hide");
    $("div#q5").removeClass("hide");
    return q4answer;
  });

  $("form#cost").submit(function(event) {
    event.preventDefault();
    var q5answer = $("input:radio[name=choice5]:checked").val();
    $("div#q5").addClass("hide");


    var result = parseInt(add(answer1, answer2, answer3, answer4, q5answer));

    if(result <= 8) {
      $('#iceland').show();
    } else if(result >= 9 && result <= 13) {
      $('#outback').show();
    } else if(result >= 14 && result <= 17) {
      $('#sea').show();
    } else if(result >= 18 && result <= 21) {
      $('$rio').show();
    } else {
      $('#nyc').show();
    }


  });

// Final ranking to reveal result div



});
