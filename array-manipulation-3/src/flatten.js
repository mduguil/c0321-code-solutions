/* exported flatten */
function flatten(array) {
  var flatArr = [];
  array.forEach(function (item) {
    if (Array.isArray(item)) {
      item.forEach(function (i) {
        flatArr.push(i);
      });
    } else {
      flatArr.push(item);
    }
  });
  return flatArr;
}
