
import { ThunkAction } from "redux-thunk";
import { AnyAction } from "@reduxjs/toolkit";

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, {}, null, AnyAction>

export interface StoriesModel {
    id: number,
    stories: string | null,
    body: string | null,
}