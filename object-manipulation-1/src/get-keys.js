/* exported getKeys */
function getKeys(object) {
  var keysArr = [];
  for (var key in object) {
    keysArr.push(key);
  }
  return keysArr;
}
