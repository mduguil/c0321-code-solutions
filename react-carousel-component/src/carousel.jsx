import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currSlide: 0
    };
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.currSlide < this.props.pokemons.length - 1) {
        this.setState({
          currSlide: this.state.currSlide + 1
        });
      } else {
        this.setState({
          currSlide: 0
        });
      }
    }, 1000);
  }

  render() {
    const currSlide = this.state.currSlide;
    const pokemons = this.props.pokemons;
    return (
      <div className="container">
        <div className="pokemon-container">
        <img src={pokemons[currSlide]} className="pokemon" />
        </div>
      </div>
    );
  }
}
