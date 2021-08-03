import * as actions from '../actions/types';
import { combineReducers } from 'redux';

const initialState = {

    msg: {},
    status: null,

    user: {},
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    isLoading: false,
};

const msgReducer = (state = initialState, action) => {
    switch (action.type) {
        case action.CREATE_MSG: {
            return (state = action.payload);
        }
        default:
            return state;
    }
}

export const allReducers = combineReducers({
    msgReducer,
})