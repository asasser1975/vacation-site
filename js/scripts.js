// Backend (Business) Logic
var result = function(q1answer, q2answer, q3answer, q4answer, q5answer, q6answer) {
  return q1answer + q2answer + q3answer + q4answer + q5answer + q6answer;
};

// Front End Logic
$(document).ready(function() {

  $("form#questions").submit(function() {
    var q1answer = $("input:radio[name=choice1]:checked").val();
    var q2answer = $("input:radio[name=choice2]:checked").val();
    var q3answer = $("input:radio[name=choice3]:checked").val();
    var q4answer = $("input:radio[name=choice4]:checked").val();
    var q5answer = $("input:radio[name=choice5]:checked").val();
    event.preventDefault();
  }


}
