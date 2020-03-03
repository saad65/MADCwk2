import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TextInput, Alert, ToastAndroid, ActivityIndicator, AsyncStorage} from 'react-native';

export default class ViewSingleUser extends Component {
    // GET REQ WORKING PROPERLY BUT NO RESPONSE OUTPUT TO UI ONLY TO CONSOLE
    constructor(props){
        super(props);
        this.state = {
            data: '',
            userID: -1
        }
    }

    setUserID = (userIDPassed) => {
        this.state.userID = userIDPassed;
    }

    getUserID = () => {
        var userID = this.state.userID;
        var userIDString = userID.toString();
        const url = 'http://10.0.2.2:3333/api/v0.0.5/user/' + userIDString + '/';
        var fetchURL = new URL(url)
        console.log(fetchURL.toString());
        fetch(fetchURL, {
            method:'GET'
        })
        .then(r =>  r.json().then(data => ({status: r.status, body: data})))
        .then(obj => console.log(obj))
        .catch((error) =>{
            console.log(error);
        });
    }
    render() {
      return(
          <View>
              <TextInput placeholder="Enter User ID" onChangeText={(id) => this.setUserID(id)} underlineColorAndroid="transparent"></TextInput>
              <Text></Text>
              <Button title="View user" onPress = {this.getUserID}></Button>
          </View>
      )
    }
}