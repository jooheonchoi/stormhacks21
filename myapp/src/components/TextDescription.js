import styled from "styled-components";

import MySphere from './threed/MySphere';


export default function TextDescription() {
  return (
    <div style={{ height: '100vh', width: '100vw', backgroundColor: '', display: 'flex', justifyContent: 'space-evenly', postion: 'relative' }}>
  <MySphere />
    <Wrapper>
 
      <Title>Welcome to <strong style={{color: '#FF5C8D'}}>HarmonyUs</strong>
      </Title>
      <Description>
      Mental health has been hidden behind a curtain of stigma and discrimination for too long. It is time to bring it out into
the open.
      </Description>
    </Wrapper>
    </div>
  );
}

export const Wrapper = styled.div`
width: 100vw;
  position: relative;
  max-width: 100vw;
  display: grid;
  gap: 20px;
  text-align: center;
  margin: 0 auto;
  padding: 140px 20px 100px;
`;

export const Title = styled.h1`
  color: rgba(255, 255, 255, 1);
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
`;

export const Description = styled.p`
  max-width: 240px;
  color: rgba(255, 255, 255, 0.7);
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 130%;
  margin: 0 auto;
`;
