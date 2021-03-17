/* eslint-disable prefer-const */
let num1 = 12;
let num2 = 49;
let num3 = 24;

let maximumValue = Math.max(num1, num2, num3);

console.log(maximumValue);

let heroes = ['Wonder Woman', 'Superman', 'Jean Grey', 'Jane Foster'];

let randomNumnber = Math.random();
randomNumnber *= heroes.length;

let randomIndex = Math.floor(randomNumnber);

console.log('randomIndex: ', randomIndex);

let randomHero = heroes[randomIndex];

console.log('randomHero: ', randomHero);

let library = [
  {
    author: 'Leo Tolstoy',
    title: 'Anna Karenina'
  },
  {
    author: 'George Eliot',
    title: 'Middlemarch'
  },
  {
    author: 'Gustave Flaubert',
    title: 'Madame Bovary'
  }
];

let lastBook = library.pop();

console.log('lastBook: ', lastBook);

let firstBook = library.shift();

console.log('firstBook: ', firstBook);

let js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

let css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);

library.splice(1, 1);

console.log('library: ', library);

let fullName = 'Mikaela ' + 'Duguil';
let firstAndLastName = fullName.split(' ');
console.log('firstAndLastName: ', firstAndLastName);

let firstName = firstAndLastName[0];

let sayMyName = firstName.toUpperCase();

console.log('sayMyName: ', sayMyName);
