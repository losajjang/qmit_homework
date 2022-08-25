import React from 'react';
import styled from 'styled-components';
import Calculator from './pages/Calculator';

function App() {
  return (
    <Container>
      <Calculator />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 150px;
`

export default App;
