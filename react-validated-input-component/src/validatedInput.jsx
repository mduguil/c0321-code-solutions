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
    const { value } = this.state;
    if (!value) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <form>
        <label>
          Password
          <div>
            <input type="password" value={this.state.value} onSubmit={this.handleSubmit} onChange={this.handleChange} required/>
            <i className={this.handleSubmit === false ? 'fas fa-times' : 'fas fa-check'} />
          </div>
        </label>
      </form>
    );
  }
}

export default InputValidation;
