import { GET_PRODUCT_REQUEST,GET_PRODUCT_SECCESS,GET_PRODUCT_FAIL } from "../constants/productConstants"
export const usersReducer = (state={
    users:[]
},action) =>
{
    switch(action.type)
    {
        case GET_PRODUCT_REQUEST:
            return {
                ...state,
                users:[]
            }
        case GET_PRODUCT_SECCESS:
            return{
                ...state,
                users:action.payload
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