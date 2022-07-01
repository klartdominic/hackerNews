import { applyMiddleware,createStore, compose } from "redux";
import thunkMiddleWare from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./Reducer";
import { configureStore } from '@reduxjs/toolkit';

const middlewares = [thunkMiddleWare];
const middlewareEnhancers = applyMiddleware(...middlewares);
const enhancers = [middlewareEnhancers];
const composeEnhancers = composeWithDevTools(...enhancers);
const initialState = {};

export const store = createStore(reducers, initialState, composeEnhancers);
