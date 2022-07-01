// for typing/typescript

import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from '../Store/Reducer';

// custom use selecor hook
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
