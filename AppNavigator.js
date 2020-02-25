import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TextInput, Alert, ToastAndroid, ActivityIndicator, AsyncStorage} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import Welcome from "./Welcome.js";
import LoginScreen from './LoginScreen.js';
import CreateAccount from './CreateAccount.js';
import UserProfile from './UserProfile.js';

const Stack = createStackNavigator();

function AppNavigator(){
    return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{title: 'Welcome'}}
            />
            <Stack.Screen
            name="CreateAccount"
            component={CreateAccount}
            />
            <Stack.Screen
            name="Login"
            component={LoginScreen}
            />
            <Stack.Screen
            name="UserProfile"
            component={UserProfile}
            />
        </Stack.Navigator>
    </NavigationContainer>
    );
}

export default AppNavigator;