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

let answers = [];

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


export {answers,checkAnswers, resultsData};