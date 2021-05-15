import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTicking: false
    };
    this.buttonHandler = this.buttonHandler.bind(this);
  }

  buttonHandler() {
    const { isTicking } = this.state;

    this.setState({
      isTicking: !isTicking
    });
  }

  render() {
    return (
      <div id="container">
        <div className="stopwatch">0</div>
      </div>
    );
  }
}

export default Stopwatch;
