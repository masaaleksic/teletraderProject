import { combineReducers } from "redux";
import loginReducer from "./store/login/reducers";
import symbolsReducer from "./store/symbols/reducers";

const rootReducers = combineReducers({
    symbols: symbolsReducer,
    login: loginReducer
});

export default rootReducers;
