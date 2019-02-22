// Backend (Business) Logic
var add = function(q1answer, q2answer, q3answer, q4answer, q5answer, q6answer) {
  return q1answer + q2answer + q3answer + q4answer + q5answer + q6answer;
};

// Front End Logic


$(document).ready(function() {
// Transition effects and apply hidden class to questions divs
  $("button#climbtn").click(function() {
    $("div#q1").removeClass("hide");
    $("div#q1").addClass("hide");
    $("div#q2").removeClass("hide");
  });

  $("button#weatherbtn").click(function() {
    $("div#q2").removeClass("hide");
    $("div#q2").addClass("hide");
    $("div#q3").removeClass("hide");
  });

  $("button#eventbtn").click(function() {
    $("div#q3").removeClass("hide");
    $("div#q3").addClass("hide");
    $("div#q4").removeClass("hide");
  });

  $("button#diffbtn").click(function() {
    $("div#q4").removeClass("hide");
    $("div#q4").addClass("hide");
    $("div#q5").removeClass("hide");
  });

  $("button#costbtn").click(function() {
    $("div#q5").removeClass("hide");
    $("div#q5").addClass("hide");
  });

// Pull question answers
// debugger;
  $("form#climate").submit(function() {
    var q1answer = $("input:radio[name=choice1]:checked").val();
    alert(q1answer);
    event.preventDefault();
  });
  $("form#weather").submit(function() {
    var q2answer = $("input:radio[name=choice2]:checked").val();
    alert(q1answer);
    alert(q2answer);
    event.preventDefault();
  });
  $("form#event").submit(function() {
    var q3answer = parseInt($("input:radio[name=choice3]:checked").val());
    alert("Got Answer 3 number value = "(q3answer));
    event.preventDefault();
  });
  $("form#difficulty").submit(function() {
    var q4answer = parseInt($("input:radio[name=choice4]:checked").val());
    alert("Got Answer 4 number value = "(q4answer));
    event.preventDefault();
  });
  $("form#cost").submit(function(event) {
    var q5answer = parseInt($("input:radio[name=choice5]:checked").val());
    alert("Got Answer 5 number value = "(q5answer));

    var result = add(q1answer, q2answer, q3answer, q4answer, q5answer);
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

    event.preventDefault();
  });

// Final ranking to reveal result div



});
