
var books = [
  {
    isbn: '38737674958',
    title: 'Hello',
    author: 'Me'
  },
  {
    isbn: '38737674858',
    title: 'Hello Again!',
    author: 'Me'
  },
  {
    isbn: '876437674958',
    title: 'Hello, It\'s The Last One',
    author: 'Me'
  }
];

console.log('books: ', books);
console.log('typeof books: ', typeof books);

var booksStr = JSON.stringify(books);
console.log('booksStr: ', booksStr);
console.log('typeof booksStr: ', typeof booksStr);

var student = '{"id": 101, "name": "George Washington"}';

console.log('student: ', student);
console.log('typeof student: ', typeof student);

var parsedStr = JSON.parse(student);

console.log('parsedStr: ', parsedStr);
console.log('typeof parsedStr: ', typeof parsedStr);
