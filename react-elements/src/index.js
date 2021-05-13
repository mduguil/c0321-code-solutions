import React from 'react';
import ReactDOM from 'react-dom';

const sayHi = React.createElement(
  'h1',
  null,
  'Hello, React!'
);

ReactDOM.render(sayHi, document.querySelector('#root'));
