// Backend (Business) Logic
var result = q1 + q2 + q3 + q4 + q5 + q6;


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
