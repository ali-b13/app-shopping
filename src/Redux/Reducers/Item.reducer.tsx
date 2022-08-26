import { Types } from "../Types/Types";

const initialState:any[] =[]
export const ItemReducer =(state =initialState,{type,payload}:any)=>{
switch (type) {
  case Types.GET_ONE_PRODUCT:
    return  {
      product:payload
    }
    case Types.DELETE_ONE_PRODUCT:
      return {}

  default:
    return state
}
}
