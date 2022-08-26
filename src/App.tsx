import React, { useEffect, useState } from 'react';
import './App.css';
 import axios from 'axios'
import {Typography,Button,Stack,IconButton, ButtonGroup} from '@mui/material'
import {Edit,Delete,Send} from '@mui/icons-material'
import Cards from './components/Cards';
import { productReducer } from './Redux/Reducers/Products.Reducers';
import {BrowserRouter as Router ,Routes,Route ,Link}from 'react-router-dom'
import Item from './components/Item';
import Cart from './components/Cart';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Profile from 'components/Profile';

function App() {
 
  return (
    <div className="App">
    
   <Router>
  
    <Routes>
    <Route path='/register' element={<SignUp/>}></Route>
      <Route path='/' element={<Login/>}></Route>
   <Route path='/products' element={<Cards/>}> </Route>
   <Route path='/product/:id' element={<Item/>} ></Route>
   <Route path='/cart' element={<Cart/>} ></Route>
   <Route path='/profile' element={<Profile/>}> </Route>
   
    </Routes>
   
   
   </Router>
    </div>
  );
}

export default App;
