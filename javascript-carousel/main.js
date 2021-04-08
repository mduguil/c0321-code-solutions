var $arrowRight = document.querySelector('.fa-chevron-right');
var $arrowLeft = document.querySelector('.fa-chevron-left');
var $progressDot = document.querySelector('.circle-container');
var dots = document.querySelectorAll('.fa-circle');
var slideNum = 1;

function hideCurrentdisplay(event) {
  var currentSlide = document.querySelector('.char' + slideNum);
  currentSlide.className = 'characters char' + slideNum + ' hidden';

  var currentDot = document.querySelector('.dot' + slideNum);
  currentDot.className = 'far fa-circle dot' + slideNum;
}

function showNext(event) {
  hideCurrentdisplay();

  slideNum++;

  if (slideNum > 5) slideNum = 1;

  showNextImg();
  showNextDot();
}

function showNextImg(event) {
  var nextSlide = document.querySelector('.char' + slideNum);
  nextSlide.className = 'characters char' + slideNum;
}

function showNextDot(event) {
  var nextDot = document.querySelector('.dot' + slideNum);
  nextDot.className = 'fas fa-circle dot' + slideNum;
}

function showPrevious(event) {
  hideCurrentdisplay();

  slideNum--;

  if (slideNum < 1) slideNum = 1;

  showPreviousImg();
  showPreviousDot();
}

function showPreviousImg(event) {
  var nextSlide = document.querySelector('.char' + slideNum);
  nextSlide.className = 'characters char' + slideNum;
}

function showPreviousDot(event) {
  var previousDot = document.querySelector('.dot' + slideNum);
  previousDot.className = 'fas fa-circle dot' + slideNum;
}

function showSpecificImg(event) {
  var clickedDot = event.target.closest('.fa-circle');

  hideCurrentdisplay();

  for (var i = 0; i < dots.length; i++) {
    if (clickedDot === dots[i]) {
      slideNum = i + 1;
    }
  }

  showNextImg();
  showNextDot();
}

$arrowLeft.addEventListener('click', showPrevious);
$arrowRight.addEventListener('click', showNext);
$progressDot.addEventListener('click', showSpecificImg);

setInterval(showNext, 3000);
