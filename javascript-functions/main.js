function convertMinutesToSeconds(min) {
  return min * 60;
}

console.log('convertMinutesToSeconds: ', convertMinutesToSeconds(5));

function greet(name) {
  return 'Hey, ' + name;
}

console.log('greet: ', greet('you!'));

function getArea(width, height) {
  return width * height;
}

console.log('getArea: ', getArea(4248, 1038));

function getFirstName(person) {
  return person.firstName;
}

console.log('getFirstName: ', getFirstName({ firstName: 'Arty', lastName: 'Freya' }));

function getLastElement(array) {
  return array[array.length - 1];
}

console.log('getLastElement: ', getLastElement(['I', 'don\'t', 'know', 'what', 'to', 'write']));
