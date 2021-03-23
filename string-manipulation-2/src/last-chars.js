/* exported lastChars */
function lastChars(length, string) {
  let shortStr = '';
  if (length > string.length) {
    return string;
  }
  for (var i = string.length - length; i < string.length; i++) {
    shortStr += string[i];
  }
  return shortStr;
}
