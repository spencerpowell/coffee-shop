import React, { useEffect } from 'react';
import styled from 'styled-components';
import { CoffeeShopContext } from '../Context';

export function Barista(props) {
  const { actions } = React.useContext(CoffeeShopContext);
  const { orderQueue, isWorking } = props;
  const nextOrder = orderQueue[0];
  let creationTime = 0;

  if (nextOrder) {
    creationTime = nextOrder.creationTime;
  }

  const pickupOrderIfPossible = order => {
    if (order) {
      actions.setWorkingStatus(true);
      actions.completeOrder();
      actions.moveToCoffeeCounter(order);
    } else {
      actions.setWorkingStatus(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      pickupOrderIfPossible(nextOrder);
    }, creationTime * 1000);
    return () => clearTimeout(timer);
  }, [orderQueue]);

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
