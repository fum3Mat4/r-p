/*
	Store associated with the slice stockStack to keep in memory list of stocks and stock
	features
*/

import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import stockStack from './stockStack'

const reducer = combineReducers({
  stockStack,
})

const store = configureStore({
  reducer,
})

export default store;