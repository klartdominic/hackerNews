import { Dispatch } from "redux"
import * as Actions from './Store/Action-Creators/index';

const getStories = () => {
    return (dispatch:Dispatch) => {
        dispatch(Actions.getStories())
    }
}