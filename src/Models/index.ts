
import { ThunkAction } from "redux-thunk";
import { AnyAction } from "@reduxjs/toolkit";

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, {}, null, AnyAction>