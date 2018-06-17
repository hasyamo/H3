import React, {Component} from 'react';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import rootReducer from './modules/index.js';
import AppNavigator from './AppNavigator.js';

/*
let middlewares = [];
const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares),
);
*/

function configureStore() {
    let middlewares = [];
    return createStore(
        rootReducer,
        applyMiddleware(...middlewares),
    );
}

export default class App extends React.Component {
    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
    }
    state = {
        store: configureStore(),
    };

    render() {
        return (
            <Provider store={this.state.store}>
                <AppNavigator />
            </Provider>
        );
  }
}

