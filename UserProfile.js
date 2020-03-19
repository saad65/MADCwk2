import React, { Component } from 'react';
import { Text, View, Button, AsyncStorage} from 'react-native';

export default class UserProfile extends Component{
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      id: -1,
    }
  }

  storeToken = async (tokenPassed) => {
    try {
      await AsyncStorage.setItem('token', tokenPassed);
    } catch (error) {
      console.log(error)
    }
  };


  getToken = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token !== null) {
        return (token)
      }
    } catch (error) {
      console.log(error)
    }
  };

  componentDidMount = async() => {
    const id = await AsyncStorage.getItem("id")
    console.log("User ID in UserProfile is: " + id)
    this.setState({id: id})
  }

  gotoLogout = () => {
    const token = this.getToken();
    this.setState({ token: token })
    const displayToken = this.state.token
    const { navigate } = this.props.navigation;
    navigate("Logout");
  }

  gotoCreateChit = () => {
    const token = this.getToken();
    this.setState({ token: token })
    const { navigate } = this.props.navigation;
    navigate("CreateChit");
  }

  gotoFollowUser = () => {
    const token = this.getToken();
    this.setState({ token: token })
    const { navigate } = this.props.navigation;
    navigate("FollowUser");
  }
  gotounfollowUser = () => {
    const token = this.getToken();
    this.setState({ token: token })
    const { navigate } = this.props.navigation;
    navigate("UnfollowUser");
  }

  gotoUpdateAccount = () => {
    const token = this.getToken();
    this.setState({ token: token })
    const { navigate } = this.props.navigation;
    navigate("UpdateAccount");
  }
  gotoUpdatePhoto = () => {
    const token = this.getToken();
    this.setState({ token: token })
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