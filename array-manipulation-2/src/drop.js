/* exported drop */
function drop(array, count) {
  if (array.length === 0) return [];
  var newArr = [];
  for (var i = count; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
