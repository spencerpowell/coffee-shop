import React from 'react';
import styled from 'styled-components';

export function TicketQueue(props) {
  const { menuItems } = props;
  return (
    <Wrapper>
      <h3>Order Queue</h3>
      <ul>
        {menuItems.map(item => {
          return <li>{item.name}</li>;
        })}
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;
