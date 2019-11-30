import React, { Component, Fragment } from 'react'
import Counter from '../components/Counter'

class CountersContaier extends Component {
  render() {
    const {
      counters,
      onHandleIncrement,
      onHandleDecrement,
      onHandleDelete
    } = this.props

    return (
      <Fragment>
        <h1>Counters:</h1>

        {counters.map(c => (
          <Counter
            key={c.id}
            id={c.id}
            value={c.value}
            onHandleIncrement={onHandleIncrement}
            onHandleDecrement={onHandleDecrement}
            onHandleDelete={onHandleDelete}
          />
        ))}
      </Fragment>
    )
  }
}

export default CountersContaier
