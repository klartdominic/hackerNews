import { ActionTypes } from '../Action-Types';
import { Action } from '../Actions/index';

export interface Stories {
    id: number,
    stories: string | null,
    body: string | null,
}

type StoriesState = {
    isPending: boolean,
    stories: Stories[],
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
