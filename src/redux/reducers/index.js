import { combineReducers } from "redux";
import { TakeTestReducer } from './Taketest'

const mainReducer = combineReducers({
    TakeTestReducer: TakeTestReducer,
})

export default mainReducer