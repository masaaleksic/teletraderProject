import { createLogger } from "redux-logger";
import reducers from './rootReducers';
import { appMiddleware } from "./store/middlewares/appMiddlewares";
import {configureStore} from "@reduxjs/toolkit";

const loggerMiddleware = createLogger({
    predicate: () => process.env.NODE_ENV === 'development',
});

const store = configureStore({
    reducer: reducers,
    middleware: [loggerMiddleware, ...appMiddleware]
})

export default store;
