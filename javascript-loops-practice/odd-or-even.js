/* exported oddOrEven */
function oddOrEven(array) {
  var evenOrOdd = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenOrOdd.push('even');
    } else {
      evenOrOdd.push('odd');
    }
  }
  return evenOrOdd;
}
