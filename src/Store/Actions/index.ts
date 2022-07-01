
import { ActionTypes } from '../Action-Types/index'

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

export type Action = GetStoriesPendingAction | 
    GetStoriesSuccessAction | 
    GetStoriesFailedAction;