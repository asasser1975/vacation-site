// Backend (Business) Logic
var add = function(q1answer, q2answer, q3answer, q4answer, q5answer) {
  return q1answer + q2answer + q3answer + q4answer + q5answer;
};

// Front End Logic
$(document).ready(function() {
  $("#clickbuttonq1").click(function() {
    $("#q1").slideToggle();
    $("#q2").removeClass("hide");
  });

  $("#clickbuttonq2").click(function() {
    $("#q2").slideToggle();
    $("#q3").removeClass("hide");
  });

  $("#clickbuttonq3").click(function() {
    $("#q3").slideToggle();
    $("#q4").removeClass("hide");
  });

  $("#clickbuttonq4").click(function() {
    $("#q4").slideToggle();
    $("#q5").removeClass("hide");
    $("#findout").removeClass("hide");
  });

  $("form#questions").submit(function() {
    var q1answer = parseInt($("input:radio[name=choice1]:checked").val());
    var q2answer = parseInt($("input:radio[name=choice2]:checked").val());
    var q3answer = parseInt($("input:radio[name=choice3]:checked").val());
    var q4answer = parseInt($("input:radio[name=choice4]:checked").val());
    var q5answer = parseInt($("input:radio[name=choice5]:checked").val());

    var result = add(q1answer, q2answer, q3answer, q4answer, q5answer);

    if(result <= 8) {
      $("#q5").slideToggle();
      $("#findout").addClass("hide");
      $("#q1").addClass("hide");
      $('#iceland').removeClass("hide");
    } else if(result >= 9 && result <= 13) {
      $("#q5").slideToggle();
      $("#findout").addClass("hide");
      $('#outback').removeClass("hide");
    } else if(result >= 14 && result <= 17) {
      $("#q5").slideToggle();
      $("#findout").addClass("hide");
      $('#sea').removeClass("hide");
    } else if(result >= 18 && result <= 21) {
      $("#q5").slideToggle();
      $("#findout").addClass("hide");
      $('#rio').removeClass("hide");
    } else {
      $("#q5").slideToggle();
      $("#findout").addClass("hide");
      $('#nyc').removeClass("hide");
    }

    event.preventDefault();
  });
});
