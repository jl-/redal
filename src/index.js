/**
 * <Redal enterDuration leaveDuration ref='redal' willEnter={} didEnter={} willLeave={} didLeave={} hidden={true}>
 *   <Redal.X> x </Redal.X>
 *   <div className='redal-header'></div>
 *   <div className='redal-body'></div>
 *   <div className='redal-footer'>
 *     <Redal.X beforeClose={}> confirm </Redal.X>
 *     <Redal.X> cancel </Redal.X>
 *   </div>
 * </Redal>
 *
 *
 *
 *
 **/
import React, { Component, Children } from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';
import RedalWrapper from './wrapper';
import RedalX from './x';

import './style.scss';

const ENTER_DURATION = 0;
const LEAVE_DURATION = 0;

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
  constructor(props, context) {
    super(props, context);
    this.state = { status: props.hidden ? STATUS_HIDDEN : STATUS_SHOWN };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.hidden !== this.props.hidden) {
      this.setState({ status: nextProps.hidden ? STATUS_HIDDEN : STATUS_SHOWN });
    }
  }
  close() {
    this.setState({ status: STATUS_HIDDEN });
  }
  open() {
    this.setState({ status: STATUS_SHOWN });
  }
  delegateRedalX(redalX) {
    return React.cloneElement(redalX, Object.assign({}, redalX.props, { onClick: this.createLeaveHandler(redalX.props.beforeLeave) }));
  }
  createLeaveHandler(beforeLeave) {
    const handler = typeof beforeLeave === 'function' ? e => {
      const shouldLeave = beforeLeave();
      if (shouldLeave === false) return;
      if (!shouldLeave || typeof shouldLeave.then !== 'function') return this.close();
      shouldLeave.then(::this.close);
    } : ::this.close;
    return handler;
  }

  render() {
    const { enterDuration = ENTER_DURATION, leaveDuration = LEAVE_DURATION, children, ...props } = this.props;
    const { status } = this.state;
    const content = status === STATUS_SHOWN ? (
      <RedalWrapper key={WRAPPER_KEY} {...props} enterDuration={enterDuration} leaveDuration={leaveDuration}>
        {replaceRedalX(children, ::this.delegateRedalX)}
      </RedalWrapper>
    ) : null;

    return (
      <ReactTransitionGroup component='div' transitionEnterTimeout={enterDuration} transitionLeaveTimeout={leaveDuration}>
        {content}
      </ReactTransitionGroup>
    );
  }
}

Redal.X = RedalX;

export default Redal;
