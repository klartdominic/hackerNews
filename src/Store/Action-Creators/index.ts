import Http from "../../Utils/Http";
import { Dispatch } from "redux";
import { ActionTypes } from "../Action-Types";
import { Action } from "../Actions";

const isSuccess: number = 200;

export const getTopNews = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({ type: ActionTypes.GET_STORIES_PENDING});

        return Http.get<number[]>('topstories.json').then(response => {
            console.log('response', response);

            if(response.status === isSuccess){
                dispatch({type: ActionTypes.GET_STORIES_SUCCESS,
                    payload: response.data
                })
            } else {
                dispatch({type: ActionTypes.GET_STORIES_FAILED,
                payload: response.data})
            }
        })
    }
}
