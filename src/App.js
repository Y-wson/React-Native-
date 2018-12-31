/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {createStore,applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import {Provider} from "react-redux";

import reducer from "./reducer";
import Temp from "./container/Temp";

const store=createStore(reducer,applyMiddleware(thunk))
export default class App extends React.PureComponent{
  render() {
    return (
        (<Provider store={store}>
          <Temp/>
        </Provider>)
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
