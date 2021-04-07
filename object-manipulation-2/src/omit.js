/* exported omit */
function omit(source, keys) {
  var omitObj = {};
  Object.keys(source).forEach(function (item) {
    if (!keys.includes(item)) {
      omitObj[item] = source[item];
    }
  });
  return omitObj;
}
