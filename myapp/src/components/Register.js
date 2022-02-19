import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import {auth} from './firebase-config';
const Register = () => {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    // const [loginEmail, setLoginEmail] = useState("");
    // const [loginPassword, setLoginPassword] = useState("");

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
            {user.email}
        </Box>
    )
}

export default Register;