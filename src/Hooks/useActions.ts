import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as  actionCreators from '../Store/Action-Creators'

// this is to have one point for all actions
//no need to import whole load or hooks in the component

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actionCreators, dispatch);
}