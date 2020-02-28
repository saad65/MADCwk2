import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TextInput, Alert, ToastAndroid, ActivityIndicator, AsyncStorage, KeyboardAvoidingView, TouchableOpacity, ToolbarAndroid} from 'react-native';
import {NavigationContainer, StackActions, CommonActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationActions } from 'react-navigation';
import UserProfile from './UserProfile';

export default class LoginScreen extends Component {
  // LOGIN POST REQ WORKS BUT NO VERIFICATION, USER GOES TO PROFILE AREA W/O CHECKING FOR AUTH TOKEN
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }

  setEmail = (emailPassed) => {
    this.state.email = emailPassed
  }
  setPassword = (passwordPassed) => {
    this.state.password = passwordPassed
  }

  login = () => {
    const { navigate } = this.props.navigation;
    fetch('http://10.0.2.2:3333/api/v0.0.5/login',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
    .then(r =>  r.json().then(data => ({status: r.status, body: data})))
    .then(obj => console.log(obj));
    navigate("UserProfile");
  }

  render(){
    const { navigate } = this.props.navigation;
    return(
      <View>

        <Text> </Text>

        <Text style={{color: '#4094f0', textAlign: 'center', fontSize: 25}}>Login</Text>

        <Text> </Text>

        <TextInput placeholder="Email" onChangeText={(email) => this.setEmail(email)} underlineColorAndroid="transparent"></TextInput>

        <TextInput placeholder="Password" onChangeText={(password) => this.setPassword(password)} underlineColorAndroid="transparent"></TextInput>

        <Text> </Text>

        <Button title="Login to User Area" onPress={this.login}/>

      </View>
    )
  }


}