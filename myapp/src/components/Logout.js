import React from 'react'
import {  signOut } from 'firebase/auth';
import {auth} from './firebase-config';

const Logout = () => {

    
    const logout = async () => {
        await signOut(auth);
    }


  return (
    <div>Logout</div>
  )
}

export default Logout