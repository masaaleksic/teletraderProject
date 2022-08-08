import ActionTypes from "../../../constants/actionTypes";

const initialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') == 'true'
}
const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_IS_LOGGED_IN:
            return {
                ...state,
                isLoggedIn: true
            }
        default: return state;
    }
}

export default loginReducer;