import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div onClick={this.handleClick} className={isOpen ? 'home' : ''}>
        <i onClick={this.handleClick} className={isOpen ? 'hidden' : 'fas fa-bars' }/>
        <div className={isOpen ? 'nav-container' : 'hidden'}>
          <ul onClick={this.handleClick} className="nav-options">
            <li className="title">Menu</li>
            <li>About</li>
            <li>Get Started</li>
            <li>Sign In</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default AppDrawer;
