import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TextInput, Alert, ToastAndroid, ActivityIndicator, AsyncStorage} from 'react-native';

export default class GetUserFollowing extends Component {
    // GET REQ WORKING PROPERLY BUT NO RESPONSE OUTPUT TO UI
    constructor(props){
        super(props);
        this.state = {
            data: '',
            id: -1
        }
    }
    storeID = async (id) => {
        AsyncStorage.setItem('FollowingID', id)
    }

    getUserID = () => {
        const id = this.state.id;
        const { navigate } = this.props.navigation;
        this.storeID(id);
        navigate("GetUserFollowingResults")
    }
    render() {
      return(
        <View>
            <TextInput placeholder="Enter User ID" onChangeText={(id) => this.setState({id: id})} underlineColorAndroid="transparent"></TextInput>
            <Text></Text>
            <Button title="View user following" onPress = {this.getUserID}></Button>
        </View>
      )
    }
}