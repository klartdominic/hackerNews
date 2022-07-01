import { Types } from '../Action-Types';
import { Action } from '../Actions/index';

interface Stories {
    id: number,
    stories: string,
    body: string,
}

type StoriesState = {
    stories: Stories[];
}

const initialState: StoriesState = {
    stories: []
};

const reducer = (state: StoriesState = initialState, action: Action) => {
    switch (action.type) {
        case Types.GET_STORIES:
            return {
                ...state
            }
        default:
            return state;
    }
}

export default reducer