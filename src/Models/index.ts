
import { ThunkAction } from "redux-thunk";
import { AnyAction } from "@reduxjs/toolkit";

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, {}, null, AnyAction>

export interface StoriesModel {
    id: number,
    stories: string | null,
    body: string | null,
}

export interface StoriesResponseModel {
    by: string,
    descendants: number,
    id: number,
    kids: number[],
    score: number
    time: number,
    title: string,
    type: string,
    url: string,

    // id: number,
    // deleted: boolean,
    // type: string,
    // by: string,
    // time: string,
    // text: string,
    // dead: boolean
    // parent: string,
    // poll:  number,
    // kids: number[],
    // url	: string,
    // score: number,
    // title: string,
    // parts: number[],
    // descendants: number,
}

export interface UsersResponseModel {
    id: string | undefined | string,
    created: number,
    karma: number,
    about: string,
    submitted: number[],
    delay: number,

}