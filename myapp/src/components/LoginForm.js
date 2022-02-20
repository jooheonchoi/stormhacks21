// import { Box, Container, Typography, TextField, Button, Card } from '@mui/material'
// import React from 'react'
import Bing from '../images/bg.jpg'

// import { styled } from "@mui/material/styles";

// const SectionStyle = styled(Card)(() => ({
//     width: "100%",
//     maxWidth: 464,
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     margin: (2, 0, 2, 0)
//     // margin: theme.spacing(2, 0, 2, 2)
//   }));



// const LoginForm = () => {
    


//   return (
//     <>
//     <Box sx={{ display: 'flex'}}>
//         <Box sx={{ display: {xl: "block", xs: 'none', md: 'hidden' }}}>
//             <SectionStyle>
                
      
//         <Typography
//             variant="h4"
//             sx={{ px: 5, mt: 1, mb: 5, fontWeight: 700 }}
//           >
//             Hi, Welcome Back
//           </Typography>
//           <img src={bg} alt="login" />
//           </SectionStyle>
//         </Box>
//         <Container maxWidth="sm">
//             <Box>
//                 <TextField label="Email" variant="outlined" ></TextField>
//                 <TextField
//                 sx={{}} id="password" label="Password" variant="outlined" />
//             <Button variant="contained" >Submit</Button>
//             </Box>

//         </Container>
//     </Box>
//     </>
//   )
// }

// export default LoginForm



import { Link } from "react-router-dom";
// material
import { styled } from "@mui/material/styles";
import { Card, Stack, Container, Typography, Box, Button, TextField } from "@mui/material";
import React, { useState } from 'react'
import {auth} from './firebase-config';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';


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
export default function Login() {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const[user, setUser] = useState({});
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth, 
                loginEmail,
                loginPassword
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);

        }
    }



  return (
    <Box sx={{ display: "flex" }} className="mui-Box">

      <Box sx={{ display: { xl: "block", xs: "none", md: "hidden" } }}>
        <SectionStyle className="Selection-Styles">
          <Typography
            variant="h4"
            sx={{ px: 5, mt: 1, mb: 5, fontWeight: 700 }}
          >
            Hi, Welcome Back
          </Typography>
          <img src={Bing} alt="login" />
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
              Sign in to HarmonyUs
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
                    setLoginEmail(e.target.value);
                }}

                sx={{}} id="email" label="Email" variant="outlined" />
            <TextField
                onChange={(e) => {
                    setLoginPassword(e.target.value);
                }}
                sx={{}} id="password" label="Password" variant="outlined" />
            <Button variant="contained" onClick={login} >Submit</Button>
            <h4>Loggedin user</h4>
            {user?.email}

      
        </Box>

          <Box>
            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
              Don’t have an account?&nbsp;
            </Typography>
          </Box>
        </ContentStyle>
      </Container>
    </Box>
  );
}
