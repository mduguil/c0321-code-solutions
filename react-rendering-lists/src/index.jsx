import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function Pokemons(props) {
  return (
    <li>{props.value}</li>
  );
}

function PokedexList(props) {
  const pokemonList = pokedex.map(pokemon => {
    return (
      <Pokemons key={props.number} value={pokemon.name}/>
    );
  });
  return (
    <ul>
      {pokemonList}
    </ul>
  );
}

ReactDOM.render(
  <PokedexList />,
  document.querySelector('#root')
);
