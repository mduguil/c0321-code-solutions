/* exported calculator */

var calculator = {
  add: function (x, y) {
    return x + y;
  },

  subtract: function (x, y) {
    return x - y;
  },

  multiply: function (x, y) {
    return x * y;
  },

  divide: function (x, y) {
    return x / y;
  },

  square: function (x) {
    return x ** 2;
  },

  sumAll: function (nums) {
    var sum = 0;
    nums.forEach(function (num) {
      sum += num;
    });
    return sum;
  },

  getAverage: function (nums) {
    var sum = 0;
    nums.forEach(function (num) {
      sum += num;
    });

    return sum / nums.length;
  }
};
