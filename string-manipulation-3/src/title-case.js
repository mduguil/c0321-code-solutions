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
      titleCaseArr.push(isHyphenated(wordsArr[i]));
    } else if (isAnException(wordsArr[i], i)) {
      titleCaseArr.push(wordsArr[i]);
    } else if (isFollowedByColon(wordsArr[i])) {
      titleCaseArr.push(capitalize(wordsArr[i]));
      titleCaseArr.push(capitalize(wordsArr[i + 1]));
      i++;
    } else if (wordsArr[i] === 'javascript') {
      wordsArr[i] = 'JavaScript';
      titleCaseArr.push(wordsArr[i]);
    } else {
      titleCaseArr.push(capitalize(wordsArr[i]));
    }
  }
  return titleCaseArr.join(' ');
}

function capitalize(word) {
  var char = word.split('');
  char[0] = char[0].toUpperCase();
  return char.join('');
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

function isHyphenated(word) {
  var dash = word.split('-');
  var letters1 = dash[0].split('');
  var letters2 = dash[1].split('');
  letters1[0] = letters1[0].toUpperCase();
  letters2[0] = letters2[0].toUpperCase();
  dash[0] = letters1.join('');
  dash[1] = letters2.join('');
  var dashedWord = dash.join('-');
  return dashedWord;
}

function isFollowedByColon(string) {
  if (string.includes(':')) {
    return true;
  }
  return false;
}
