import React, { Component, PropTypes } from 'react';
import cns from 'classnames';
import domContains from './utils/dom-contains';

const STATUS_WILL_ENTER = 1;
const STATUS_DID_ENTER = 2;
const STATUS_WILL_LEAVE = 3;
const STATUS_DID_LEAVE = 4;

const INNER_REF = Symbol('inner');

class RedalWrapper extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { status: STATUS_WILL_ENTER };
  }
  componentWillAppear(cb) {
    console.log('redal will appear');
    this.setState({ status: STATUS_WILL_ENTER });
    cb();
  }
  componentDidAppear() {
    console.log('redal did appear');
    this.setState({ status: STATUS_DID_ENTER });
  }
  componentWillEnter(cb) {
    console.log('redal will enter');
    const { willEnter, enterDuration = 0 } = this.props;
    this.setState({ status: STATUS_WILL_ENTER });
    setTimeout(cb, enterDuration);
    typeof willEnter === 'function' && setTimeout(() => willEnter(this.refs.inner), 0);
  }
  componentDidEnter() {
    console.log('redal did enter');
    const { didEnter } = this.props;
    this.setState({ status: STATUS_DID_ENTER });
    typeof didEnter === 'function' && setTimeout(() => didEnter(this.refs.inner), 0);
  }
  componentWillLeave(cb) {
    console.log('redal will leave');
    const { willLeave, leaveDuration = 0 } = this.props;
    this.setState({ status: STATUS_WILL_LEAVE });
    setTimeout(cb, leaveDuration);
    typeof willLeave === 'function' && setTimeout(() => willLeave(this.refs.inner), 0);
  }
  componentDidLeave() {
    console.log('redal did leave');
    const { didLeave } = this.props;
    this.setState({ status: STATUS_DID_LEAVE });
    typeof didLeave === 'function' && setTimeout(() => didLeave(this.refs.inner), 0);
  }
  handleClick(e) {
    const { maskToggle, handleMaskClick, close } = this.props;
    const inner = this.refs[INNER_REF];
    const willLeave = typeof handleMaskClick === 'function' ? !handleMaskClick(e, inner) : maskToggle && !domContains(inner, e.target);
    if (willLeave) close();
  }
  render() {
    const { className, children, ...props } = this.props;
    const { status } = this.state;
    const cn = cns({
      'redal--entering': status === STATUS_WILL_ENTER,
      'redal--entered': status === STATUS_DID_ENTER,
      'redal--leaving': status === STATUS_WILL_LEAVE,
      'redal--left': status === STATUS_DID_LEAVE
    }, 'redal', className);
    return (
      <div className={cn} {...props} onClick={::this.handleClick}>
        <div className={cns('redal-inner', className)} ref={INNER_REF}>{children}</div>
      </div>
    );
  }
}

export default RedalWrapper;
