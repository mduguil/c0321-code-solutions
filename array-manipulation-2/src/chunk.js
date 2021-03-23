/* exported chunk */
function chunk(array, size) {
  if (array.length === 0) return [];
  var chunky = [];
  for (var i = 0; i < array.length; i++) {
    var babyChunk = [];
    babyChunk.push(array[i]);
    if (babyChunk.length === size) {
      chunk(array[i]);
    }
    chunky.push(babyChunk);
  }
  return chunky;
}
