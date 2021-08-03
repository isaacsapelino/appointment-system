import * as actions from './types';
import axios from 'axios';

export const tokenSet = getState => {
    const token = getState().authReducer.token;

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
}