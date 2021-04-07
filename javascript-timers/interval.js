var $h1 = document.querySelector('h1');
var count = $h1.textContent;
var timerId = setInterval(countdown, 1000);

function countdown() {
  count--;
  $h1.textContent = count;
  if (count === 0) {
    $h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(timerId);
  }
}
