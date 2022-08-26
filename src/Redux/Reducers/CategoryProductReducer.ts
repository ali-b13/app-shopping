import { Types } from "../Types/Types";
const initialState:any[] =[]
export const CategoryProductReducer =(state=initialState,{type,payload}:any)=>{
  switch (type) {
    case  Types.SET_CATEGORY_PRODUCT: return {
      ...state ,
     category: payload
    }
    default:
      return state
  }
}