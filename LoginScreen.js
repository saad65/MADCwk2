import React, { Component } from 'react';
import { Text, View, Button, TextInput, AsyncStorage} from 'react-native';

export default class LoginScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      token: '',
      email: '',
      password: '',
      userID: -1
    }
  }
  

  setEmail = (email) => {
    this.state.email = email
  }
  setPassword = (password) => {
    this.state.password = password
  }

  storeToken = async (token) => {
    try {
      AsyncStorage.setItem('token', token);
    } catch (error) {
      console.log(error)
    }
  };

  login = () => {
    const { navigate } = this.props.navigation;
    fetch('http://10.0.2.2:3333/api/v0.0.5/login',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
    .then(results => results.json())
    .then((data) => {
      this.setState({ token: data.token })
      this.setState({ userID : data.id })

      const tokenString = this.state.token
      this.storeToken(tokenString)

      const userID = this.state.userID
      const userIDString = userID.toString();

      AsyncStorage.setItem('id', userIDString);

      console.log("Token generated from api (in LoginScreen): " + tokenString)
      console.log("User ID is (inLoginScreen): " + userID)
      navigate("UserProfile");
      });
  }

  render(){
    return(
      <View>

        <Text> </Text>

        <Text style={{color: '#4094f0', textAlign: 'center', fontSize: 25}}>Login</Text>

        <Text> </Text>

        <TextInput placeholder="Email" onChangeText={(email) => this.setEmail(email)} underlineColorAndroid="transparent"></TextInput>

        <TextInput secureTextEntry={true} placeholder="Password" onChangeText={(password) => this.setPassword(password)} underlineColorAndroid="transparent"></TextInput>

        <Text> </Text>

        <Button title="Login to User Area" onPress={this.login}/>

      </View>
    )
  }


}