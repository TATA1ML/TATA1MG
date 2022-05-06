import {createStore,combineReducers,applyMiddleware } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk'
import {productReducer} from "./redux/reducer/productReducer"
import {brandsReducer} from "./redux/reducer/brandsReducer"
import {productFormReducer} from "./redux/reducer/productformReducer"
import {usersReducer} from "./redux/reducer/usesReducer"

const rootReducer = combineReducers({
    productReducer,
    brandsReducer,
    productFormReducer,
    usersReducer

})
const intialState = {
    products:[],
    brands:[],
    users:[],
    forms:[]
}
const middleware = [thunk]
const store =createStore(rootReducer,intialState,composeWithDevTools(applyMiddleware(...middleware)))
export default store