import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0
    };
  }

  handleClick = () => {
    let clickCount = this.state.clickCount;
    clickCount++;
    this.setState({
      clickCount: clickCount
    });
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Hot Button
      </button>
    );
  }
}

export default HotButton;
