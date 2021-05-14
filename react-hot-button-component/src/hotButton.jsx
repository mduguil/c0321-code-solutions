import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0
    };
  }

  handleClick = () => {
    let clicks = this.state.clickCount;
    clicks++;
    this.setState({
      clickCount: clicks
    });
  }

  render = () => {
    let color;
    const clickCount = this.state.clickCount;
    if (clickCount > 18) {
      color = 'white';
    } else if (clickCount > 15) {
      color = 'yellow';
    } else if (clickCount > 12) {
      color = 'orange';
    } else if (clickCount > 9) {
      color = 'red';
    } else if (clickCount > 6) {
      color = 'purple';
    } else if (clickCount > 3) {
      color = 'blue';
    }
    return (
        <button onClick={this.handleClick} className={color}>
        Hot Button
      </button>
    );
  }
}

export default HotButton;
