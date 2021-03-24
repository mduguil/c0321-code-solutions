var $form = document.querySelector('form');

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  var form = {
    username: $form.elements.name.value,
    email: $form.elements.email.value,
    message: $form.elements.message.value
  };
  console.log(form);
  $form.reset();
});
