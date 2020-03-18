import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TextInput, Alert, ToastAndroid, ActivityIndicator, AsyncStorage} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from "./LoginScreen.js"
import CreateAccountScreen from "./CreateAccount.js"
import {createAppContainer} from 'react-navigation';

export default class Welcome extends Component{
    render(){
        const { navigate } = this.props.navigation;
        return(
            <View>
                <Text> </Text>
                <Text style={{color: '#4094f0', textAlign: 'center', fontSize: 25}}>Welcome to Chittr</Text>
                <Text> </Text>
                <Button title="Login" onPress ={() => navigate("Login")}/>
                <Text> </Text>
                <Button title="Create an account" onPress={() => navigate("CreateAccount")}/>
                <Text></Text>
                <Button title="Get all chits from homepage" onPress={() => navigate("GetChits")}/>
                <Text></Text>
            </View>
        )
    }
}