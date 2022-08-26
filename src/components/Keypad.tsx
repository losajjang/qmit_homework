import React from 'react';
import styled from 'styled-components';
import {Button} from '../elements/index';

type KeypadComponent = {
  getOper: (e: React.ChangeEvent<HTMLButtonElement>) => void;
  getNum: (e: React.ChangeEvent<HTMLButtonElement>) => void;
  getDot: (e: React.ChangeEvent<HTMLButtonElement>) => void;
  deleteCalc: () => void;
  getResult: () => void;
};

const Keypad = ({
  getOper,
  getNum,
  getDot,
  deleteCalc,
  getResult,
}: KeypadComponent) => {
  return (
    <div>
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
    </div>
  );
};

const RowButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default React.memo(Keypad);
