import { Types } from "../Types/Types";
const initialState:any[] =[]
export const CategoryReducer =(state=initialState,{type,payload}:any)=>{
  switch (type) {
    case  Types.SET_CATEGORY_DATA: return {
      ...state ,
     category: payload
    }
    default:
      return state
  }
}