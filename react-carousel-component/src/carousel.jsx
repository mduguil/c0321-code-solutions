import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currSlide: 1
    };
  }

  render() {
    return this.props.pokemons.map((pokemon, i) => {
      return (
        <div className="container" key={i}>
          <div className="pokemon-container">
          <img src={pokemon} className="pokemon" />
          </div>
        </div>
      );
    });
  }
}
