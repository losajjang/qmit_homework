import React from 'react';
import styled from 'styled-components';
import {Button} from '../elements/index';

type KeypadComponent = {
  onFocus: () => void;
};

const Keypad = ({onFocus}: KeypadComponent) => {
  return (
    <Container>
      <RowButton>
        <Button bg="#dadce0" onFocus={onFocus}>
          %
        </Button>
        <Button bg="#dadce0" onFocus={onFocus}>
          CE
        </Button>
      </RowButton>
      <RowButton>
        <Button onFocus={onFocus}>7</Button>
        <Button onFocus={onFocus}>8</Button>
        <Button onFocus={onFocus}>9</Button>
        <Button fontSize="18px" bg="#dadce0" onFocus={onFocus}>
          ÷
        </Button>
      </RowButton>
      <RowButton>
        <Button onFocus={onFocus}>4</Button>
        <Button onFocus={onFocus}>5</Button>
        <Button onFocus={onFocus}>6</Button>
        <Button fontSize="18px" bg="#dadce0" onFocus={onFocus}>
          ×
        </Button>
      </RowButton>
      <RowButton>
        <Button onFocus={onFocus}>1</Button>
        <Button onFocus={onFocus}>2</Button>
        <Button onFocus={onFocus}>3</Button>
        <Button fontSize="18px" bg="#dadce0" onFocus={onFocus}>
          -
        </Button>
      </RowButton>
      <RowButton>
        <Button onFocus={onFocus}>0</Button>
        <Button fontSize="18px" onFocus={onFocus}>
          .
        </Button>
        <Button
          color="white"
          fontSize="18px"
          bg="#4285F4"
          atvBtnSdw="0px 0px 3px 1px #4285F4"
          atvBtnBorder="1px solid #1a0dab"
          onFocus={onFocus}
        >
          =
        </Button>
        <Button fontSize="18px" bg="#dadce0" onFocus={onFocus}>
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
