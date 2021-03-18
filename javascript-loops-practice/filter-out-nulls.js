/* exported filterOutNulls */
function filterOutNulls(values) {
  var noNullArr = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      noNullArr.push(values[i]);
    }
  }
  return noNullArr;
}
