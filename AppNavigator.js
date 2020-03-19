import React, { Component } from 'react';
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
import Logout from './Logout.js';
import SingleUserResults from './SingleUserResults.js';
import CreateChit from './CreateChit.js';
import FollowUser from './FollowUser.js';
import UpdateAccount from './UpdateAccount.js';
import UnfollowUser from './UnfollowUser.js';
import SearchUserResults from './SearchUserResults.js';
import GetUserFollowersResults from './GetUserFollowersResults.js';
import GetUserFollowingResults from './GetUserFollowingResults.js';
import GetUserPhoto from './GetUserPhoto';
import ShowUserPhoto from './ShowUserPhoto.js';
import UpdateUserPhoto from './UpdateUserPhoto.js';
import GetChitPhoto from './GetChitPhoto';
import ShowChitPhoto from './ShowChitPhoto';
import TakePhoto from './TakePhoto.js';
import TakeChitPhoto from './TakeChitPhoto.js';
import GetChitIDPhoto from './GetChitIDPhoto';

/*
    This is where all the stack screens are imported and declared within the stack navigator container.
    The navigator has the default inital screen of "Welcome" which shows the Login, Create Account and GetChits functions.
    In order to add and use a new screen, the screen must be created and imported from its file path and then declared in a new <Stack.Screen/> tag.
*/

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
            name="Logout"
            component={Logout}
            options={{title: "Logout"}}
            />
            <Stack.Screen
            name="SingleUserResults"
            component={SingleUserResults}
            options={{title: "Single User Results"}}
            />
            <Stack.Screen
            name="SearchUserResults"
            component={SearchUserResults}
            options={{title: "Search User Results"}}
            />
            <Stack.Screen
            name="GetUserFollowersResults"
            component={GetUserFollowersResults}
            options={{title: "User Followers Results"}}
            />
            <Stack.Screen
            name="GetUserFollowingResults"
            component={GetUserFollowingResults}
            options={{title: "User Following Results"}}
            />
            <Stack.Screen
            name="CreateChit"
            component={CreateChit}
            options={{title: "Create chit"}}
            />
            <Stack.Screen
            name="FollowUser"
            component={FollowUser}
            options={{title: "Follow user"}}
            />
            <Stack.Screen
            name="UpdateAccount"
            component={UpdateAccount}
            options={{title: "Update Account"}}
            />
            <Stack.Screen
            name="UnfollowUser"
            component={UnfollowUser}
            options={{title: "Unfollow user"}}
            />
            <Stack.Screen
            name="GetUserPhoto"
            component={GetUserPhoto}
            options={{title: "User photo"}}
            />
            <Stack.Screen
            name="ShowUserPhoto"
            component={ShowUserPhoto}
            options={{title: "User photo"}}
            />
            <Stack.Screen
            name="UpdateUserPhoto"
            component={UpdateUserPhoto}
            options={{title: "Update user photo"}}
            />
            <Stack.Screen
            name="GetChitPhoto"
            component={GetChitPhoto}
            options={{title: "Chit photo"}}
            />
            <Stack.Screen
            name="ShowChitPhoto"
            component={ShowChitPhoto}
            options={{title: "Chit photo"}}
            />
            <Stack.Screen
            name="TakePhoto"
            component={TakePhoto}
            options={{title: "Take photo"}}
            />
            <Stack.Screen
            name="TakeChitPhoto"
            component={TakeChitPhoto}
            options={{title: "Take photo"}}
            />
            <Stack.Screen
            name="GetChitIDPhoto"
            component={GetChitIDPhoto}
            options={{title: "Take photo"}}
            />
            

        </Stack.Navigator>
    </NavigationContainer>
    );  
}

export default AppNavigator;