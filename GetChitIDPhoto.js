import React, { Component } from 'react';
import { Text, View, Button, TextInput, AsyncStorage} from 'react-native';

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