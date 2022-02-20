import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import {auth} from './firebase-config';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

const Login = () => {
    // const [registerEmail, setRegisterEmail] = useState("");
    // const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const[user, setUser] = useState({});
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })
    const register = async () => {

    }

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

    const logout = async () => {

    }




    return (
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
    )
}

export default Login;