var $h1 = document.querySelector('h1');

function sayHi() {
  $h1.textContent = 'Hello There';
}

setTimeout(sayHi, 2000);
