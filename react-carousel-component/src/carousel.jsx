import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currSlide: 0
    };
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
  }

  handleNextClick() {
    if (this.state.currSlide < this.props.pokemons.length - 1) {
      this.setState({
        currSlide: this.state.currSlide + 1
      });
    } else {
      this.setState({
        currSlide: 0
      });
    }
  }

  handleBackClick() {
    if (this.state.currSlide > 0) {
      this.setState({
        currSlide: this.state.currSlide - 1
      });
    } else {
      this.setState({
        currSlide: 0
      });
    }
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
    }, 5000);
  }

  render() {
    const currSlide = this.state.currSlide;
    const pokemons = this.props.pokemons;
    return (
      <div className="container">
        <div className="pokemon-container">
          <i className="fas fa-chevron-left back" onClick={this.handleBackClick}></i>
          <img src={pokemons[currSlide]} className="pokemon" />
          <i className="fas fa-chevron-right next" onClick={this.handleNextClick}></i>
        </div>
      </div>
    );
  }
}
