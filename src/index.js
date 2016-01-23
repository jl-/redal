/**
 * <Redal scoped={false} enterDuration leaveDuration ref='redal' willEnter={} didEnter={} willLeave={} didLeave={} maskToggle={false} handleMaskClick hidden={true}>
 *   <Redal.X> x </Redal.X>
 *   <div className='redal-header'></div>
 *   <div className='redal-body'></div>
 *   <div className='redal-footer'>
 *     <Redal.X beforeLeave={}> confirm </Redal.X>
 *     <Redal.X> cancel </Redal.X>
 *   </div>
 * </Redal>
 *
 *
 *
 *
 **/
import React, { Component, Children, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import ReactTransitionGroup from 'react-addons-transition-group';
import RedalWrapper from './wrapper';
import RedalX from './x';
import './style.scss';
const renderSubtreeIntoContainer = ReactDOM.unstable_renderSubtreeIntoContainer;

const DEFAULT_DURATION = 0;

const STATUS_SHOWN = 1;
const STATUS_HIDDEN = 2;

const WRAPPER_KEY = 'redalwrapper';

function replaceRedalX(children, replace) {
  return Children.map(children, child => {
    if (child && child.type === RedalX) {
      return replace(child);
    } else if (child && child.props && typeof child.props.children === 'object') {
      return React.cloneElement(child, child.props, replaceRedalX(child.props.children, replace));
    }
    return child;
  });
}

class Redal extends Component {
  static defaultProps = {
    hidden: true
  };

  constructor(props, context) {
    const { hidden = true } = props;
    super(props, context);
    this.state = { hidden };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.scoped !== true) {
      const hidden = nextProps.hidden !== this.props.hidden ? nextProps.hidden : this.state.hidden;
      this.toggle(hidden, nextProps);
    }
  }
  componentDidMount() {
    const { scoped, ...props } = this.props;
    if (scoped === true) return;
    this.node = document.createElement('div');
    this.node.className = 'ReactModalPortal';
    document.body.appendChild(this.node);
    this.toggle(props.hidden, props);
  }
  componentWillUnmount() {
    if (!this.node) return;
    ReactDOM.unmountComponentAtNode(this.node);
    document.body.removeChild(this.node);
  }

  close() {
    this.toggle(true);
  }
  open() {
    this.toggle(false);
  }
  toggle(hidden = !this.state.hidden, { scoped, ...props } = this.props) {
    this.setState({ hidden });
    if (scoped !== true) {
      props.hidden = hidden;
      this.renderPortal(props);
    }
  }
  delegateRedalX(redalX) {
    return React.cloneElement(redalX, Object.assign({}, redalX.props, { onClick: this.createLeaveHandler(redalX.props.beforeLeave) }));
  }
  createLeaveHandler(beforeLeave) {
    const handler = typeof beforeLeave === 'function' ? e => {
      e.stopPropagation();
      const shouldLeave = beforeLeave();
      if (shouldLeave === false) return;
      if (!shouldLeave || typeof shouldLeave.then !== 'function') return this.close();
      shouldLeave.then(::this.close);
    } : ::this.close;
    return handler;
  }

  renderPortal(props) {
    this.portal = renderSubtreeIntoContainer(this, this.build(props), this.node);
  }

  build(pristineProps) {
    const { enterDuration = DEFAULT_DURATION, leaveDuration = enterDuration, children, hidden, ...props } = pristineProps;
    const content = hidden ? null : (
      <RedalWrapper key={WRAPPER_KEY} {...props} enterDuration={enterDuration} leaveDuration={leaveDuration} close={::this.close}>
        {replaceRedalX(children, ::this.delegateRedalX)}
      </RedalWrapper>
    );

    return (
      <ReactTransitionGroup component='div' transitionEnterTimeout={enterDuration} transitionLeaveTimeout={leaveDuration}>
      {content}
      </ReactTransitionGroup>
    );
  }

  render() {
    const { scoped, ...props } = this.props;
    return scoped !== true ? React.DOM.noscript() : props.hidden = this.state.hidden, this.build(props);
  }
}

Redal.X = RedalX;

export default Redal;
