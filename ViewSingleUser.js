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

    storeID = (id) => {
        AsyncStorage.setItem('SingleID', id)
    }


    getUserID = () => {
        const id = this.state.userID;
        const { navigate } = this.props.navigation;
        this.storeID(id);
        navigate("SingleUserResults")   
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