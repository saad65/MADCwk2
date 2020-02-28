import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TextInput, Alert, ToastAndroid, ActivityIndicator, AsyncStorage, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

export default class CreateAccount extends Component {
  // FULLY WORKING CREATE ACCOUNT W/TOAST NOTIFICATION
  constructor(props){
    super(props);
    this.state = {
      given_name: '',
      family_name: '',
      email: '',
      password: '',
    };
  }

  setGName = (givenName) => {
    this.state.given_name = givenName
  }
  setFName = (familyName) => {
    this.state.family_name = familyName
  }
  setEmail = (emailPassed) => {
    this.state.email = emailPassed
  }
  setPassword = (passwordPassed) => {
    this.state.password = passwordPassed
  }

  createAccount = () => {
    return fetch("http://10.0.2.2:3333/api/v0.0.5/user",
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        given_name: this.state.given_name,
        family_name: this.state.family_name,
        email: this.state.email,
        password: this.state.password
      })
    })
    .then((response) => {
      ToastAndroid.show('Account Created', ToastAndroid.SHORT);
      console.log(response)
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render(){
    return(

      <View>

        <Text> </Text>

        <Text style={{color: '#4094f0', textAlign: 'center', fontSize: 25}}>Create an Account</Text>

        <Text> </Text>

        <TextInput placeholder="First Name" onChangeText={(GName) => this.setGName(GName)} underlineColorAndroid="transparent"></TextInput>

        <TextInput placeholder="Surname" onChangeText={(FName) => this.setFName(FName)} underlineColorAndroid="transparent"></TextInput>

        <TextInput placeholder="Email" onChangeText={(email) => this.setEmail(email)} underlineColorAndroid="transparent"></TextInput>

        <TextInput placeholder="Password" onChangeText={(password) => this.setPassword(password)} underlineColorAndroid="transparent"></TextInput>
        
        <Button title="Create Account" onPress={this.createAccount}/>

      </View>

    )
  }
}