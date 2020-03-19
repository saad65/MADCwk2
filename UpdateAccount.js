import React, { Component } from 'react';
import { Text, View, Button, TextInput, ToastAndroid, AsyncStorage} from 'react-native';

/*
  Exactly the same as CreateAccount instead a PATCH request used instead of POST.
*/

export default class UpdateAccount extends Component{
    constructor(props){
        super(props);
        this.state = {
            token: '',
            user_id: -1,
            given_name: '',
            family_name: '',
            email: '',
            password: '',
        };
    }
    
    setGName = (given_name) => {
        this.state.given_name = given_name
    }
    setFName = (family_name) => {
        this.state.family_name = family_name
    }
    setEmail = (email) => {
        this.state.email = email
    }
    setPassword = (password) => {
        this.state.password = password
    }

    getToken = async () => {
        try {
          const token = await AsyncStorage.getItem('token');
          if (token !== null) {
            console.log("Token in UpdateAccount getToken is: " + token)
            return (token)
          }
        }
        catch (error) {
          console.log(error)
        }
      };
      getUID = async () => {
        try {
          const id = await AsyncStorage.getItem('id');
          console.log("ID obtained from LoginScreen in UpdateAccount is: " + id)
          if (id !== null) {
            this.state.user_id = parseInt(id);
            return (id)
          }
        }
        catch (error) {
          console.log(error)
        }
      };
    
      gotoCreateAccount = async () => {
        var token = await this.getToken();
        await this.getUID();
        this.setState({token: token})
        this.createAccount();
      }

    createAccount = () => {
        const displayToken = this.state.token
        const id = this.state.user_id
        fetch("http://10.0.2.2:3333/api/v0.0.5/user/" + id,
        {
        method: 'PATCH',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-Authorization': "" + displayToken
        },
        body: JSON.stringify({
            given_name: this.state.given_name,
            family_name: this.state.family_name,
            email: this.state.email,
            password: this.state.password
        })
        })
        .then((response) => {
        ToastAndroid.show('Account Updated', ToastAndroid.SHORT);
        console.log(response)
        })
        .catch((error) => {
        console.log(error);
        });
    }

    render(){
        return(

        <View>

            <Text> </Text>
            <Text style={{color: '#4094f0', textAlign: 'center', fontSize: 25}}>Update Account</Text>
            <Text> </Text>
            <TextInput placeholder="First Name" onChangeText={(given_name) => this.setGName(given_name)} underlineColorAndroid="transparent"></TextInput>
            <TextInput placeholder="Surname" onChangeText={(family_name) => this.setFName(family_name)} underlineColorAndroid="transparent"></TextInput>
            <TextInput placeholder="Email" onChangeText={(email) => this.setEmail(email)} underlineColorAndroid="transparent"></TextInput>
            <TextInput secureTextEntry={true} placeholder="Password" onChangeText={(password) => this.setPassword(password)} underlineColorAndroid="transparent"></TextInput> 
            <Button title="Update Account" onPress={this.gotoCreateAccount}/>

        </View>

        )
    }
}