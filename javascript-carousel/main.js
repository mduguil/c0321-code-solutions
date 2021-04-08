var $arrowRight = document.querySelector('.fa-chevron-right');
var $arrowLeft = document.querySelector('.fa-chevron-left');
var slideNum = 1;
// var $carouselContainer = document.querySelector('.carousel-container');

function showNext(event) {
  var currentSlide = document.querySelector('.char' + slideNum);
  currentSlide.className = 'characters char' + slideNum + ' hidden';
  slideNum++;
  if (slideNum > 5) slideNum = 1;
  showNextImg();
}

function showNextImg(event) {
  var nextSlide = document.querySelector('.char' + slideNum);
  nextSlide.className = 'characters char' + slideNum;
}

function showPrevious(event) {
  var currentSlide = document.querySelector('.char' + slideNum);
  currentSlide.className = 'characters char' + slideNum + ' hidden';
  slideNum--;
  if (slideNum < 1) slideNum = 1;
  showPreviousImg();
}

function showPreviousImg(event) {
  var nextSlide = document.querySelector('.char' + slideNum);
  nextSlide.className = 'characters char' + slideNum;
}

$arrowLeft.addEventListener('click', showPrevious);
$arrowRight.addEventListener('click', showNext);
