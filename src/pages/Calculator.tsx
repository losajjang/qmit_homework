import React from 'react';
import styled from 'styled-components';
import Keypad from '../components/Keypad';
import {Display} from '../elements/index';

function Calculator() {
  return (
    <Container>
      Calculator
      <InnerContainer>
        <Display />
        <Keypad />
      </InnerContainer>
    </Container>
  );
}

const Container = styled.div`
  background: #4386e7;
  display: inline-block;
  border-radius: 20px;
  padding: 20px 40px;
`;

const InnerContainer = styled.div`
  background: white;
  padding: 5px;
  width: 670px;
  height: 320px;
  border-radius: 15px;
`;

export default Calculator;
