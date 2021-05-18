import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTicking: false,
      counter: 0
    };
    this.tick = this.tick.bind(this);
    this.reset = this.reset.bind(this);
    this.buttonHandler = this.buttonHandler.bind(this);
  }

  buttonHandler() {
    const { isTicking } = this.state;
    if (!isTicking) {
      this.setState({
        isTicking: true
      });
      this.timerID = setInterval(this.tick, 1000);
    } else {
      this.setState({
        isTicking: false
      });
      clearInterval(this.timerID);
    }
  }

  tick() {
    const { counter } = this.state;
    this.setState({
      counter: counter + 1
    });
  }

  reset() {
    if (!this.state.isTicking) {
      this.setState({
        counter: 0
      });
    }
  }

  render() {
    let icon = 'fas fa-play';
    if (this.state.isTicking) {
      icon = 'fas fa-pause';
    }
    return (
      <div id="container">
        <div onClick={!this.state.isTicking ? this.reset : this.buttonHandler} className="stopwatch">
            <span className="counter">{this.state.counter}</span>
        </div>
          <i onClick={this.buttonHandler} className={icon}></i>
      </div>
    );
  }
}

export default Stopwatch;
