import { ActionTypes } from '../Action-Types';
import { Action } from '../Actions/index';
import { StoriesResponseModel, UsersResponseModel } from '../../Models/index'

type StoriesState = {
    isPending: boolean,
    stories: StoriesResponseModel[],
    topStories: Number[] | Object[] | any,
    error: string | null | Object,
    users: UsersResponseModel[],
    isDone: boolean,
    isItemsDone: boolean,
    isUsersDone: boolean
}

const initialState: StoriesState = {
    isPending: false,
    stories: [],
    error: null,
    topStories: [],
    users: [],
    isDone: false,
    isItemsDone: false,
    isUsersDone: false,
};

export const reducer = (state: StoriesState = initialState, action: Action): StoriesState => {
    
    switch (action.type) {
        case ActionTypes.GET_STORIES_PENDING:
            return {
                ...state,
                isPending: true,
                isDone: false,
                stories: [],
                topStories: [],
                users: [] ,
                isItemsDone: false,
                isUsersDone: false,
            }
        case ActionTypes.GET_STORIES_SUCCESS:
            return {
                ...state,
                isPending: false,
                topStories: action.payload,
                isDone: true,
            }
        case ActionTypes.GET_STORIES_FAILED:
            return {
                ...state,
                isPending: false,
                error: action.payload
            }
        case ActionTypes.GET_ITEM_PENDING:
            return {
                ...state,
                isPending: true,
                isItemsDone: false
            }
        case ActionTypes.GET_ITEM_SUCCESS:
            return {
                ...state,
                isPending: false,
                stories: [...state.stories, action.payload],
            }
        case ActionTypes.GET_ITEM_FAILED:
            return {
                ...state,
                isPending: false,
                error: action.payload,
            }
        case ActionTypes.GET_ITEM_DONE:
            return {
                ...state,
                isItemsDone: true,
            }
        case ActionTypes.GET_USER_PENDING:
            return {
                ...state,
                isUsersDone: false,
                isPending: true,
            }
        case ActionTypes.GET_USER_SUCCESS:
            return {
                ...state,
                isPending: false,
                users: [...state.users, action.payload]
            }
        case ActionTypes.GET_USER_FAILED:
            return {
                ...state,
                isPending: false,
                error: action.payload
            }
        case ActionTypes.GET_USER_DONE:
            return {
                ...state,
                isUsersDone: true,
            }
        default:
            return state;
    }
}
