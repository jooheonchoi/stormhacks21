import React from 'react'
import Background from './Background';
import styled from "styled-components";
import TextDescription from './TextDescription';
import Features from './Features';
const Homepage = () => {
  return (
    <div>
        <Wrapper>
        <Background />
        <TextDescription />
        <Features />
        </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  position: relative;
  background: #1f1144;
`;

export default Homepage;