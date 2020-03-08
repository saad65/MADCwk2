import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TextInput, Alert, ToastAndroid, ActivityIndicator, AsyncStorage, KeyboardAvoidingView, TouchableOpacity, ToolbarAndroid} from 'react-native';
import {NavigationContainer, StackActions, CommonActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationActions, withNavigation } from 'react-navigation';

export default class FollowUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
        token: '',
        user_id: -1,
    };
  }
  
  getToken = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token !== null) {
        console.log("Token in FollowUser getToken is: " + token)
        return (token)
      }
    }
    catch (error) {
      console.log(error)
    }
  };

  waitTimer = async () => {
    var token = await this.getToken();
    this.setState({token: token})
    this.followUser();
  }

  followUser = () => {
    const displayToken = this.state.token
    const id = this.state.user_id
    const { navigate } = this.props.navigation;
    fetch('http://10.0.2.2:3333/api/v0.0.5/user/' + id + '/follow',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Authorization': "" + displayToken
      },
    })
    .then((data) => {
      ToastAndroid.show("User followed", ToastAndroid.SHORT)
    });
  }

    render() {
        return(
        <View>
            <Text style={{color: '#4094f0', textAlign: 'center', fontSize: 25}}>Follow user</Text>
            <Text></Text>
            <TextInput placeholder="User ID of User to follow" onChangeText={(user_id) => this.setState({user_id: parseInt(user_id)})} underlineColorAndroid="transparent"></TextInput>
            <Button title="Follow user" onPress={this.waitTimer}/>
        </View>
        )
    }
}