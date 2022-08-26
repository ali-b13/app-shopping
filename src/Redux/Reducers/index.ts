import {combineReducers}from 'redux'
import { CategoryReducer } from './CategoryReducer'
import { ItemReducer } from './Item.reducer'
import { productReducer } from './Products.Reducers'
import { CategoryProductReducer } from './CategoryProductReducer'
import { CartReducer } from './CartProductReducer'
import {IncrementReducerCart} from './IncrementCartProductReducser'

const index = combineReducers({
  all_products :productReducer,
  categories: CategoryReducer,
 categoryProduct:CategoryProductReducer,
  product:ItemReducer,
  cartNew :IncrementReducerCart,
 
})

export default index