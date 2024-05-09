// The following exercise contains the following subjects:
// ● Switch
// Instructions
// 1. Create a function that takes one parameter, a language.
// 2. Use a switch statement to log the following string for the
// given 'language':
// ● mandarin: 'MOST number of native speakers!'
// ● Spanish: '2nd place in a number of native speakers'
// ● English: '3rd place'
// ● Hindi: 'Number 4'
// ● Arabic: '5th most spoken language'
// ● for all others simply log 'Not in the top 5'

const checkLanguage = (language) => {
  switch (language) {
    case "mandarin":
      return "MOST number of native speakers!";
      break;
    case "Spanish":
      return "2nd place in a number of native speakers";
      break;
    case "English":
      return "3rd place";
      break;
    case "Hindi":
      return "Number 4";
      break;
    case "Arabic":
      return "5th most spoken language";
      break;
    default:
      return "Not in the top 5";
  }
};
