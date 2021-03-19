/* exported getValues */
function getValues(object) {
  var valuesArr = [];
  for (var key in object) {
    valuesArr.push(object[key]);
  }
  return valuesArr;
}
