import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CoffeeShopContext } from '../Context';

export function Barista(props) {
  const { actions } = React.useContext(CoffeeShopContext);
  const { orderQueue, isWorking } = props;
  const nextOrder = orderQueue[0];
  console.log('next order');
  console.log(nextOrder);
  let creationTime = 0;

  console.log('isWorking');
  console.log(isWorking);

  if (nextOrder) {
    creationTime = nextOrder.creationTime;
    console.log('current creation time');
    console.log(creationTime);
    //setWorkingStatus(true);
  }

  const pickupOrderIfPossible = order => {
    if (order) {
      actions.setWorkingStatus(true);
      actions.completeOrder();
    } else {
      actions.setWorkingStatus(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(`this will run after ${creationTime} seconds`);
      pickupOrderIfPossible(nextOrder);
    }, creationTime * 1000);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      <h3>Barista Status</h3>
      Barista is{' '}
      {isWorking ? `working on ${nextOrder && nextOrder.name}` : 'not working'}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;
