//actions are functions that need to be exported
// function that returns another function (async) that accepts dispatch as a parameter, which is filled by redux-thunk later

import Axios from "axios"
import { 
    PRODUCT_DETAILS_FAIL, 
    PRODUCT_DETAILS_REQUEST, 
    PRODUCT_DETAILS_SUCCESS, 
    PRODUCT_LIST_FAIL, 
    PRODUCT_LIST_REQUEST, 
    PRODUCT_LIST_SUCCESS 
} from "../constants/productConstants"

export const listProducts = ()=> async(dispatch)=> {
    dispatch({
        type: PRODUCT_LIST_REQUEST
    })
    try {
        const {data} = await Axios.get('/api/products')
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })
    }
    catch(err) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: err.message
        })
    }
}


export const detailsProduct = (productId)=> async(dispatch)=> {
    console.log(`productId-> ${productId}`)
    dispatch({
        type: PRODUCT_DETAILS_REQUEST,
        payload: productId
    })
    try {
        console.log("detailsProduct Action: begin to try")
        const {data} = await Axios.get(`api/product/${productId}`)
        console.log(`try get api/product/productId-> ${data}`)
        dispatch({ 
            type: PRODUCT_DETAILS_SUCCESS, 
            payload: data
        })
    }
    catch(err) {
        console.log(`err-> ${err}`)
        dispatch({ 
            type: PRODUCT_DETAILS_FAIL, 
            payload: 
                err.response && err.response.data.message 
                    ? err.response.data.message 
                    : err.message
        })
    }
}