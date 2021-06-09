import React from 'react';

class InputValidation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      value: ''
    });
  }

  render() {
    let icon;
    if (this.handleSubmit === false) {
      icon = 'fas fa-times wrong';
    } else {
      icon = 'fas fa-check correct';
    }
    return (
      <form>
        <label>
          Password
          <div>
            <input type="password" value={this.state.value} onSubmit={this.handleSubmit} onChange={this.handleChange} required/>
            <i className={icon} />
          </div>
        </label>
      </form>
    );
  }
}

export default InputValidation;
