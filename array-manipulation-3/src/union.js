/* exported union */
function union(first, second) {
  var uniqueArr = [];
  first.forEach(function (item) {
    if (!uniqueArr.includes(item)) {
      uniqueArr.push(item);
    }
  });
  second.forEach(function (item) {
    if (!uniqueArr.includes(item)) {
      uniqueArr.push(item);
    }
  });
  return uniqueArr;
}
