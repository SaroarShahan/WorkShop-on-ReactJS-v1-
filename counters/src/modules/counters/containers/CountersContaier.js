import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
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

CountersContaier.propTypes = {
  counters: PropTypes.array.isRequired,
  onHandleIncrement: PropTypes.func.isRequired,
  onHandleDecrement: PropTypes.func.isRequired,
  onHandleDelete: PropTypes.func.isRequired
}

export default CountersContaier
