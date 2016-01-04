import React, { Component } from 'react';

class ReactX extends Component {
  render() {
    const { children, component = 'span', ...props } = this.props;
    return React.createElement(component, props, children);
  }
}

export default ReactX;
