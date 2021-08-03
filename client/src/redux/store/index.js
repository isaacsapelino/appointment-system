import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { allReducers } from '../reducers';

const initialState = {
    msg: {},
    status: null,

    user: {},
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    isLoading: false,
};
const middleware = [thunk];
const store = createStore(allReducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
