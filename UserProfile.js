import React, { Component } from 'react';
import { Text, View, Button, AsyncStorage} from 'react-native';

/*
  Main user area/dashboard. 
  Shows user ID at the top of the screen so the user can use it across all other functions.
  
  Navigates to the following using buttons:
  - Logout
  - Create a chit
  - Follow/unfollow a user
  - Update user profile
  - Update user photo
*/

export default class UserProfile extends Component{
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      id: -1,
    }
  }

  componentDidMount = async() => {
    const id = await AsyncStorage.getItem("id")
    const token = await AsyncStorage.getItem("token")
    const tokenString = token.toString();
    console.log("User ID in UserProfile is: " + id)
    console.log("Token in UserProfile is: " + tokenString)
    this.setState({id: id})
    this.setState({token: token})
  }

  gotoLogout = () => {
    const { navigate } = this.props.navigation;
    navigate("Logout");
  }

  gotoCreateChit = () => {
    const { navigate } = this.props.navigation;
    navigate("CreateChit");
  }

  gotoFollowUser = () => {
    const { navigate } = this.props.navigation;
    navigate("FollowUser");
  }
  gotounfollowUser = () => {
    const { navigate } = this.props.navigation;
    navigate("UnfollowUser");
  }

  gotoUpdateAccount = () => {
    const { navigate } = this.props.navigation;
    navigate("UpdateAccount");
  }
  gotoUpdatePhoto = () => {
    const { navigate } = this.props.navigation;
    navigate("UpdateUserPhoto");
  }

  render() {
    const { navigate } = this.props.navigation;
    return(
      <View>
        <Button title="Logout" onPress={this.gotoLogout}/>
        <Text style={{color: '#4094f0', textAlign: 'center', fontSize: 17}}>Your ID is: {this.state.id}</Text>
        <Text></Text>
        <Button title="Update Profile" onPress ={this.gotoUpdateAccount}/>
        <Text></Text>
        <Button title="Update Profile Photo" onPress ={this.gotoUpdatePhoto}/>
        <Text></Text>
        <Button title="Create Chit" onPress ={this.gotoCreateChit}/>
        <Text></Text>
        <Button title="Follow a User" onPress ={this.gotoFollowUser}/>
        <Text></Text>
        <Button title="Unfollow a User" onPress ={this.gotounfollowUser}/>
        <Text></Text>
        <Button title="View details of single user" onPress={() => navigate("ViewSingleUser")}/>
        <Text></Text>
        <Button title="Search for a user" onPress={() => navigate("SearchUser")}/>
        <Text></Text>
        <Button title="View user followers" onPress={() => navigate("GetUserFollowers")}/>
        <Text></Text>
        <Button title="View user following" onPress={() => navigate("GetUserFollowing")}/>
        <Text></Text>
        <Button title="View user photo" onPress={() => navigate("GetUserPhoto")}/>
        <Text></Text>
      </View>
    )
  }
}