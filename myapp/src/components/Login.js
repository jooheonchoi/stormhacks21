import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import {auth} from './firebase-config';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import LoginForm from './LoginForm';
const Login = () => {


    return (
        <>


<LoginForm />
        </>

    )
}

export default Login;