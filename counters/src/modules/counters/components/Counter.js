import React from 'react'
import PropTypes from 'prop-types'
import {
  CounterWrapper,
  CounterTitle,
  CounterInnerWrapper,
  Button
} from '../styles/CounterStyle'

const Counter = ({
  id,
  value,
  onHandleIncrement,
  onHandleDecrement,
  onHandleDelete
}) => {
  return (
    <CounterWrapper>
      <CounterInnerWrapper>
        <CounterTitle value={value}>{value <= 0 ? 'Zero' : value}</CounterTitle>
      </CounterInnerWrapper>
      <CounterInnerWrapper>
        <Button onClick={() => onHandleIncrement(id)}>+</Button>
        <Button onClick={() => onHandleDecrement(id)}>-</Button>
        <Button onClick={() => onHandleDelete(id)}>x</Button>
      </CounterInnerWrapper>
    </CounterWrapper>
  )
}

Counter.propTypes = {
  id: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  onHandleIncrement: PropTypes.func.isRequired,
  onHandleDecrement: PropTypes.func.isRequired,
  onHandleDelete: PropTypes.func.isRequired
}

export default Counter
