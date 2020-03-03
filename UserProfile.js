import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TextInput, Alert, ToastAndroid, ActivityIndicator, AsyncStorage} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationParams } from 'react-navigation';

export default class UserProfile extends Component{
  constructor(props) {
    super(props);
    this.state = {
      token: ''
    }
  }

  // DOES NOT RECEIVE TOKEN FROM LoginScreen, SAYS UNDEFINED AND IS NOT AN OBJECT WHEN IT IS BEING PASSED AS ONE
  storeToken = async (tokenPassed) => {
    try {
      await AsyncStorage.setItem('token', tokenPassed);
    } catch (error) {
      console.log(error)
    }
  };


  getToken = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token !== null) {
        return (token)
      }
    } catch (error) {
      console.log(error)
    }
  };

  gotoLogout = () => {
    const token = this.getToken();
    this.setState({ token: token })
    const displayToken = this.state.token
    const { navigate } = this.props.navigation;
    navigate("Logout");
  }
  render() {
    return(
      <View>
        <Text></Text>
        <Button title="Logout" onPress={this.gotoLogout}/>
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