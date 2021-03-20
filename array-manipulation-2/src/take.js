/* exported take */
function take(array, count) {
  if (array.length === 0) return [];
  var newArr = [];
  for (var i = 0; i < count; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
