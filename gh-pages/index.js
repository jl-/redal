import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import Redal from '../dist';
import Redal from '../src';
import './index.scss';
const REDAL_REF = Symbol('redal');

class Demo extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { scoped: false, maskToggle: false, hasMaskClickHandler: true };
  }
  render() {
    const { scoped, maskToggle, hasMaskClickHandler } = this.state;
    const maskClickHandler = hasMaskClickHandler ? () => confirm('close on mask clicked?') : null;
    return (
      <div className='wrapper'>
        <button onClick={() => this.refs[REDAL_REF].toggle(false)}>Open Redal</button>
        <button onClick={() => this.setState({ scoped: !scoped })}>
          scoped: {scoped ? 'true' : 'false'}
        </button>
        <button onClick={() => {
          if (hasMaskClickHandler) {
            alert('hasMaskClickHandler is set, maskToggle is not allowed.');
            return;
          }
          this.setState({
            maskToggle: !maskToggle
          });
        }}>
          maskToggle: {maskToggle ? 'true' : 'false'}
        </button>
        <button onClick={() => {
          const shouldDisableToggle = maskToggle && !hasMaskClickHandler;
          if (shouldDisableToggle) {
            alert('handleMaskClick props is set, will disable maskToggle.');
          }
          this.setState({
            hasMaskClickHandler: !hasMaskClickHandler,
            maskToggle: shouldDisableToggle ? false : maskToggle
          });
        }}>
          hasMaskClickHandler: {hasMaskClickHandler ? 'true' : 'false'}
        </button>
        <div className='scope'>
          <Redal
            ref={REDAL_REF}
            scoped={this.state.scoped}
            enterTimeout={800}
            handleMaskClick={maskClickHandler}
            maskToggle={maskToggle}
            beforeEnter={() => this.setState({msg: ''})}
            didEnter={() => {
              this.setState({msg: 'did enter'});
              alert('did enter');
            }}
            didLeave={() => {
              this.setState({ msg: 'did leave' });
              alert('did leave');
            }}
          >
            <div className='inner'>
              <h1>some content</h1>
              <Redal.X component='h3' beforeLeave={() => confirm('confirm leave?')} > close redal </Redal.X>
            </div>
          </Redal>
        </div>
        <p>{this.state.msg}</p>
      </div>
    );
  }
}

ReactDOM.render(
  <Demo></Demo>
  ,document.querySelector('#demo')
);

