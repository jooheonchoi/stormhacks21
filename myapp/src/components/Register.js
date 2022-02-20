import React, { useState } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import {auth} from './firebase-config';

import { Link } from "react-router-dom";
// material
import { styled } from "@mui/material/styles";
import { Card, Stack, Container, Typography, Box, Button, TextField } from "@mui/material";
import Bing from '../images/bg.jpg'



const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'blue'
  };


const SectionStyle = styled(Card)(() => ({
  width: "100%",
  maxWidth: 464,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin: (2, 0, 2, 0)

}));

const ContentStyle = styled("div")(() => ({
  maxWidth: 480,
  margin: "auto",
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
  justifyContent: "center",
  padding: (12, 0)

}));


const Register = () => {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const[user, setUser] = useState({});
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })
    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth, 
                registerEmail,
                registerPassword
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);

        }
    }

    const login = async () => {
        

    }

    const logout = async () => {
        await signOut(auth);
    }










    return (

        <Box sx={{ display: "flex" }} className="mui-Box">

        <Box sx={{ display: { xl: "block", xs: "none", md: "hidden" } }}>
          <SectionStyle className="Selection-Styles">
            <Typography
              variant="h4"
              sx={{ px: 5, mt: 1, mb: 5, fontWeight: 700 }}
            >
              Hi, Welcome to HarmonyUs
            </Typography>
            <img src={Bing} alt="register" />
          </SectionStyle>
        </Box>


        <Container
        maxWidth="sm"
        // style={{ backgroundColor: "red" }}
        sx={{ maxHeight: "100%" }}
        className="mui-container"
      >
        <ContentStyle>
          <Stack sx={{ mb: 5 }}>
            <Typography
              variant="h4"
              sx={{ px: 0, mt: 1, mb: 1, fontWeight: 700 }}
              gutterBottom
            >
              Register
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Enter your details below.
            </Typography>
          </Stack>

        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
                display: 'flex',
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                onChange={(e) => {
                    setRegisterEmail(e.target.value);
                }}

                sx={{}} id="email" label="Email" variant="outlined" />
            <TextField
                onChange={(e) => {
                    setRegisterPassword(e.target.value);
                }}
                sx={{}} id="password" label="Password" variant="outlined" />
            <Button onClick={register} variant="contained" >Submit</Button>

            <h4>Registered user</h4>
            {user?.email}
            <Button onClick={logout} variant="outlined" >Logout</Button>
        </Box>

        <Box>
            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
              Don’t have an account?&nbsp;
              <Link to="/register" style={linkStyle}>Register</Link>
            </Typography>
          </Box>
        </ContentStyle>
      </Container>
    </Box>
    )
}

export default Register;