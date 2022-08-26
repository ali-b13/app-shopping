import { Types } from "../Types/Types"

export const setProducts =(products:any)=>{
  return {
    type:Types.SET_PRODUCTS,
    payload: products
  }
}

export const get_Category_data =(category:any)=>{
  return {
    type:Types.SET_CATEGORY_DATA,
    payload: category
  }
}

export const getItem=(product:any)=>{
 return {
  type:Types.GET_ONE_PRODUCT,
  payload:product
 }
}

export const get_Category_product =(categoryProduct:any)=>{
  return {
    type:Types.SET_CATEGORY_PRODUCT,
    payload: categoryProduct
  }
}

export const DeleteItem=()=>{
  return {
   type:Types.DELETE_ONE_PRODUCT,
   
  }
 }

 export const setCartProduct =(cart_products:any)=>{
  return {
    type:Types.SET_CART_PRODUCT,
    payload:cart_products
  }
 }


 export const incrementProduct =(increment_product:any)=>{
   return {
    type:Types.INCREMENT_ONE_CART_PRODUCT,
    payload:increment_product
   }
 }

 export const add_one=(item:any)=>{
  return {
    type:Types.ADD_ONE_MORE,
    payload:item
   }
 }
 export const remove_one=(item:any)=>{
 return {
  type:Types.REMOVE_ONE,
  payload:item
 }
}
