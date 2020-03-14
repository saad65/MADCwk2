import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TextInput, Alert, ToastAndroid, ActivityIndicator, AsyncStorage, FlatList, TouchableWithoutFeedbackBase} from 'react-native';

export default class GetUserFollowersResults extends Component {
    // GET REQ WORKS PROPERLY, OUTPUT TO UI BUT NEED TO OUTPUT CHIT CONTENT TOO
    constructor(props){
        super(props);
        this.state = {
            id: -1,
            isLoading: true,
            data: [],
        }
    }

    storeID = (id) => {
        const uri = 'http://10.0.2.2:3333/api/v0.0.5/chits/' + id + '/photo'
        AsyncStorage.setItem('ChitPhotoID', uri)
    }

    getUserID = () => {
        const id = this.state.id;
        const { navigate } = this.props.navigation;
        this.storeID(id);
        navigate("ShowChitPhoto")
    }

    render() {
        return(
          <View>
              <TextInput placeholder="Enter Chit ID" onChangeText={(id) => this.setState({id: id})} underlineColorAndroid="transparent"></TextInput>
              <Text></Text>
              <Button title="View user photo" onPress = {this.getUserID}></Button>
          </View>
        )
      }
}