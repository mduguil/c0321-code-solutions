/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var firstStringSorted = firstString.split('').sort().join('').trim();
  var secondStringSorted = secondString.split('').sort().join('').trim();
  return firstStringSorted === secondStringSorted;
}
