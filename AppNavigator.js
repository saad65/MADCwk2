import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TextInput, Alert, ToastAndroid, ActivityIndicator, AsyncStorage} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import Welcome from "./Welcome.js";
import LoginScreen from './LoginScreen.js';
import CreateAccount from './CreateAccount.js';
import UserProfile from './UserProfile.js';
import GetChits from './GetChits.js';
import ViewSingleUser from './ViewSingleUser.js';
import SearchUser from './SearchUser.js';
import GetUserFollowers from './GetUserFollowers.js'
import GetUserFollowing from './GetUserFollowing.js';
import SearchUserResults from './SearchUserResults.js';



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
            options={{title: "Dashboard"}}
            />
            <Stack.Screen
            name="GetChits"
            component={GetChits}
            options={{title: "Public chit feed"}}
            />
            <Stack.Screen
            name="ViewSingleUser"
            component={ViewSingleUser}
            options={{title: "View single user"}}
            />
            <Stack.Screen
            name="SearchUser"
            component={SearchUser}
            options={{title: "Search for a user"}}
            />
            <Stack.Screen
            name="GetUserFollowers"
            component={GetUserFollowers}
            options={{title: "Get user followers"}}
            />
            <Stack.Screen
            name="GetUserFollowing"
            component={GetUserFollowing}
            options={{title: "Get user following"}}
            />
            <Stack.Screen
            name="SearchUserResults"
            component={SearchUserResults}
            options={{title: "Get user following"}}
            />

        </Stack.Navigator>
    </NavigationContainer>
    );  
}

export default AppNavigator;