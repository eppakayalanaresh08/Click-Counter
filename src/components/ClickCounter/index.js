import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(preState => ({count: preState.count + 1}))
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">
          The Button has been clicked
          <span className="number-count"> {count} </span> times
        </h1>
        <p className="paragraph">Click the button to increase the count</p>
        <div>
          <button
            className="button-bg"
            type="button"
            onClick={this.onIncrement}
          >
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
