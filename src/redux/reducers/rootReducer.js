import { combineReducers } from "redux"; // объединяет все reducer-ы
import  likesReducer  from "./likesReducer";

const rootReducer = combineReducers({
    likesReducer
})

export default rootReducer;