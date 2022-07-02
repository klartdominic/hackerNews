import { combineReducers } from "redux";
import {reducer as stories} from "./stories";

const reducers = combineReducers({
    stories
})

export default reducers

export type RootState = ReturnType<typeof reducers>
