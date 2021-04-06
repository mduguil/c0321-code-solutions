/* exported defaults */
function defaults(target, source) {
  Object.keys(source).forEach(function (item) {
    if (!Object.keys(target).includes(item)) {
      target[item] = source[item];
    }
  });
}
