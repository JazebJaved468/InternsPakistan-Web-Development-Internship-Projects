

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

var resultsData = {
  result_1: {
    heading: "High Probability of Corona!",
    description: [
      "Isolate From Others",
      "Rest and Take Care",
      "Call Work Health Providers",
      "Monitor Symptoms",
      "Talk to Someone About Testing",
      "Follow Govt Instructions",
    ],
    conclusion:
      "As of now, your answers suggest that you may need testing. If anything changes, take the questionnaire again.",
  },

  result_2: {
    heading: "Suspected for Corona!",
    description: [
      "Isolate From Others",
      "Rest and Take Care",
      "Call Work Health Providers",
      "Monitor Symptoms",
      "Talk to Someone About Testing",
      "Follow Govt Instructions",
    ],
    conclusion:
      "As of now, your answers suggest that you may need testing. If anything changes, take the questionnaire again.",
  },

  result_3: {
    heading: "You are all Good!",
    description: [
      "No Test Needed At This Time",
      "Maintain Social Distance",
      "Avoid groups of people and keep six feet apart from anyone who’s not part of the household. Especially avoid those showing symptoms.",
    ],
    conclusion:
      "As of now, your answers suggest that you may need testing. If anything changes, take the questionnaire again.",
  },
};

function checkAnswers() {
  if(answers[0] == "yes" && answers[1] == "yes"  && answers[3] == "yes"  && answers[7] == "yes"  && answers[8] == "yes"  && answers[5] == "yes" ){
    return("1");
  }
  else if(answers[0] == "yes" && answers[1] == "yes"  && answers[3] == "yes" ){
    return("2");
  }
  else{
    return("3");
  }
};

let currentQuestion = 0;
let answers = [];


$(document).ready(function () {
  $(".question").text(questionsList[currentQuestion]);
  $(".question-img").attr("src", questionsImages[currentQuestion]);

  $(".yes").click(function () {
    answers[currentQuestion] = "yes";
    currentQuestion++;
    console.log(answers);
    $(".question").text(questionsList[currentQuestion]);
    $(".question-img").attr("src", questionsImages[currentQuestion]);
    if (currentQuestion == 10) {
      $(".options-btn").hide();
      $(".result-btn").show();
    }
  });

  $(".no").click(function () {
    answers[currentQuestion] = "no";
    currentQuestion++;
    console.log(currentQuestion);
    $(".question").text(questionsList[currentQuestion]);
    $(".question-img").attr("src", questionsImages[currentQuestion]);
    if (currentQuestion == 10) {
      $(".options-btn").hide();
      $(".result-btn").show();
    }
  });

  $(".result-btn").click(function () {
    $(".question-container").hide();

    $(".result-heading").text(resultsData["result_" + checkAnswers()].heading);
    for (let index = 0; index < resultsData["result_" + checkAnswers()].description.length; index++) {
      $("<li></li>").text(resultsData["result_" + checkAnswers()].description[index]).appendTo(".result-description");
      
    }
    $(".result-conclusion").text(resultsData["result_" + checkAnswers()].conclusion);
  });




});
