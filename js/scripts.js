// Backend (Business) Logic
var add = function(q1answer, q2answer, q3answer, q4answer, q5answer) {
  return q1answer + q2answer + q3answer + q4answer + q5answer;
};

// Front End Logic
$(document).ready(function() {
  $("form#questions").submit(function() {
    debugger;
    var q1answer = parseInt($("input:radio[name=choice1]:checked").val());
    var q2answer = parseInt($("input:radio[name=choice2]:checked").val());
    var q3answer = parseInt($("input:radio[name=choice3]:checked").val());
    var q4answer = parseInt($("input:radio[name=choice4]:checked").val());
    var q5answer = parseInt($("input:radio[name=choice5]:checked").val());

    var result = add(q1answer, q2answer, q3answer, q4answer, q5answer);

    if(result <= 8) {
      $('#iceland').removeClass("hide");
    } else if(result >= 9 && result <= 13) {
      $('#outback').removeClass("hide");
    } else if(result >= 14 && result <= 17) {
      $('#sea').removeClass("hide");
    } else if(result >= 18 && result <= 21) {
      $('#rio').removeClass("hide");
    } else {
      $('#nyc').removeClass("hide");
    }
        event.preventDefault();
  });
});
