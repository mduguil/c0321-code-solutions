
var $body = document.querySelector('.light');
var $container = document.querySelector('.switch-container-light');
var $switch = document.querySelector('.switch-light');
var count = 0;

$switch.addEventListener('click', function (event) {
  count++;
  if (count % 2 === 1) {
    $container.className = 'switch-container-dark';
    $switch.className = 'switch-dark';
    $body.className = 'dark';
  } else {
    $container.className = 'switch-container-light';
    $switch.className = 'switch-light';
    $body.className = 'light';
  }
});
