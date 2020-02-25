import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TextInput, Alert, ToastAndroid, ActivityIndicator, AsyncStorage} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from "./LoginScreen.js"
import CreateAccountScreen from "./CreateAccount.js"

import AppNavigator from "./AppNavigator.js"

export default class App extends Component {
  render() {
    return(
      <AppNavigator/>
    )
  }
}
