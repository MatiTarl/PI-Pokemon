import {Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/home';
import Login from './components/Login/login';
import Detail from './components/Detail/detail';
import Form from './components/Forms/form';
import axios from "axios"
import React, { useEffect } from 'react';

function App() {

  return (
    <div className='App' >
      <Routes>
        <Route path='/' element={<Login></Login>} />
        <Route path='/home' element={<Home></Home>} />
        <Route path='/detail/:id' element={<Detail></Detail>} />
        <Route path='/form' element={<Form></Form>} />
      </Routes>
    </div> 
  );
}

export default App;
