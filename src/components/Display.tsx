import React, {forwardRef} from 'react';
import styled from 'styled-components';
import {Text} from '../elements/index';
import {Icon} from '@iconify/react';

const Display = forwardRef<HTMLDivElement>((_, displayRef) => {
  return (
    <>
      <Container ref={displayRef} tabIndex={-1}>
        <InnerContainer>
          <HistoryContents>
            <Icon icon="pepicons:rewind-time" fontSize={22} color="#70757a" />
            <Text fontSize="13px" color="#70757a">
              Ans = 0
            </Text>
          </HistoryContents>
          <Result>
            <Text fontSize="30px" bold="bold">
              0
            </Text>
          </Result>
        </InnerContainer>
      </Container>
    </>
  );
});

const Container = styled.div`
  height: 72px;
  border: 1px solid #dadce0;
  box-sizing: border-box;
  border-radius: 8px;
  margin: 5px 5px 15px 5px;
  :focus {
    border: 1px solid #4285f4;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3) inset;
  }
`;
const InnerContainer = styled.div`
  padding: 10px 14px 0 10px;
`;
const HistoryContents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 10px;
`;

const Result = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 10px;
`;

export default Display;
