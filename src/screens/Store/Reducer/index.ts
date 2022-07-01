import { combineReducers } from "redux";
import stories  from './stories';

const reducers = combineReducers({
    bank: stories
})

export default reducers