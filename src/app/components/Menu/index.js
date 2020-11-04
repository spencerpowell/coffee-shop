import React from 'react';
import styled from 'styled-components';

export function Menu(props) {
  const { children } = props;
  return <ButtonGroup>{children}</ButtonGroup>;
}

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
