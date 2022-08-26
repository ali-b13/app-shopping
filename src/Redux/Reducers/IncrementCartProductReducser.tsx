import { Types } from "../Types/Types";

// export const incrementProductReducer=(state ={ product:[] ,qty:1} ,{type,payload}:never)=>{
//   switch (type) {
//     case Types.INCREMENT_ONE_CART_PRODUCT:
     
//       (state.product.indexOf(payload)!=-1)? state : {

//       }
     
//     default:
//       return state
//   }
// }

const initialState: any= {cart: [],qty:1 }
export  const IncrementReducerCart=(state =initialState, {type,payload}:any)=> {

 let comingProduct =payload
  switch (type) {
     case Types.INCREMENT_ONE_CART_PRODUCT:
    
{
  if (state.cart.findIndex((product:any) => product.id === comingProduct.id) !== -1) {
    const cart = state.cart.reduce((cartAcc:any, product:any) => {
      console.log('this is product ',product)
      console.log('this is cartAcc ',cartAcc)
      if (product.id === comingProduct.id) {
        cartAcc.push({ ...product, qty: product.qty+1 }) // Increment qty
      } else {
        cartAcc.push(product)
      }
  
      return cartAcc
    }, [])
    console.log('this red cart',cart)
  
    return { ...state, cart }
  }
  return { ...state, cart: [...state.cart, { ...comingProduct, qty: 1}] }
} 
break;
case Types.ADD_ONE_MORE:
  {
    if (state.cart.findIndex((product:any) => product.id === comingProduct.id) !== -1) {
      const cart = state.cart.reduce((cartAcc:any, product:any) => {
        console.log('this is product ',product)
        console.log('this is cartAcc ',cartAcc)
        if (product.id === comingProduct.id) {
          cartAcc.push({ ...product, qty: product.qty+1 }) // Increment qty
        } else {
          cartAcc.push(product)
        }
    
        return cartAcc
      }, [])
      console.log('this red cart',cart)
    
      return { ...state, cart }
    }
    return { ...state, cart: [...state.cart, { ...comingProduct, qty: 1}] }
  } break;
  case Types.REMOVE_ONE :
    {
      if (comingProduct.qty <2){
        return {...state,cart:state.cart.filter(({id}:any) => id !== comingProduct.id)};
      }
      if (state.cart.findIndex((product:any) => product.id === comingProduct.id ) !== -1) {
       
        const cart = state.cart.reduce((cartAcc:any, product:any) => {
     
          if (product.id === comingProduct.id && product.qty >=1) {
            cartAcc.push({ ...product, qty: product.qty-1 }) // Increment qty
          }


         else {
            cartAcc.push(product)
          }
      
          return cartAcc
        }, [])
        console.log('this red cart',cart)
      
        return { ...state, cart }
      }
      return { ...state, cart: [...state.cart, { ...comingProduct, qty: 0}] }
    }




default : return state
}
  

  }



  //        if (state.cart.findIndex((product:any)=> product.id == product_id) !== -1) {
         
  //        }
             
  //      default:
  //    }
  // return state;




// case ADD_TO_CART: {
//   const productId = payload.product.id

//   if (state.cart.findIndex(product => product.id === productId) !== -1) {
//     const cart = state.cart.reduce((cartAcc, product) => {
//       if (product.id === productId) {
//         cartAcc.push({ ...product, qty: product.qty++ }) // Increment qty
//       } else {
//         cartAcc.push(product)
//       }

//       return cartAcc
//     }, [])

//     return { ...state, cart }
//   }

//   return { ...state, cart: [...state.cart, { ...payload.product, qty: 0 }] }
// }


























// if (state.cart.findIndex((product:any) => product.id === payload.id) !== -1) {
//   const cart = state.cart.reduce((cartAcc:any, product:any) => {
//     console.log('this is product ',product)
//     console.log('this is cartAcc ',cartAcc)
//     if (product.id === payload.id) {
//       cartAcc.push({ ...product, qty: product.qty++ }) // Increment qty
//     } else {
//       cartAcc.push(product)
//     }

//     return cartAcc
//   }, [])
//   console.log('this red cart',cart)

//   return { ...state, cart }
// }

// return { ...state, cart: [...state.cart, { ...payload, qty: state.qty }] }

// default : return state
// }