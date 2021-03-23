
var $body = document.querySelector('.light');
var $container = document.querySelector('.switch-container-light');
var $switch = document.querySelector('.switch-light');

var isOff = true;

$switch.addEventListener('click', function (event) {
  if (isOff) {
    $container.className = 'switch-container-dark';
    $switch.className = 'switch-dark';
    $body.className = 'dark';
  } else {
    $container.className = 'switch-container-light';
    $switch.className = 'switch-light';
    $body.className = 'light';
  }
  isOff = !isOff;
});
