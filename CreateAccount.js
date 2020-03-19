import React, { Component } from 'react';
import { Text, View, Button, TextInput, ToastAndroid} from 'react-native';

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

  setGName = (given_name) => {
    this.state.given_name = given_name
  }
  setFName = (family_name) => {
    this.state.family_name = family_name
  }
  setEmail = (email) => {
    this.state.email = email
  }
  setPassword = (password) => {
    this.state.password = password
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

        <TextInput placeholder="First Name" onChangeText={(given_name) => this.setGName(given_name)} underlineColorAndroid="transparent"></TextInput>

        <TextInput placeholder="Surname" onChangeText={(family_name) => this.setFName(family_name)} underlineColorAndroid="transparent"></TextInput>

        <TextInput placeholder="Email" onChangeText={(email) => this.setEmail(email)} underlineColorAndroid="transparent"></TextInput>

        <TextInput placeholder="Password" onChangeText={(password) => this.setPassword(password)} underlineColorAndroid="transparent"></TextInput>
        
        <Button title="Create Account" onPress={this.createAccount}/>

      </View>

    )
  }
}