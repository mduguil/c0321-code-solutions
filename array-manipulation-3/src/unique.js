/* exported unique */
function unique(array) {
  var uniqueArr = [];
  array.forEach(function (item) {
    if (!uniqueArr.includes(item)) {
      uniqueArr.push(item);
    }
  });
  return uniqueArr;
}
