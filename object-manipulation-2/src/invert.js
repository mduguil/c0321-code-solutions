/* exported invert */
function invert(source) {
  var flippedObj = {};
  for (var key in source) {
    flippedObj[source[key]] = key;
  }
  return flippedObj;
}
