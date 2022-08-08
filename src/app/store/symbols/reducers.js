import ActionTypes from "../../../constants/actionTypes";

const initialState = {
    homeSymbols: [],
    favoriteSymbols: [],
    symbolsData: [],
    selectedSymbol: ""
}
const symbolsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_HOME_SYMBOLS:
            return {
                ...state,
                homeSymbols: action.payload.homeSymbols
            }
        case ActionTypes.SET_FAVORITE_SYMBLOS:
            return {
                ...state,
                favoriteSymbols: action.payload.favoriteSymbols
            }
        case ActionTypes.SET_SYMBOLS_DATA:
            return {
                ...state,
                symbolsData: action.payload.symbolsData
            }
        case ActionTypes.SET_SELECTED_SYMBOL:
            return {
                ...state,
                selectedSymbol: action.payload.symbol
            }
        default: return state;
    }
}

export default symbolsReducer;