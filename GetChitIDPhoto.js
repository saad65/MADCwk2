import React, { Component } from 'react';
import { Text, View, Button, TextInput, AsyncStorage} from 'react-native';

/*
    Gets the Chit ID from the user of the chit the user wants to upload
    the photo to and stores that using AsyncStorage.
    Following this, it navigates to TakeChitPhoto.
*/

export default class App extends Component {
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
              <Button title="Take Photo" onPress = {this.getChitPhotoID}></Button>
              <Text></Text>
          </View>
      )
    }
}