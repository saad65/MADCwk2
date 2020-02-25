import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TextInput, Alert, ToastAndroid, ActivityIndicator, AsyncStorage, KeyboardAvoidingView, TouchableOpacity, ToolbarAndroid} from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

export default class LoginScreen extends Component {
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
    var returnJson = '';
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
    // if (returnJson.includes("200") == true){
    //   ToastAndroid.show("Valid User", ToastAndroid.SHORT);
    // }
  }

  render(){
    const { navigate } = this.props.navigation;
    return(
      <View>

        <Text> </Text>

        <Text style={{color: '#4094f0', textAlign: 'center', fontSize: 25}}>Login</Text>

        <Text> </Text>

        <TextInput placeholder="Email" onChangeText={this.setEmail} underlineColorAndroid="transparent"></TextInput>

        <TextInput placeholder="Password" onChangeText={this.setPassword} underlineColorAndroid="transparent"></TextInput>

        <Button title="Submit data" onPress = {this.login}></Button>

        <Text> </Text>

        <Button title="Login to User Area" onPress={() => navigate("UserProfile")}/>

      </View>
    )
  }
}