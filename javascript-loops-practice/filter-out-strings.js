/* exported filterOutStrings */
function filterOutStrings(values) {
  var numsOnly = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] === 'number') {
      numsOnly.push(values[i]);
    }
  }
  return numsOnly;
}
