/* exported initial */
function initial(array) {
  var shortArr = [];
  for (var i = 0; i < array.length - 1; i++) {
    shortArr.push(array[i]);
  }
  return shortArr;
}
