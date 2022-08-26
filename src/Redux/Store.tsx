
import { legacy_createStore as createStore} from 'redux'
import index from './Reducers'
import {composeWithDevTools} from 'redux-devtools-extension'
export const store = createStore(index,composeWithDevTools())