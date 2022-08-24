import React from 'react';
import styled from 'styled-components';

type ButtonComponent = {
  text?: string;
  children?: string;
  bg?: string;
  fontSize?: string;
  bold?: string;
  display?: string;
  color?: string;
  atvBtnSdw?: string;
  atvBtnBorder?: string;
  onFocus?: () => void;
};

type ButtonStyle = {
  color?: string;
  bg?: string;
  fontSize?: string;
  bold?: string;
  display?: string;
  atvBtnSdw?: string;
  atvBtnBorder?: string;
};

const Button = (props: ButtonComponent) => {
  const {
    text,
    children,
    color,
    bg,
    fontSize,
    bold,
    display,
    atvBtnSdw,
    atvBtnBorder,
    onFocus,
  } = props;
  const styles = {
    color: color,
    bg: bg,
    fontSize: fontSize,
    bold: bold,
    display: display,
    atvBtnSdw: atvBtnSdw,
    atvBtnBorder: atvBtnBorder,
  };

  return (
    <Container>
      <ElButton {...styles} onClick={onFocus}>
        {text ? text : children}
      </ElButton>
    </Container>
  );
};

Button.defaultProps = {
  color: '',
  text: '',
  children: null,
  bg: '#f1f3f4',
  fontSize: '',
  bold: '',
  display: '',
  atvBtnSdw: '0px 0px 3px 1px lightgray',
  atvBtnBorder: '1px solid #70757a',
  onFocus: () => {},
};

const Container = styled.div`
  padding: 5px;
  display: inline-block;
`;
const ElButton = styled.button<ButtonStyle>`
  :active {
    box-shadow: ${props => props.atvBtnSdw};
    border: ${props => props.atvBtnBorder};
  }
  ${props => (props.color ? `color: ${props.color}` : '')}
  ${props => (props.display ? `display: ${props.display}` : '')};
  background: ${props => props.bg};
  width: 83px;
  height: 34px;
  border-radius: 4px;
  border-width: 0;
  ${props => (props.fontSize ? `font-size: ${props.fontSize}` : '')}
  ${props => (props.bold ? `font-weight: ${props.bold}` : '')}
`;

export default Button;
