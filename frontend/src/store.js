import {applyMiddleware, combineReducers, compose, createStore} from 'redux'

import thunk from'redux-thunk'

import { 
    productDetailsReducer, 
    productListReducer, 
} from './reducers/productReducers'

//INITIAL STATE and REDUCER
const initialState = {}

const reducer = combineReducers({
    //this object introduces reducers to the redux store
    productList: productListReducer,
    productDetails: productDetailsReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

//CREATE THE STORE
const store = createStore(
    reducer, 
    initialState, 
    composeEnhancer(applyMiddleware(thunk))
)

export default store