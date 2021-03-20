/* exported dropRight */
function dropRight(array, count) {
  if (array.length === 0) return [];
  var newArr = [];
  for (var i = 0; i < array.length - count; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
