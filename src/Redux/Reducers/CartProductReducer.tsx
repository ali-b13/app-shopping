import { Types } from "../Types/Types";
import {createSlice} from '@reduxjs/toolkit'
const initialState:any={
  items:[]
}

export const CartReducer =(state=initialState,{type,payload}:any)=>{
  let cart= state.items
  switch (type) {
  case Types.SET_CART_PRODUCT:

   cart.push(payload)
      return {
       ...state ,
       cart:cart
       
        
      }
   
  
    
   
 
  default:
    return state
 }
}