import React, { Component } from 'react';
import { Text, View, AsyncStorage} from 'react-native';

/*
  User logout function.
  Navigated from UserProfile.

  Gets auth token using AsyncStorge and passes it in the
  X-Authorization header to make the POST request to logout.
  No JSON object required as per API spec.

  After successful request, it navigates back to the Welcome screen.
*/

export default class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: ''
    }
  }

  setToken = (token) => {
    this.state.token = token;
  }

  componentDidMount = async () => {
    var token = await this.getToken();
    this.setState({token: token})
    this.logout();
  }
  
  getToken = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token !== null) {
        console.log("Token received Logout getToken is " + token);
        return (token)
      }
    } catch (error) {
      console.log(error)
    }
  };
  logout = () => {
    const token = this.state.token
    const { navigate } = this.props.navigation;
    fetch('http://10.0.2.2:3333/api/v0.0.5/logout',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Authorization': "" + token
      }
    })
    .then(() => {
      navigate("Welcome")
    });
  }
    render () {
        return(
          <View>
            <Text></Text>
            <Text style={{color: '#4094f0', textAlign: 'center', fontSize: 25}}>Logging out...</Text>
            <Text></Text>
          </View>
        )
    }
}