/* exported intersection */
function intersection(first, second) {
  var duplicateArr = [];
  first.forEach(function (item) {
    if (second.includes(item)) {
      duplicateArr.push(item);
    }
  });
  return duplicateArr;
}
