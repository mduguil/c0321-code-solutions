/* exported difference */
function difference(first, second) {
  var uniqueArr = [];
  first.forEach(function (item) {
    if (!second.includes(item)) {
      uniqueArr.push(item);
    }
  });
  second.forEach(function (item) {
    if (!first.includes(item)) {
      uniqueArr.push(item);
    }
  });
  return uniqueArr;
}
