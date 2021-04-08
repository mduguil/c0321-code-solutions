var $arrowRight = document.querySelector('.fa-chevron-right');
var $arrowLeft = document.querySelector('.fa-chevron-left');
var slideNum = 1;
// var $carouselContainer = document.querySelector('.carousel-container');

function showNext(event) {
  var currentSlide = document.querySelector('.char' + slideNum);
  currentSlide.className = 'characters char' + slideNum + ' hidden';

  var currentDot = document.querySelector('.dot' + slideNum);
  currentDot.className = 'far fa-circle dot' + slideNum;
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
  var currentSlide = document.querySelector('.char' + slideNum);
  currentSlide.className = 'characters char' + slideNum + ' hidden';
  var currentDot = document.querySelector('.dot' + slideNum);
  currentDot.className = 'far fa-circle dot' + slideNum;
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

$arrowLeft.addEventListener('click', showPrevious);
$arrowRight.addEventListener('click', showNext);
