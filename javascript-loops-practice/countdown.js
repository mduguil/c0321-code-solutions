/* exported countdown */
function countdown(num) {
  var nums = [];
  while (num >= 0) {
    nums.push(num);
    num--;
  }
  return nums;
}
