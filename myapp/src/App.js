import React from 'react';
import styled from "styled-components";
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Audio from './components/Audio';

import Journal from './components/Journal';
// import { Route, Link } from './components/Route';
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";


export default function App() {
  return (
    <div className="App">
        <Navbar />
      <Routes>
    
      <Route path="/" element={<Homepage />} />
        <Route exact path="journal" element={<Journal />}/>
        <Route exact path="login" element={<Login />} />
        <Route exact path="register" element={<Register />} />
        <Route exact path="audio" element={<Audio />} />
        </Routes>
    </div>
  );
}

