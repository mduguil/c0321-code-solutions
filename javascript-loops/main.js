/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;
  for (currentNumber; currentNumber <= 10; currentNumber++) {
    numbers.push(currentNumber);
  }
  return numbers;
}

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;
  for (currentNumber; currentNumber <= 20; currentNumber += 2) {
    evenNumbers.push(currentNumber);
  }
  return evenNumbers;
}

function repeatWord(word, times) {
  var count = 1;
  var repeated = '';
  for (count; count <= times; count++) {
    repeated += word;
  }
  return repeated;
}

function logEachCharacter(str) {
  for (var i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}

function doubleAll(num) {
  var doubled = [];
  for (var i = 0; i < num.length; i++) {
    doubled.push(num[i] * 2);
  }
  return doubled;
}

function getKeys(obj) {
  var keys = [];
  for (var key in obj) {
    keys.push(key);
  }
  return keys;
}

function getValues(obj) {
  var values = [];
  for (var key in obj) {
    values.push(obj[key]);
  }
  return values;
}
