import styled from 'styled-components'

const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
`

const CounterInnerWrapper = styled.div`
  margin-right: 15px;
  margin-bottom: 15px;
`

const CounterTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
  background-color: ${props => (props.value <= 0 ? '#e74c3c' : '#2c3e50')};
  color: #fff;
  padding: 5px;
  border-radius: 4px;
  width: 50px;
  text-align: center;
`

const Button = styled.button``

const CounterForm = styled.form`
  margin-bottom: 30px;
`

const CounterInput = styled.input``

const CounterButton = styled.button``

export {
  CounterWrapper,
  CounterInnerWrapper,
  CounterTitle,
  Button,
  CounterForm,
  CounterInput,
  CounterButton
}
