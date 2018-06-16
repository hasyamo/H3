import React, {Component} from 'react';
import {
    applyMiddleware,
    combineReducers,
    createStore,
} from 'redux';

export const activateH3 = h3 => ({
    type: 'ACTIVATE_H3',
    h3,
});

export const closeH3 = () => ({
    type: 'CLOSE_H3',
});

export const h3 = (state = {}, action) => {
    switch (action.type) {
        case 'ACTIVATE_H3':
            return action.h3;
        case 'CLOSE_H3':
            return {};
        default:
            return state;
    }
};
export const reducers = combineReducers({
    h3,
});

export function configureStore(initialState = {}) {
    const store = createStore(reducers, initialState);
    return store;
};

export const store = configureStore();

