import { combineReducers } from 'redux';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import { ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";

// import board from '../modules/board';

const rootReducer = combineReducers({
    // board,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ThunkDispatch<RootState, any, UnknownAction>;

export const useAppSelector: TypedUseSelectorHook<RootState> = (selector) => useSelector(selector, shallowEqual);
export const useAppDispatch: () => AppDispatch = useDispatch;