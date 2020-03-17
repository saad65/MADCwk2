import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TextInput, Alert, ToastAndroid, ActivityIndicator, AsyncStorage} from 'react-native';

export default class App extends Component {
    // GET REQ WORKING PROPERLY BUT NO RESPONSE OUTPUT TO UI
    // NO OUTPUT TO CONSOLE AS IT ADDS A "/" TO THE END OF THE QUERY WHICH THE API READS AS PART OF THE QUERY
    constructor(props){
        super(props);
        this.state = {
            chitID: -1
        }
    }
    setChitID = (chitIDString) => {
        AsyncStorage.setItem('chitPhotoID', chitIDString)
    }

    getChitPhotoID = () => {
        const chitID = this.state.chitID;
        const { navigate } = this.props.navigation;
        this.setChitID(chitID);
        navigate("TakeChitPhoto")
    }

    render() {
      return(
          <View>
              <TextInput placeholder="Enter Chit ID" onChangeText={(chitID) => this.setState({chitID: chitID})} underlineColorAndroid="transparent"></TextInput>
              <Text></Text>
              <Button title="View results" onPress = {this.getChitPhotoID}></Button>
              <Text></Text>
          </View>
      )
    }
}