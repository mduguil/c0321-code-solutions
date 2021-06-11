import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const title = event.target.getAttribute('topic');
    title === this.state.isOpen
      ? this.setState({ isOpen: null })
      : this.setState({ isOpen: title });
  }

  render() {
    return this.props.contents.map(topic => {
      const contentClass = topic.title === this.state.isOpen ? '' : 'hidden';
      return (
        <div key={topic.title} className='accordion-container'>
          <div className='accordion-title' topic={topic.title} onClick={this.handleClick}>{topic.title}</div>
          <div className={`accordion-body ${contentClass}`}>{topic.body}</div>
        </div>
      );
    });
  }
}
