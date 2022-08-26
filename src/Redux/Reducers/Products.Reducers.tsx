
import { Types } from "../Types/Types";

 const initialState:any[]=[]
 export const productReducer =(state=initialState,{type,payload}:any)=>{
  switch (type) {
  case Types.SET_PRODUCTS:
    return {
     ...state,
     products:payload
    }
  default:
    return state;
 }
 }
