var questionsList = [
  "Do you have Fever above 101.4?",
  "Do you have Cough - (Dry Cough)?",
  "Do you have Cough - (Wet Cough)?",
  "Do you have Shortness of Breath?",
  "Do you have Flu?",
  "Have you travelled abroad in the last 15 days?",
  "Have you been in contact with any person who has recently travelled internationally?",
  "Do you have chest infection?",
  "Is your age more than or equal to 60 years of age?",
  "Due to Co-morbidities, do you take any medicine?",
];

var questionsImages = [
  "../images/1.png",
  "../images/2.png",
  "../images/3.png",
  "../images/4.png",
  "../images/5.png",
  "../images/6.png",
  "../images/7.png",
  "../images/8.png",
  "../images/9.png",
  "../images/10.png",
];

let currentQuestion = 0;

$(document).ready(function () {
  $(".question").text(questionsList[currentQuestion]);
  $(".question-img").attr("src", questionsImages[currentQuestion]);

  $(".yes").click(function () {
    currentQuestion++;
    console.log(currentQuestion);
    $(".question").text(questionsList[currentQuestion]);
    $(".question-img").attr("src", questionsImages[currentQuestion]);
    if (currentQuestion == 10) {
      $(".options-btn").hide();
      $(".result-btn").show();
    }
  });

  $(".no").click(function () {
    currentQuestion++;
    console.log(currentQuestion);
    $(".question").text(questionsList[currentQuestion]);
    $(".question-img").attr("src", questionsImages[currentQuestion]);
    if (currentQuestion == 10) {
      $(".options-btn").hide();
      $(".result-btn").show();
    }
  });
});
