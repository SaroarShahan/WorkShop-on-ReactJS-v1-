import styled from "styled-components";

const TodoItem = styled.div`
  display: flex;
  align-items: center;

  div {
    margin-top: 20px;
    margin-right: 30px;
  }
`;

const TodoTitle = styled.h2`
  margin: 0;
`;

const Button = styled.button`
  background-color: ${props => (props.delete ? "#f67280" : "#151965")};
  color: #fff;
  border: 1px solid ${props => (props.delete ? "#f67280" : "#151965")};
  margin-right: 5px;
  padding: 8px 22px;
  border-radius: 2px;

  &:hover {
    background-color: ${props => (props.delete ? "#c06c84" : "#32407b")};
    border-color: ${props => (props.delete ? "#c06c84" : "#32407b")};
  }
`;

export { TodoItem, TodoTitle, Button };
