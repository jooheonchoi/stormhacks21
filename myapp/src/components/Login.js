import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const Login = () => {
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
        <TextField sx={{ }} id="email" label="Email" variant="outlined" />
        <TextField sx={{ }} id="password" label="Password" variant="outlined" />
        <Button variant="contained" >Submit</Button>
        </Box>
  )
}

export default Login;