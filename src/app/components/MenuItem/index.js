import React from 'react';
import styled from 'styled-components';
import { CoffeeShopContext } from '../Context';

export function MenuItem(props) {
  const { orderQueue, actions } = React.useContext(CoffeeShopContext);
  const { children, creationTime, onClick } = props;
  const onClickHandler = () => {
    onClick(
      orderQueue.concat({
        name: children,
        creationTime,
      }),
    );
    actions.setWorkingStatus(true);
  };
  return (
    <ButtonContainer>
      <DefaultButton onClick={onClickHandler}>{children}</DefaultButton>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.div`
  display: flex;
`;

const DefaultButton = styled.button`
  background: #fff;
  color: #6200ee;
  opacity: 0.8;
  ${ButtonContainer}:hover & {
    opacity: 1;
    background: #fafafa;
  }

  font-size: 16px;
  text-transform: uppercase;
  margin-right: 11px;
  height: 70px;
  width: 210px;
  border: 1px solid #c1c1c1;
  border-radius: 3px;
`;
