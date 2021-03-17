/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

function isUnderFive(num) {
  if (num < 5) {
    return true;
  }
}

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  }
}

function startsWithJ(str) {
  if (str[0] === 'J') {
    return true;
  }
}

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  }
}

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  }
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  if (pH > 0 && pH < 7) {
    return 'acid';
  } else if (pH === 7) {
    return 'neutral';
  } else if (pH > 7 && pH < 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}

function introduceWarnerBro(name) {
  if (name === 'yakko' || name === 'wakko') {
    return 'We\'re the warner brothers!';
  } else if (name === 'dot') {
    return '"I\'m cute~';
  } else {
    return 'Goodnight everybody!';
  }
}
