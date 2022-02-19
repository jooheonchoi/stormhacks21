import React from 'react'
import Background from './Background';
import styled from "styled-components";
import TextDescription from './TextDescription';
const Homepage = () => {
  return (
    <div>
        <Wrapper>
        <Background />
        <TextDescription />
        </Wrapper>

    </div>
  )
}

const Wrapper = styled.div`
  position: relative;
  background: #1f1144;
`;

export default Homepage;