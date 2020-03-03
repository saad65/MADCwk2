import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TextInput, Alert, ToastAndroid, ActivityIndicator, AsyncStorage} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './LoginScreen';

export default class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: ''
    }
  }

  setToken = (tokenPassed) => {
    this.state.token = tokenPassed;
  }

  waitTimer = async () => {
    var token = await this.getToken();
    this.setState({token: token})
    setTimeout(() => this.logout(), 1000);
  }
  
  getToken = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token !== null) {
        console.log("Token received Logout getToken is " + token);
        return (token)
      }
    } catch (error) {
      console.log(error)
    }
  };
  logout = () => {
    const displayToken = this.state.token
    const { navigate } = this.props.navigation;
    fetch('http://10.0.2.2:3333/api/v0.0.5/logout',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Authorization': "" + displayToken
      }
    })
    .then((data) => {
      navigate("Welcome")
    });
  }
    render () {
        return(
          <View>
            <Text style={{color: '#4094f0', textAlign: 'center', fontSize: 25}}>Logging out...</Text>
            <Text></Text>
            <Button title="Return to Welcome" onPress={this.waitTimer}></Button>
          </View>
        )
    }
}