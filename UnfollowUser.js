import React, { Component } from 'react';
import { Text, View, Button, TextInput, ToastAndroid, AsyncStorage} from 'react-native';

/*
  Exactly the same as follow user except a DELETE request instead of a POST.
*/

export default class UnfollowUser extends Component {
    constructor(props) {
      super(props);
      this.state = {
          token: '',
          user_id: -1,
      };
    }
    
    getToken = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token !== null) {
          console.log("Token in UnfollowUser getToken is: " + token)
          return (token)
        }
      }
      catch (error) {
        console.log(error)
      }
    };
  
    gotoUnfollowUser = async () => {
      var token = await this.getToken();
      this.setState({token: token})
      this.unfollowUser();
    }
  
    unfollowUser = () => {
      const token = this.state.token
      const id = this.state.user_id
      fetch('http://10.0.2.2:3333/api/v0.0.5/user/' + id + '/follow',
      {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-Authorization': "" + token
        },
      })
      .then((data) => {
        ToastAndroid.show("User Unfollowed", ToastAndroid.SHORT)
      });
    }
  
      render() {
          return(
          <View>
              <Text style={{color: '#4094f0', textAlign: 'center', fontSize: 25}}>Unfollow user</Text>
              <Text></Text>
              <TextInput placeholder="User ID of User to unfollow" onChangeText={(user_id) => this.setState({user_id: parseInt(user_id)})} underlineColorAndroid="transparent"></TextInput>
              <Button title="Unfollow user" onPress={this.gotoUnfollowUser}/>
          </View>
          )
      }
  }