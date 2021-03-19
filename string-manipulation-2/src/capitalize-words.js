/* exported capitalizeWords */
function capitalizeWords(string) {
  var splitStr = string.split(' ');
  var newArr = [];
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i].toLowerCase();
    newArr.push(splitStr[i][0].toUpperCase() + splitStr[i].slice(1, splitStr[i].length));
  }
  return newArr.join(' ');
}
