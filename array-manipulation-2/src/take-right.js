/* exported takeRight */
function takeRight(array, count) {
  if (array.length === 0) return [];
  var newArr = [];
  for (var i = array.length - count; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
