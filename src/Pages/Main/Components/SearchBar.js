import React, {useState} from 'react';
import styled from 'styled-components';

const OutlineWrapper = styled.div`
  display: flex;
  margin-top: 100px;
  flex-direction: column;
`;

const Switchers = styled.div`
  display: flex;
  margin-top: 5px;
`;
const Switch = styled.button`
  font-size: 1.1rem;
  border: none;
  outline: none;
  background: white;
  color: ${props => props.activated ? "red" : "black"};
  cursor: pointer;
  margin-right: 5px;
`;

const Wrapper = styled.div`
  display: flex;
`;
const Input = styled.input`
  padding: 3px;
  outline: none;
  font-size: 1.4rem;
  border: none;
  border-bottom: 1px solid black;
  margin-right: 5px;
`;
const Button = styled.button`
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  background: white;
font-family: 'Roboto', sans-serif;
  color: black;
  outline: none;
  &:hover {
    background: black;
    color: white;
  }
`;

export default () => {
  const [value, setValue] = useState('');
  return (
    <OutlineWrapper>
    <Wrapper>
      <Input value={value} onChange={e => setValue(e.target.value)}/>
      <Button>Search</Button>
    </Wrapper>
    <Switchers>
      <Switch activated={true}>Buy</Switch>
      <Switch>Rent</Switch>
    </Switchers>
    </OutlineWrapper>
  );
};
