import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currSlide: 0
    };
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
    this.clickDot = this.clickDot.bind(this);
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
        currSlide: this.props.pokemons.length - 1
      });
    }
  }

  renderDots() {
    return (
      this.props.pokemons.map((value, index) => {
        const dotClass = index === this.state.currSlide ? 's' : 'r';
        return <i key={index} className={`dot fa${dotClass} fa-circle`}
          onClick={this.clickDot} index={index}></i>;
      })
    );
  }

  clickDot(event) {
    const index = event.target.getAttribute('index');
    this.setState({ currSlide: parseInt(index, 10) });
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
    }, 3000);
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
        <div className="dot-container">
          {this.renderDots()}
        </div>
      </div>
    );
  }
}
