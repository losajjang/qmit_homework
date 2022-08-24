import React from 'react';
import styled from 'styled-components';

type TextComponent = {
  children?: string;
  color?: string;
  fontSize?: string;
  bold?: string;
};

type TextStyle = {
  color?: string;
  fontSize?: string;
  bold?: string;
};

const Text = (props: TextComponent) => {
  const {children, color, fontSize, bold} = props;

  const styles = {
    color: color,
    fontSize: fontSize,
    bold: bold,
  };

  return <TextP {...styles}>{children}</TextP>;
};

Text.defaultProps = {
  color: 'black',
  fontSize: '',
  bold: '',
};

const TextP = styled.p<TextStyle>`
  margin: 0;
  color: ${props => props.color};
  font-weight: ${props => (props.bold ? '600' : '400')};
  ${props => (props.fontSize ? `font-size: ${props.fontSize}` : '')}
`;

export default Text;
