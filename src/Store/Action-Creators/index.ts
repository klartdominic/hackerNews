import Http from "../../Utils/Http";
import { Dispatch } from "redux";
import { ActionTypes } from "../Action-Types";
import { Action } from "../Actions";
import { StoriesResponseModel, UsersResponseModel } from '../../Models/index'

const isSuccess: number = 200;

export const getTopNews = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({ type: ActionTypes.GET_STORIES_PENDING});

        return Http.get<number[]>('topstories.json').then(response => {
            if(response.status === isSuccess){
                let tempData:number[] = response.data;
                const shuffled = [...tempData].sort(()=> 0.5 - Math.random()) ;
                const randomStories = shuffled.slice(0, 10);
                
                return dispatch({
                    type: ActionTypes.GET_STORIES_SUCCESS,
                    payload: randomStories
                })
            }
            return dispatch({
                type: ActionTypes.GET_STORIES_FAILED,
                payload: response.data
            })
        }).catch((error) => {
            return dispatch({
                type: ActionTypes.GET_STORIES_FAILED,
                payload: error
            })
        })
    }
}

export const getItems = (data: number[]) => {
    if(!data.length) return;
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.GET_ITEM_PENDING
        })
        data.map((id) => {
            return Http.get<StoriesResponseModel>(`item/${id}.json`).then(
                (response)=>{
                    if(response.status === isSuccess){
                        console.log("getItems", response.data)
                        return dispatch({
                            type: ActionTypes.GET_ITEM_SUCCESS,
                            payload: response?.data
                        })
                    }

                    return dispatch({
                        type: ActionTypes.GET_ITEM_FAILED,
                        payload: response.data
                    })
                }
            ).catch((error) => {
                return dispatch({
                    type: ActionTypes.GET_ITEM_FAILED,
                    payload: error
                })
            })
        })
    }
}
export const getUsers = (items:StoriesResponseModel[]) => {
    console.log('getUsers',items);
    if(!items.length) return;

    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.GET_USER_PENDING
        })
        items.map(item => {
            return Http.get<UsersResponseModel>(`user/${item.by}.json`).then(
                (response)=>{
                    if(response.status === isSuccess){
                        console.log('response?.data', response.data)
                        return dispatch({
                            type: ActionTypes.GET_USER_SUCCESS,
                            payload: response?.data
                        })
                    }

                    return dispatch({
                        type: ActionTypes.GET_USER_FAILED,
                        payload: response.data
                    })
                }
            ).catch((error) => {
                return dispatch({
                    type: ActionTypes.GET_USER_FAILED,
                    payload: error
                })
            })
        })

        dispatch({
            type: ActionTypes.GET_USER_DONE
        })
    }
}