import React, { useState } from 'react';
import styled from 'styled-components';

import { MenuItem } from '../../components/MenuItem';
import { Menu } from '../../components/Menu';
import { Provider } from '../../components/Context';
import { TicketQueue } from 'app/components/TicketQueue';
import { Barista } from 'app/components/Barista';

export function CoffeeShop() {
  const [orderQueue, updateOrders] = useState([]);
  const [isBaristaWorking, setWorkingStatus] = useState(false);
  console.log('orders');
  console.log(orderQueue);
  const completeOrder = () =>
    updateOrders(orderQueue.filter((order, index) => index > 0));
  return (
    <Provider
      value={{
        orderQueue,
        actions: {
          completeOrder,
          setWorkingStatus,
        },
      }}
    >
      <>
        <Wrapper>
          <Menu>
            <MenuItem creationTime={4} onClick={updateOrders}>
              Cafe Au Lait
            </MenuItem>
            <MenuItem creationTime={3} onClick={updateOrders}>
              Cappuccino
            </MenuItem>
            <MenuItem creationTime={3} onClick={updateOrders}>
              Expresso
            </MenuItem>
          </Menu>
          <TicketQueue menuItems={orderQueue}></TicketQueue>
          <Barista
            orderQueue={orderQueue}
            isWorking={isBaristaWorking}
          ></Barista>
        </Wrapper>
      </>
    </Provider>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;
