/* exported pick */
function pick(source, keys) {
  var pickObj = {};
  Object.keys(source).forEach(function (item) {
    if (keys.includes(item) && source[item] !== undefined) {
      pickObj[item] = source[item];
    }
  });
  return pickObj;
}
