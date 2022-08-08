import ActionTypes from "../../../constants/actionTypes";

export const setIsLoggedIn = (value) => ({
    type: ActionTypes.SET_IS_LOGGED_IN,
    payload: {
        isLoggedIn: value
    }
})