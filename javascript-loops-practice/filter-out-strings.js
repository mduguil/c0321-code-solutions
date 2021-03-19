/* exported filterOutStrings */
function filterOutStrings(values) {
  var noStr = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      noStr.push(values[i]);
    }
  }
  return noStr;
}
