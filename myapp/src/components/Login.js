import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const Login = () => {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const register = async () => {

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
                    setLoginEmail(e.target.value);
                }}

                sx={{}} id="email" label="Email" variant="outlined" />
            <TextField
                onChange={(e) => {
                    setLoginPassword(e.target.value);
                }}
                sx={{}} id="password" label="Password" variant="outlined" />
            <Button variant="contained" >Submit</Button>
        </Box>
    )
}

export default Login;