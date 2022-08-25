import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import Keypad from '../components/Keypad';
import Display from '../components/Display';
import HistoryPopOver from '../components/HistoryPopOver';

function Calculator() {
  const [calc, setCalc] = useState('');
  const [formula, setFormula] = useState('');
  const [operDupCheck, setOperDupCheck] = useState(true);
  const [dotDupCheck, setDotDupCheck] = useState(true);
  const [prevFormula, setPrevFormula] = useState<any>([]);
  const [prevResult, setPrevResult] = useState<any>([]);
  const [popOver, setPopOver] = useState(false);

  const displayRef = useRef<HTMLDivElement>(null);

  const getNum = (e: any) => {
    setCalc(prev => prev + e.target.value);
    setOperDupCheck(true);
    displayRef.current?.focus();
  };

  const getOper = (e: any) => {
    if (operDupCheck) {
      setCalc(prev => prev + e.target.value);
      setOperDupCheck(false);
      setDotDupCheck(true);
      displayRef.current?.focus();
    }
  };

  const getDot = (e: any) => {
    if (calc.length === 0) {
      return;
    }
    if (dotDupCheck) {
      setCalc(prev => prev + e.target.value);
      setDotDupCheck(false);
      displayRef.current?.focus();
    }
  };

  const deleteCalc = () => {
    setDotDupCheck(true);
    setCalc('');
  };

  const getResult = () => {
    const changeSpecialChar = calc.replace(/×/g, '*').replace(/÷/g, '/');
    const inputFormula = changeSpecialChar;
    const includePercent = calc.includes('%');

    if (includePercent === true) {
      const slicePercent = calc.slice(0, -1);
      const formulaInt = parseInt(slicePercent) / 100;
      const result = formulaInt.toString();
      setCalc(result);
      setFormula(calc);
      setPrevFormula([...prevFormula, `${calc}=${eval(result)}`]);
      setPrevResult([...prevResult, eval(result)]);
    } else if (isNaN(eval(inputFormula))) {
      setCalc('');
    } else if (eval(inputFormula) === Infinity) {
      alert('0으로 나눌 수 없습니다.');
      setCalc('');
      return false;
    } else {
      setCalc(eval(inputFormula));
      setFormula(calc);
      setPrevFormula([...prevFormula, `${calc}=${eval(inputFormula)}`]);
      setPrevResult([...prevResult, eval(inputFormula)]);
    }
  };

  const onPopOverOpen = () => {
    setPopOver(true);
  };

  const onPopOVerClose = () => {
    if (popOver) {
      setPopOver(false);
    }
  };

  return (
    <Container>
      <InnerContainer onClick={onPopOVerClose}>
        <Display
          ref={displayRef}
          calc={calc}
          formula={formula}
          onPopOverOpen={onPopOverOpen}
        />
        <Keypad
          getOper={getOper}
          getNum={getNum}
          getDot={getDot}
          deleteCalc={deleteCalc}
          getResult={getResult}
        />
        {popOver && (
          <HistoryPopOver prevFormula={prevFormula} prevResult={prevResult} />
        )}
      </InnerContainer>
    </Container>
  );
}

const Container = styled.div`
  background: #4386e7;
  display: inline-block;
  border-radius: 20px;
  padding: 20px 40px;
  box-shadow: 14px 14px 8px 0px #7aaef6;
`;

const InnerContainer = styled.div`
  background: white;
  padding: 5px;
  width: 670px;
  height: 320px;
  border-radius: 15px;
`;

export default Calculator;
