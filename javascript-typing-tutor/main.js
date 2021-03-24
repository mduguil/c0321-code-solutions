var $chars = document.querySelectorAll('span');

var charsArr = Array.from($chars);

var currentIndex = 0;

document.addEventListener('keydown', function (event) {
  if (charsArr[currentIndex].textContent === event.key) {
    charsArr[currentIndex].className = 'correct';
    currentIndex++;
    charsArr[currentIndex].className = 'underscore';
  } else {
    charsArr[currentIndex].classList.add('wrong');
  }
});
