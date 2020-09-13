import {createStore, combineReducers} from 'redux';
import items from './reducers/itemReducer'
import wallet from './reducers/walletReducer'
import Errors from './reducers/errorsReducers'
import chooseItem from './reducers/chooseItemReducer'
let combine = combineReducers({
   items,
   wallet,
   Errors,
   chooseItem
})

let store = createStore(combine)

export default store