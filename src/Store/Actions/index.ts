
import { ActionTypes } from '../Action-Types/index'
import { UsersResponseModel, StoriesResponseModel } from '../../Models/index'

interface GetStoriesPendingAction {
    type: ActionTypes.GET_STORIES_PENDING,
}

interface GetStoriesSuccessAction {
    type: ActionTypes.GET_STORIES_SUCCESS,
    payload: Object
}

interface GetStoriesFailedAction {
    type: ActionTypes.GET_STORIES_FAILED,
    payload: Object
}

interface GetItemsPendingAction {
    type: ActionTypes.GET_ITEM_PENDING,
}

interface GetItemsSuccessAction {
    type: ActionTypes.GET_ITEM_SUCCESS,
    payload: StoriesResponseModel
}

interface getItemsFailedAction{
    type: ActionTypes.GET_ITEM_FAILED,
    payload: Object
}

interface getItemsDoneAction {
    type: ActionTypes.GET_ITEM_DONE
}

interface GetUsersPendingAction {
    type: ActionTypes.GET_USER_PENDING,
}

interface GetUsersSuccessAction {
    type: ActionTypes.GET_USER_SUCCESS,
    payload: UsersResponseModel 
}

interface getUsersFailedAction{
    type: ActionTypes.GET_USER_FAILED,
    payload: Object
}

interface getUsersDoneAction {
    type: ActionTypes.GET_USER_DONE
}

export type Action = GetStoriesPendingAction | 
    GetStoriesSuccessAction | 
    GetStoriesFailedAction | 
    GetItemsPendingAction | 
    GetItemsSuccessAction | 
    getItemsFailedAction | 
    GetUsersPendingAction | 
    GetUsersSuccessAction | 
    getUsersFailedAction | 
    getItemsDoneAction | 
    getUsersDoneAction;