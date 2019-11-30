import React, { Component, Fragment } from 'react'
import CountersContaier from './modules/counters/containers/CountersContaier'
import Header from './modules/core/Header'
import {
  CounterForm,
  CounterInput,
  CounterButton
} from './modules/counters/styles/CounterStyle'

class App extends Component {
  state = {
    value: '',
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 }
    ]
  }

  _hanldeChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  _handleSubmit = e => {
    e.preventDefault()

    const { counters, value } = this.state
    const newCounter = [
      ...counters,
      { id: counters.length + 1, value: parseInt(value) }
    ]

    this.setState({ counters: newCounter, value: '' })
  }

  _handleIncrement = id => {
    const { counters } = this.state

    const newCounters = counters.map(counter =>
      counter.id === id ? { ...counter, value: counter.value + 1 } : counter
    )

    this.setState({ counters: newCounters })
  }

  _handleDecrement = id => {
    const { counters } = this.state
    const newCounters = counters.map(counter =>
      counter.id === id ? { ...counter, value: counter.value - 1 } : counter
    )

    this.setState({ counters: newCounters })
  }

  _handleDelete = id => {
    const { counters } = this.state

    const newCounter = counters.filter(c => c.id !== id)

    this.setState({ counters: newCounter })
  }

  render() {
    const { counters, counter, value } = this.state
    return (
      <Fragment>
        <Header countersLength={counters.length} />

        <CounterForm>
          <CounterInput
            value={value}
            name="value"
            onChange={this._hanldeChange}
          />
          <CounterButton onClick={this._handleSubmit}>Add</CounterButton>
        </CounterForm>

        <CountersContaier
          counters={counters}
          counter={counter}
          onHandeSubmit={this._handleSubmit}
          onHandleIncrement={this._handleIncrement}
          onHandleDecrement={this._handleDecrement}
          onHandleDelete={this._handleDelete}
        />
      </Fragment>
    )
  }
}

export default App
