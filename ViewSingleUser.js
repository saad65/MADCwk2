import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TextInput, Alert, ToastAndroid, ActivityIndicator, AsyncStorage, FlatList} from 'react-native';

export default class ViewSingleUser extends Component {
    // GET REQ WORKING PROPERLY BUT NO RESPONSE OUTPUT TO UI ONLY TO CONSOLE WHICH IS VERY SLOW AND RETURNS EMPTY AND REQUIRES MULTIPLE BUTTON CLICKS
    constructor(props){
        super(props);
        this.state = {
            data: [],
            userID: -1
        }
    }

    setUserID = (userIDPassed) => {
        this.state.userID = userIDPassed;
    }

    getUserID = () => {
        var userID = this.state.userID;
        fetch('http://10.0.2.2:3333/api/v0.0.5/user/' + userID)
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                data: responseJson,
            });
        })
        .then(console.log(this.state.data))
        .catch((error) =>{
            console.log(error);
        });
    }
    render() {
      return(
          <View>
              <TextInput placeholder="Enter User ID" onChangeText={(id) => {this.setState({userID: id})}} underlineColorAndroid="transparent"></TextInput>
              <Text></Text>
              <Button title="View user" onPress = {this.getUserID}></Button>
          </View>
      )
      
    }
}