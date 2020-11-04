import React from 'react';
import styled from 'styled-components';

export function CoffeeCounter(props) {
  const { queue } = props;

  return (
    <Wrapper>
      <h3>Coffee Counter</h3>
      <ul>
        {queue.map(item => {
          return <li>{item}</li>;
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
