/* exported reverseWords */
function reverseWords(string) {
  var wordsArr = string.split(' ');
  var reversedWordsArr = [];
  for (var i = 0; i < wordsArr.length; i++) {
    var reversedWord = wordsArr[i].split('').reverse().join('');
    reversedWordsArr.push(reversedWord);
  }
  return reversedWordsArr.join(' ');
}
