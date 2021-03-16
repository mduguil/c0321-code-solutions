const student = {
  firstName: 'Mikaela',
  lastName: 'Duguil',
  age: 22
};

const fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName: ', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'server';

console.log('value of student.livesInIrvine: ', student.livesInIrvine);
console.log('value of student.previousOccupation: ', student.previousOccupation);
console.log('value of student: ', student);

const vehicle = {
  make: 'Bugatti',
  model: 'Chiron',
  year: 2021
};

vehicle['color'] = 'skyblue';
vehicle['isConvertible'] = false;

console.log('value of vehicle["color"]: ', vehicle['color']);
console.log('value of vehicle["isConvertible"]: ', vehicle['isConvertible']);
console.log('value of vehicle: ', vehicle);

const pet = {
  name: 'Freya',
  type: 'cockaiel'
};

delete pet.name;
delete pet.type;

console.log('value of pet: ', pet);
