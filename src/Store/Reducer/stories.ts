import { ActionTypes } from '../Action-Types';
import { Action } from '../Actions/index';
import { StoriesModel } from '../../Models/index'

type StoriesState = {
    isPending: boolean,
    stories: StoriesModel[],
    topStories: number[],
    error: string | null,
}

const initialState: StoriesState = {
    isPending: false,
    stories: [],
    error: null,
    topStories: [],
};

export const reducer = (state: StoriesState = initialState, action: Action) => {
    
    switch (action.type) {
        case ActionTypes.GET_STORIES_PENDING:
            return {
                ...state,
                isPending: true
            }
        case ActionTypes.GET_STORIES_SUCCESS:
            return {
                ...state,
                isPending: false,
                topStories: action.payload,
            }
        case ActionTypes.GET_STORIES_FAILED:
            return {
                ...state,
                isPending: false
            }
        default:
            return state;
    }
}
