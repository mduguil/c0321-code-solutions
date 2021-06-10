import React from 'react';

class InputValidation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkRequirements = this.checkRequirements.bind(this);
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

  checkRequirements() {
    let errStatement;
    this.state.value === ''
      ? errStatement = 'Password is required'
      : errStatement = 'Password is too short';
    return errStatement;
  }

  render() {
    return (
      <form>
        <label>
          Password
          <div>
            <input type="password"
              value={this.state.value}
              onSubmit={this.handleSubmit}
              onChange={this.handleChange}
              required
            />
            <i className={this.state.value.length < 8 ? 'fas fa-times wrong' : 'fas fa-check correct'}></i>
          </div>
          <div className="err-message">
            {this.state.value.length < 8 ? this.checkRequirements() : ''}
          </div>
        </label>
      </form>
    );
  }
}

export default InputValidation;
