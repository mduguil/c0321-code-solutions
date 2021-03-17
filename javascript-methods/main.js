var num1 = 12;
var num2 = 49;
var num3 = 24;

var maximumValue = Math.max(num1, num2, num3);

console.log(maximumValue);

var heroes = ['Wonder Woman', 'Superman', 'Jean Grey', 'Jane Foster'];

var randomNumnber = Math.random();
randomNumnber *= heroes.length;

var randomIndex = Math.floor(randomNumnber);

console.log('randomIndex: ', randomIndex);

var randomHero = heroes[randomIndex];

console.log('randomHero: ', randomHero);

var library = [
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

var lastBook = library.pop();

console.log('lastBook: ', lastBook);

var firstBook = library.shift();

console.log('firstBook: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);

library.splice(1, 1);

console.log('library: ', library);

var fullName = 'Mikaela ' + 'Duguil';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName: ', firstAndLastName);

var firstName = firstAndLastName[0];

var sayMyName = firstName.toUpperCase();

console.log('sayMyName: ', sayMyName);
