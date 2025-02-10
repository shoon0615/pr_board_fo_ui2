import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './modules';
// import logger from "redux-logger";

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export default store;