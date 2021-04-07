/* exported titleCase */
var exception = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'for', 'in', 'of', 'per', 'to'];

function titleCase(string) {
  string = string.toLowerCase();
  var wordsArr = string.split(' ');
  var titleCaseArr = [];
  for (var i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i] === 'api') {
      titleCaseArr.push(isAcronym(wordsArr[i]));
    } else if (wordsArr[i].includes('-')) {
      var dash = wordsArr[i].split('-');
      var letters = dash.split('');
      letters[0][0] = letters[0][0].toUpperCase();
      letters[1][0] = letters[1][0].toUpperCase();
      titleCaseArr.push(dash.join('-'));
    } else if (wordsArr[i] === 'javascript') {
      wordsArr[i] = 'JavaScript';
      titleCaseArr.push(wordsArr[i]);
    } else if (isAnException(wordsArr[i], i)) {
      titleCaseArr.push(wordsArr[i]);
    } else {
      var char = wordsArr[i].split('');
      char[0] = char[0].toUpperCase();
      var capWord = char.join('');
      titleCaseArr.push(capWord);
    }
  }
  return titleCaseArr.join(' ');
}

function isAnException(word, index) {
  var isFirstWord = index === 0;
  if (isFirstWord) {
    return false;
  }
  return exception.includes(word);
}

function isAcronym(string) {
  var splitStr = string.split('');
  var bigChar = [];
  splitStr.forEach(function (char) {
    bigChar.push(char.toUpperCase());
  });
  return bigChar.join('');
}

// function isFollowedByColon(string) {
//   if (string.includes(':')) {
//     return true;
//   }
//   return false;
// }
