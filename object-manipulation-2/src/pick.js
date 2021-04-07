/* exported pick */
function pick(source, keys) {
  var pickObj = {};
  Object.keys(source).forEach(function (item) {
    if (keys.includes(item)) {
      pickObj[item] = source[item];
    }
  });
  return pickObj;
}
