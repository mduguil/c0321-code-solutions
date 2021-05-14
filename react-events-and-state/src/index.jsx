import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
  }

  handleClick = () => {
    this.setState({
      isClicked: !this.state.isClicked
    });
  }

  render() {
    const { isClicked } = this.state;

    return (
      <button onClick={this.handleClick}>
        {isClicked ? 'Bye!' : 'HI!'}
      </button>
    );
  }
}
ReactDOM.render(
  <CustomButton />,
  document.querySelector('#root')
);
