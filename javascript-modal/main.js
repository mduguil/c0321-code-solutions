var $openBtn = document.querySelector('.open');
var $popUp = document.querySelector('.pop-up-hidden');
var $noBtn = document.querySelector('.no-btn');

var isClosed = true;
var isOpen = true;

$openBtn.addEventListener('click', function (event) {
  if (isClosed) {
    $popUp.className = 'pop-up-full';
  }
});

$noBtn.addEventListener('click', function (event) {
  if (isOpen) {
    $popUp.className = 'pop-up-hidden';
  }
});
