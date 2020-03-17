import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TextInput, Alert, ToastAndroid, ActivityIndicator, AsyncStorage, KeyboardAvoidingView, TouchableOpacity, ToolbarAndroid} from 'react-native';
import {NavigationContainer, StackActions, CommonActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationActions, withNavigation } from 'react-navigation';

export default class CreateChit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      chit_id: -1,
      timestamp: '',
      chit_content: '',
      location: {
        longitude: -1,
        latitude: -1
      },
      user: {
        user_id: -1,
        given_name: '',
        family_name: '',
        email: ''
      }
    };
  }

  setLat = (latPassed) => {
    this.state.location.latitude = parseInt(latPassed);
  }
  setLong = (longPassed) => {
    this.state.location.longitude = parseInt(longPassed);
  }
  setGName = (givenName) => {
    this.state.user.given_name = givenName;
  }
  setFName = (familyName) => {
    this.state.user.family_name = familyName;
  }
  setEmail = (emailPassed) => {
    this.state.user.email = emailPassed;
  }
  
  getToken = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token !== null) {
        console.log("Token in CreateChit getToken is: " + token)
        return (token)
      }
    }
    catch (error) {
      console.log(error)
    }
  };
  getUID = async () => {
    try {
      const id = await AsyncStorage.getItem('id');
      console.log("ID obtained from LoginScreen in CreateChit is: " + id)
      if (id !== null) {
        this.state.user.user_id = parseInt(id);
        return (id)
      }
    }
    catch (error) {
      console.log(error)
    }
  };

  waitTimer = async () => {
    var token = await this.getToken();
    var id = await this.getUID();
    this.setState({token: token})
    this.createChit();
  }

  gotoGetChitIDPhoto = () => {
    const { navigate } = this.props.navigation;
    navigate("GetChitIDPhoto");
  }

  createChit = () => {
    const displayToken = this.state.token
    const { navigate } = this.props.navigation;
    fetch('http://10.0.2.2:3333/api/v0.0.5/chits',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Authorization': "" + displayToken
      },
      body: JSON.stringify({
          chit_id: this.state.chit_id,
          timestamp: this.state.timestamp,
          chit_content: this.state.chit_content,
          location: {
              longitude: this.state.location.longitude,
              latitude: this.state.location.latitude
          },
          user: {
              user_id: this.state.user.user_id,
              given_name: this.state.given_name,
              family_name: this.state.family_name,
              email: this.state.email
          }
      })
    })
    .then((data) => {
      ToastAndroid.show("Chit created!", ToastAndroid.SHORT)
    });
  }

    render() {
        return(
        <View>
            <Text style={{color: '#4094f0', textAlign: 'center', fontSize: 25}}>Create chit</Text>
            <Text></Text>
            <TextInput placeholder="Chit ID" onChangeText={(chit_id) => this.setState({chit_id: parseInt(chit_id)})} underlineColorAndroid="transparent"></TextInput>
            <TextInput placeholder="Timestamp" onChangeText={(timestamp) => this.setState({timestamp: parseInt(timestamp)})} underlineColorAndroid="transparent"></TextInput>
            <TextInput placeholder="chit_content" onChangeText={(chit_content) => this.setState({chit_content: chit_content})} underlineColorAndroid="transparent"></TextInput>
            <TextInput placeholder="Location lat" onChangeText={(latitude) => this.setLat(latitude)} underlineColorAndroid="transparent"></TextInput>
            <TextInput placeholder="Location long" onChangeText={(longitude) => this.setLong(longitude)} underlineColorAndroid="transparent"></TextInput>
            <TextInput placeholder="First Name" onChangeText={(GName) => this.setGName(GName)} underlineColorAndroid="transparent"></TextInput>
            <TextInput placeholder="Surname" onChangeText={(FName) => this.setFName(FName)} underlineColorAndroid="transparent"></TextInput>
            <TextInput placeholder="Email" onChangeText={(email) => this.setEmail(email)} underlineColorAndroid="transparent"></TextInput>
            <Button title="Create chit" onPress={this.waitTimer}/>
            <Button title="Take and upload chit photo" onPress={this.gotoGetChitIDPhoto}/>
        </View>
        )
    }
}