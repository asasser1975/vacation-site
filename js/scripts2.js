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
//    alert(q1answer);
//    $("div#q1").addClass("hide");
//    $("div#q2").removeClass("hide");
//    return answer1;
  });

  // var answer2 = $("form#weather").submit(function() {
  //   event.preventDefault();
  //   alert(answer1);
  //   var q2answer = $("input:radio[name=choice2]:checked").val();
  //   $("div#q2").addClass("hide");
  //   $("div#q3").removeClass("hide");
  //   return q2answer;
  // });
  //
  // var answer3 = $("form#event").submit(function() {
  //   event.preventDefault();
  //   alert(answer2);
  //   var q3answer = parseInt($("input:radio[name=choice3]:checked").val());
  //   $("div#q3").addClass("hide");
  //   $("div#q4").removeClass("hide");
  //   return q3answer;
  // });
  // var answer4 = $("form#difficulty").submit(function() {
  //   event.preventDefault();
  //   var q4answer = $("input:radio[name=choice4]:checked").val();
  //   $("div#q4").addClass("hide");
  //   $("div#q5").removeClass("hide");
  //   return q4answer;
  // });
  //
  // $("form#cost").submit(function(event) {
  //   event.preventDefault();
  //   var q5answer = parseInt($("input:radio[name=choice5]:checked").val());
  //   $("div#q5").addClass("hide");
  //
  //
  //   var result = parseInt(add(answer1, answer2, answer3, answer4, q5answer));
  //
  //   if(result <= 8) {
  //     $('#iceland').show();
  //   } else if(result >= 9 && result <= 13) {
  //     $('#outback').show();
  //   } else if(result >= 14 && result <= 17) {
  //     $('#sea').show();
  //   } else if(result >= 18 && result <= 21) {
  //     $('$rio').show();
  //   } else {
  //     $('#nyc').show();
  //   }
  //
  //
  // });
});