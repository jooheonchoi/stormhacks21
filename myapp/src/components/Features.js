import React from 'react'
import styled from "styled-components";
import {Wrapper, Title} from "./TextDescription";
import {Box, Container} from "@mui/material"
import JournalImg from '../images/journal.png';
const Features = () => {
  return (
    <div>
        <Wrapper style={{ color: 'white' }}>
            <Title>What is Mental Health?</Title>
            Mental health is more than the mere lack
of mental disorders. The positive dimension of mental health is stressed in WHO’s
definition of health as contained in its constitution:
<br/> “Health is a state of complete
physical, mental and social well-being and
not merely the absence of disease or infirmity.”
        </Wrapper>
        <Wrapper style={{ color: 'white' }}>
            <Title>Features of HarmonyUs</Title>
            <div style={{ height: '100vh', width: '100vw', backgroundColor: '', display: 'flex', justifyContent: 'space-evenly', }}>
                <Container sx={{
                   width: '100%',
                   height: '100%',
                }}>
                    <img src={JournalImg} width="100%" height="100%" alt="journal"/>
                </Container>
                <Container>
                    <h3>Journalling</h3>
                    <p>
                    a space for you to speak and express 
                    <br/>your feelings without any hesitation.
                    </p>
                </Container>
            </div>
            </Wrapper>
    </div>
  )
}



export default Features;