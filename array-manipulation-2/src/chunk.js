/* exported chunk */
function chunk(array, size) {
  var arr = [];
  var miniChunk = [];
  var lastIndex = array.length - 1;

  for (var i = 0; i < array.length; i++) {
    miniChunk.push(array[i]);
    if (lastIndex === i && miniChunk.length < size) {
      arr.push(miniChunk);
    }
    if (miniChunk.length === size) {
      arr.push(miniChunk);
      miniChunk = [];
      // return;
    }
  }
  return arr;
}
