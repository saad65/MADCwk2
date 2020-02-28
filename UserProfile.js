import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TextInput, Alert, ToastAndroid, ActivityIndicator, AsyncStorage} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import GetChits from "./GetChits.js";


export default class UserProfile extends Component{
  // UNFINISHED, NO FUNCTIONALITY YET
  render() {
    return(
      <View>
        <Button title="Logout" onPress ={() => ToastAndroid.show("Pressed", ToastAndroid.SHORT)}/>
        <Text></Text>
        <Text></Text>
        <Button title="Update Profile" onPress ={() => ToastAndroid.show("Pressed", ToastAndroid.SHORT)}/>
        <Text></Text>
        <Button title="Create Chit" onPress ={() => ToastAndroid.show("Pressed", ToastAndroid.SHORT)}/>
        <Text></Text>
        <Button title="Follow a User" onPress ={() => ToastAndroid.show("Pressed", ToastAndroid.SHORT)}/>
        <Text></Text>
      </View>
    )
  }
}