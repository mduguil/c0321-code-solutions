/* eslint-disable prefer-const */
let colors = ['red', 'white', 'blue'];

console.log('value of colors[0]: ', colors[0]);
console.log('value of colors[1]: ', colors[1]);
console.log('value of colors[2]: ', colors[2]);

console.log(`America is ${colors[0]}, ${colors[1]}, and ${colors[2]}.`);

colors[2] = 'green';

console.log(`Mexico is ${colors[0]}, ${colors[1]}, and ${colors[2]}.`);

console.log('value of colors: ', colors);

let students = ['Alex', 'Aly', 'Henry', 'Hien'];

let numberOfStudents = students.length;
console.log('numberOfStudents:', numberOfStudents);

let lastIndex = numberOfStudents - 1;
let lastStudent = students[lastIndex];

console.log('last student in the array: ', lastStudent);
console.log('value of students: ', students);
