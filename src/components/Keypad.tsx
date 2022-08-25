import React from 'react';
import styled from 'styled-components';
import {Button} from '../elements/index';

type KeypadComponent = {
  getOper: any;
  getNum: any;
  getDot: any;
  deleteCalc: any;
  getResult: any;
};

const Keypad = ({getOper, getNum, getDot, deleteCalc, getResult}: KeypadComponent) => {
  return (
    <Container>
      <RowButton>
        <Button bg="#dadce0" getOper={getOper} value="%">
          %
        </Button>
        <Button bg="#dadce0" deleteCalc={deleteCalc} value="CE">
          CE
        </Button>
      </RowButton>
      <RowButton>
        <Button getNum={getNum} value={7}>
          7
        </Button>
        <Button getNum={getNum} value={8}>
          8
        </Button>
        <Button getNum={getNum} value={9}>
          9
        </Button>
        <Button fontSize="18px" bg="#dadce0" getOper={getOper} value="÷">
          ÷
        </Button>
      </RowButton>
      <RowButton>
        <Button getNum={getNum} value={4}>
          4
        </Button>
        <Button getNum={getNum} value={5}>
          5
        </Button>
        <Button getNum={getNum} value={6}>
          6
        </Button>
        <Button fontSize="18px" bg="#dadce0" getOper={getOper} value="×">
          ×
        </Button>
      </RowButton>
      <RowButton>
        <Button getNum={getNum} value={1}>
          1
        </Button>
        <Button getNum={getNum} value={2}>
          2
        </Button>
        <Button getNum={getNum} value={3}>
          3
        </Button>
        <Button fontSize="18px" bg="#dadce0" getOper={getOper} value="-">
          -
        </Button>
      </RowButton>
      <RowButton>
        <Button getNum={getNum} value={0}>
          0
        </Button>
        <Button fontSize="18px" getDot={getDot} value=".">
          .
        </Button>
        <Button
          color="white"
          fontSize="18px"
          bg="#4285F4"
          atvBtnSdw="0px 0px 3px 1px #4285F4"
          atvBtnBorder="1px solid #1a0dab"
          getResult={getResult}
          value="="
        >
          =
        </Button>
        <Button fontSize="18px" bg="#dadce0" getOper={getOper} value="+">
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

export default React.memo(Keypad);
