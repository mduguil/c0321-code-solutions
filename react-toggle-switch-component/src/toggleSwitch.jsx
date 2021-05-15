import React from 'react';

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false
    };
  }

  handleButton = () => {
    this.setState({
      isOn: !this.state.isOn
    });
  }

  render() {
    const { isOn } = this.state;
    return (
      <div className="container">
        <div onClick={this.handleButton} className={isOn ? 'switch switch-on' : 'switch'}>
          <span className={isOn ? 'slider slider-on' : 'slider'}></span>
        </div>
        <span className="status">
          {isOn ? 'ON' : 'OFF'}
        </span>
      </div>
    );
  }
}

export default ToggleButton;
