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

  gotoCreateChit = () => {
    const token = this.getToken();
    this.setState({ token: token })
    const { navigate } = this.props.navigation;
    navigate("CreateChit");
  }

  gotoFollowUser = () => {
    const token = this.getToken();
    this.setState({ token: token })
    const { navigate } = this.props.navigation;
    navigate("FollowUser");
  }
  gotounfollowUser = () => {
    const token = this.getToken();
    this.setState({ token: token })
    const { navigate } = this.props.navigation;
    navigate("UnfollowUser");
  }

  gotoUpdateAccount = () => {
    const token = this.getToken();
    this.setState({ token: token })
    const { navigate } = this.props.navigation;
    navigate("UpdateAccount");
  }
  gotoUpdatePhoto = () => {
    const token = this.getToken();
    this.setState({ token: token })
    const { navigate } = this.props.navigation;
    navigate("UpdateUserPhoto");
  }

  render() {
    return(
      <View>
        <Text></Text>
        <Button title="Logout" onPress={this.gotoLogout}/>
        <Text></Text>
        <Text></Text>
        <Button title="Update Profile" onPress ={this.gotoUpdateAccount}/>
        <Text></Text>
        <Button title="Update Profile Photo" onPress ={this.gotoUpdatePhoto}/>
        <Text></Text>
        <Button title="Create Chit" onPress ={this.gotoCreateChit}/>
        <Text></Text>
        <Button title="Follow a User" onPress ={this.gotoFollowUser}/>
        <Text></Text>
        <Button title="Unfollow a User" onPress ={this.gotounfollowUser}/>
        <Text></Text>
      </View>
    )
  }
}