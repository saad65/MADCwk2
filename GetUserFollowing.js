import React, { Component } from 'react';
import { Text, View, Button, TextInput, AsyncStorage} from 'react-native';

/*
    Gets the ID of the user to get the following of using TextInput tag.
    Stores that using AsyncStorage.
    Then, navigates to GetUserFollowingResults.
*/

export default class GetUserFollowing extends Component {
    constructor(props){
        super(props);
        this.state = {
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