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
      <ElButton {...styles}>{text ? text : children}</ElButton>
    </Container>
  );
};

Button.defaultProps = {
  color: false,
  text: false,
  children: null,
  bg: '#f1f3f4',
  fontSize: false,
  bold: false,
  display: false,
  atvBtnSdw: '0px 0px 3px 1px lightgray',
  atvBtnBorder: '1px solid #70757a',
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
