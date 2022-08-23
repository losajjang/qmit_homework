import React from 'react';
import styled from 'styled-components';
import {Button} from '../elements/index';

const Keypad = () => {
  return (
    <Container>
      <RowButton>
        {/* <Button display='none'></Button>
        <Button display='none'></Button> */}
        <Button bg="#dadce0">%</Button>
        <Button bg="#dadce0">CE</Button>
      </RowButton>
      <RowButton>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button fontSize="18px" bg="#dadce0">
          ÷
        </Button>
      </RowButton>
      <RowButton>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button fontSize="18px" bg="#dadce0">
          ×
        </Button>
      </RowButton>
      <RowButton>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button fontSize="18px" bg="#dadce0">
          -
        </Button>
      </RowButton>
      <RowButton>
        <Button>0</Button>
        <Button fontSize="18px">.</Button>
        <Button
          color="white"
          fontSize="18px"
          bg="#4285F4"
          atvBtnSdw="0px 0px 3px 1px #4285F4"
          atvBtnBorder="1px solid #1a0dab"
        >
          =
        </Button>
        <Button fontSize="18px" bg="#dadce0">
          +
        </Button>
      </RowButton>
    </Container>
  );
};

const Container = styled.div`
  /* bottom: 10px; */
`;
const RowButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default Keypad;
