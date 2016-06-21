#### Usage:

`npm i redal --save`

```js
import React, { Component } from 'react';
import Redal from 'redal';

const REDAL_REF = Symbol('redal');

class Demo extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { maskToggle: false };
  }
  toggle(hidden) {
    this.refs[REDAL_REF].toggle(hidden);
  }
  render() {
    return (
        <div className='wrapper'>
          <button onClick={() => this.toggle(false)}>Open Redal</button>
          <button onClick={() => this.setState({ maskToggle: !this.state.maskToggle })}>
            maskToggle: {this.state.maskToggle ? 'true' : 'false'}
          </button>
          <Redal
            ref={REDAL_REF}
            enterTimeout={800}
            handleMaskClick={() => confirm('close on mask clicked?')}
            maskToggle={this.state.maskToggle}
            didEnter={() => {
              alert('did enter');
            }}
            didLeave={() => {
              alert('did leave');
            }}
          >
            <div className='inner'>
              <h1>some content</h1>
              <Redal.X component='h3' beforeLeave={() => confirm('confirm leave?')}>Close redal</Redal.X>
            </div>
          </Redal>
        </div>
    );
  }
}

```

---

```js
<Redal
  variant // {string?}
  scoped // {boolean? := `false`}
         // default to append the modal dom to body (portal pattern);
         // set as `true` to leave the actually modal dom where <Redal> is used,
         // which is useful when you don't want the modal to be full screen, in which case
         // you also need to set a `transform` css property rather than `none` on
         // any closest ancestor you want the modal to be scoped to, then the modal will be
         // just the full size of that ancestor
  enterTimeout, leaveTimeout // {number} same as your animation-duration for css animation
  willEnter, didEnter, willLeave, didLeave // callback for modal lifecycles
  maskToggle // {boolean? := `false`} should close the modal or not when you click on the mask
  handleMaskClick // {function?} (event, innerDOM)
                  // if `!handleMaskClick(e,innerDOM)` then will close, vice versa.
                  // If this function is set, will ignore `maskToggle`
  hidden // { boolean := `false`}
>
  <Redal.X> x </Redal.X>
  <div className='redal-header'></div>
  <div className='redal-body'></div>
  <div className='redal-footer'>
    <Redal.X beforeLeave={}> confirm </Redal.X>
    <Redal.X> cancel </Redal.X>
  </div>
</Redal>
```

```
{/* can be placed however deep inside Redal; or you don't have to use this, you can just set a `ref` on `Redal`, and then use `this.refs.redal.toggle(true)` to close the modal, `this.refs.redal(false)` to open */}
<Redal.X
  beforeLeave, // function, its return value determines whether the modal can be closed or not. `true`, a `Promise` to be resolved, `undefined`; `false`
  component // tag, default 'span'
  >
</Redal.X>
```

---
There is not built-in css animations for modal show|hide, you need to do it on your own, which is pretty easy with the provided css classes hooks:
#### animation hooks for lifecycle
--entering, --entered, --leaving, --left
```scss
$redal-dura: 0.8s;
:global {
  .redal {
    background-color: black;
    &--entering {
      animation: fade-in both ease;
      animation-duration: $redal-dura;
      .redal-inner {
        animation: scale-in both ease;
        animation-duration: $redal-dura;
      }
    }
    &--leaving {
      animation: fade-out both ease;
      animation-duration: $redal-dura;
      .redal-inner {
        animation: scale-out both ease;
        animation-duration: $redal-dura;
      }
    }
  }
}
```

## dev
```
git clone 'https://github.com/jl-/redal.git'
npm i;
bower i; // don't worry, only install normalize.css for demo
gulp dev
```
