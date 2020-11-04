import React, { useState } from 'react';
import styled from 'styled-components';

import { MenuItem } from '../../components/MenuItem';
import { Menu } from '../../components/Menu';
import { Provider } from '../../components/Context';
import { TicketQueue } from 'app/components/TicketQueue';
import { Barista } from 'app/components/Barista';
import { CoffeeCounter } from 'app/components/CoffeeCounter';

export function CoffeeShop() {
  const [coffeeCounterQueue, updateCoffeeCounter] = useState([]);
  const [orderQueue, updateOrders] = useState([]);
  const [isBaristaWorking, setWorkingStatus] = useState(false);
  const pickupCoffee = () =>
    updateCoffeeCounter(
      coffeeCounterQueue.filter((coffee, index) => index > 0),
    );

  const moveToCoffeeCounter = order => {
    updateCoffeeCounter(coffeeCounterQueue.concat(order.name));
    setTimeout(() => {
      pickupCoffee();
    }, 3000);
  };

  const completeOrder = () => {
    updateOrders(orderQueue.filter((value, index) => index > 0));
  };

  return (
    <Provider
      value={{
        orderQueue,
        actions: {
          completeOrder,
          moveToCoffeeCounter,
          pickupCoffee,
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
            <MenuItem creationTime={10} onClick={updateOrders}>
              Cappuccino
            </MenuItem>
            <MenuItem creationTime={15} onClick={updateOrders}>
              Expresso
            </MenuItem>
          </Menu>
          <TicketQueue menuItems={orderQueue}></TicketQueue>
          <Barista
            orderQueue={orderQueue}
            isWorking={isBaristaWorking}
          ></Barista>
          <CoffeeCounter queue={coffeeCounterQueue}></CoffeeCounter>
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
