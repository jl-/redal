import React, { Component } from 'react';
import cns from 'classnames';

class ReactX extends Component {
  render() {
    const { children, className, component = 'span', ...props } = this.props;
    props.className = cns(className, 'redal-x');
    return React.createElement(component, props, children);
  }
}

export default ReactX;
