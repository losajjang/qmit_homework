import React from 'react';
import styled from 'styled-components';
import {Icon} from '@iconify/react';

type HistoryPopOverComponent = {
  prevFormula?: any;
  prevResult?: any;
};

const HistoryPopOver = ({prevFormula, prevResult}: HistoryPopOverComponent) => {
  return (
    <Container>
      <Icon icon="pepicons:rewind-time" fontSize={22} color="#3871e0" />
      {prevFormula?.length === 0 ? (
        <InfoText>이전 결과식이 여기에 표시됩니다.</InfoText>
      ) : (
        prevFormula.map(
          (formula: string, index: React.Key | null | undefined) => (
            <PrevFormula key={index}>{formula}</PrevFormula>
          ),
        )
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  padding: 10px;
  top: -300px;
  left: 0px;
  background-color: white;
  min-height: 100px;
  width: 300px;
  border: 1px solid lightgray;
  border-radius: 10px;
  box-shadow: 0px 0px 2px 2px rgba(112, 117, 122, 0.3);
`;
const InfoText = styled.p`
  text-align: center;
`;
const PrevFormula = styled.p`
  margin-left: 20px;
`;

export default HistoryPopOver;
