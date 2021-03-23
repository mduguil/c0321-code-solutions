var buttonClick = 0;

var $hotBtn = document.querySelector('.hot-button');

var $clickCount = document.querySelector('.click-count');

$hotBtn.addEventListener('click', function () {
  buttonClick++;
  $clickCount.textContent = `Clicks: ${buttonClick}`;
  if (buttonClick < 4) {
    $hotBtn.className = 'cold';
  } else if (buttonClick < 7) {
    $hotBtn.className = 'cool';
  } else if (buttonClick < 10) {
    $hotBtn.className = 'tepid';
  } else if (buttonClick < 13) {
    $hotBtn.className = 'warm';
  } else if (buttonClick < 16) {
    $hotBtn.className = 'hot';
  } else {
    $hotBtn.className = 'nuclear';
  }
});
