#### Usage:

```js
import Redalfrom 'redal';


class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = { redalHidden: true };
  }
  toggle() {
    this.setState({ redalHidden: !this.state.redalHidden });
  }
  canBeClosed() {
    // return `false` to stop the modal from closing
    // return a `Promise` to defer the closing when resolved
    // otherwise close the modal immediately
  }
  afterModalClosed(modalDom) {
  }
  render() {
    return (
      <div>
        <Redal enterDuration={800} leaveDuration={800} didLeave={::this.afterModalClosed} hidden={this.state.redalHidden}>
          {/* click to close the modal*/}
          <Redal.X> x </Redal.X>

          <div className='redal-header'></div>
          <div className='redal-body'></div>
          <div className='redal-footer'>

            {/* click to close the modal if beforeClose() !== false */}
            <Redal.X beforeLeave={::this.canBeClosed}> confirm </Redal.X>

            <Redal.X> cancel </Redal.X>
          </div>
        </Redal>
        <button onClick={() => this.toggle()}>toggle modal</button>
      </div>
    );
  }
}

```

---

```js
<Redal
  enterDuration, leaveDuration, // same as your animation-duration for css animation
  willEnter, didEnter, willLeave, didLeave // callback for modal lifecycles
  hidden //
  >
</Redal>
```

```
{/* can be put hoever deep inside Redal */}
<Redal.X
  beforeLeave, // function, its return value determines whether the modal can be closed or not. `true`, a `Promise` to be resolved, `undefined`; `false`
  component // tag, default 'span'
  >
</Redal.X>
```

---
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
