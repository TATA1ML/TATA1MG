import { GET_PRODUCT_REQUEST,GET_PRODUCT_SECCESS,GET_PRODUCT_FAIL } from "../constants/productConstants"
export const productFormReducer = (state={
    forms:[]
},action) =>
{
    switch(action.type)
    {
        case GET_PRODUCT_REQUEST:
            return {
                ...state,
                forms:[]
            }
        case GET_PRODUCT_SECCESS:
            return{
                ...state,
                forms:action.payload
            }
        case GET_PRODUCT_FAIL:
           return {
                ...state,
                error:action.payload
            }
        default:
            return state
    }
}