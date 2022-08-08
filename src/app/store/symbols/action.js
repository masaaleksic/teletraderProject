import ActionTypes from "../../../constants/actionTypes";

export const setHomeSymbols = (homeSymbols) => ({
    type: ActionTypes.SET_HOME_SYMBOLS,
    payload: {
        homeSymbols: homeSymbols
    }
})

export const setFavoriteSymbols = (favoriteSymbols) => ({
    type: ActionTypes.SET_FAVORITE_SYMBLOS,
    payload: {
        favoriteSymbols: favoriteSymbols
    }
})

export const setSymbolsData = (symbolsData) => ({
    type: ActionTypes.SET_SYMBOLS_DATA,
    payload: {
        symbolsData: symbolsData
    }
})

export const setSelectedSymbol = (symbol) => ({
    type: ActionTypes.SET_SELECTED_SYMBOL,
    payload: {
        symbol: symbol
    }
})