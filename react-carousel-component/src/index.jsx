import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const pokemons = [
  'https://cdn2.bulbagarden.net/upload/2/21/001Bulbasaur.png',
  'https://cdn2.bulbagarden.net/upload/thumb/7/73/004Charmander.png/900px-004Charmander.png',
  'https://cdn2.bulbagarden.net/upload/4/42/110Weezing.png',
  'https://cdn2.bulbagarden.net/upload/thumb/3/39/007Squirtle.png/900px-007Squirtle.png',
  'https://cdn2.bulbagarden.net/upload/thumb/d/d6/052Meowth.png/900px-052Meowth.png'
];

ReactDOM.render(
  <Carousel pokemons={pokemons}/>,
  document.querySelector('#root')
);
