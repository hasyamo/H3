import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { store } from './redux';
import Home from './home'
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <Home />
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
