/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

var LoginView = require("./LoginView.js")
export default class QQLoginReactNativeDemo extends Component {
  render() {
    return (
        <LoginView />
    );
  }
}

AppRegistry.registerComponent('QQLoginReactNativeDemo', () => QQLoginReactNativeDemo);
