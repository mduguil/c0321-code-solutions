var $chars = document.querySelectorAll('span');

var charsArr = Array.from($chars);

var currentIndex = 0;

document.addEventListener('keydown', function (event) {
  charsArr[currentIndex + 1].className = 'underscore';
  if (charsArr[currentIndex].textContent === event.key) {
    charsArr[currentIndex].className = 'correct';
    currentIndex++;
  } else {
    charsArr[currentIndex].className = 'wrong';
  }
});
