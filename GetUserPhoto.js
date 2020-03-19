import React, { Component } from 'react';
import { Text, View, Button, TextInput, AsyncStorage} from 'react-native';

export default class GetUserFollowersResults extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: -1,
            isLoading: true,
            data: [],
        }
    }

    storeID = (id) => {
        const timestamp = Date.now();
        const timestampString = timestamp.toString();
        const uri = 'http://10.0.2.2:3333/api/v0.0.5/user/' + id + '/photo?' + timestampString
        AsyncStorage.setItem('UserPhotoID', uri)
    }

    getUserID = () => {
        const id = this.state.id;
        const { navigate } = this.props.navigation;
        this.storeID(id);
        navigate("ShowUserPhoto")
    }

    render() {
        return(
          <View>
              <TextInput placeholder="Enter User ID" onChangeText={(id) => this.setState({id: id})} underlineColorAndroid="transparent"></TextInput>
              <Text></Text>
              <Button title="View user photo" onPress = {this.getUserID}></Button>
          </View>
        )
      }
}