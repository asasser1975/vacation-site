// Backend (Business) Logic
var result = function(q1answer, q2answer, q3answer, q4answer, q5answer, q6answer) {
  return q1answer + q2answer + q3answer + q4answer + q5answer + q6answer;
};

// Front End Logic


$(document).ready(function() {


// Pull question answers
  $("form#q1").submit(function() {
    var q1answer = $("input:radio[name=choice1]:checked").val();
    event.preventDefault();
  });
  $("form#q2").submit(function() {
    var q2answer = $("input:radio[name=choice2]:checked").val();
    event.preventDefault();
  });
  $("form#q3").submit(function() {
    var q3answer = $("input:radio[name=choice3]:checked").val();
    event.preventDefault();
  });
  $("form#q4").submit(function() {
    var q4answer = $("input:radio[name=choice4]:checked").val();
    event.preventDefault();
  });
  $("form#q1").submit(function() {
    var q5answer = $("input:radio[name=choice5]:checked").val();
    event.preventDefault();
  });




}
