import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  static propTypes = {
    message: PropTypes.string,
  }
  static defaultProps = {
    message: 'button'
  }
  render() {
    return (
      <button>{this.props.message}</button>
    );
  }
}

export default Button;
