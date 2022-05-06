import { GET_PRODUCT_REQUEST,GET_PRODUCT_SECCESS,GET_PRODUCT_FAIL } from "../constants/productConstants"
export const productReducer = (state={
    products:[]
},action) =>
{
    switch(action.type)
    {
        case GET_PRODUCT_REQUEST:
            return {
                ...state,
                products:[]
            }
        case GET_PRODUCT_SECCESS:
            return{
                ...state,
                products:action.payload
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