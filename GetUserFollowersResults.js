import React, { Component } from 'react';
import { Text, View, ActivityIndicator, AsyncStorage, FlatList} from 'react-native';

/*
    Displays the result of the ID entered from GetUserFollowers.
    Gets the ID using AsyncStorage, then displays all user data returned from the server using FlatList tag.
*/

export default class GetUserFollowersResults extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            data: [],
        }
    }

    getUserID = async () => {
        try {
          const id = await AsyncStorage.getItem('FollowerID')
          if (id !== null) {
            return (id)
          }
        } catch (error) {
          console.log(error)
        }
      };

    getResults = async () => {
        var id = await this.getUserID();
        console.log("User Query in GetUserFollowersResults getResults is :" + id)
        const url = 'http://10.0.2.2:3333/api/v0.0.5/user/' + id + '/followers';
        return await fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                isLoading: false, data: responseJson,
            });
            console.log(this.state.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    componentDidMount = () => {
        this.getResults();
    }
       
    render(){
        if (this.state.isLoading) {
            return (
                <View>
                    <ActivityIndicator/>
                </View>
            )
        }
        return(
            <View>
            <Text style={{color: '#4094f0', textAlign: 'center', fontSize: 25}}> User's Followers: </Text>
            <Text></Text>
            <FlatList
            data = {this.state.data}
            renderItem = {({ item }) =>
            (
                <View>
                    <Text style={{color: '#4094f0', textAlign: 'center', fontSize: 20}}>{item.user_id}</Text>
                    <Text style={{color: '#4094f0', textAlign: 'center', fontSize: 20}}>{item.given_name}</Text>
                    <Text style={{color: '#4094f0', textAlign: 'center', fontSize: 20}}>{item.family_name}</Text>
                    <Text style={{color: '#4094f0', textAlign: 'center', fontSize: 20}}>{item.email}</Text>
                </View>
            )
        }
        keyExtractor={({ id }, index) => id}
            />
        </View>
        );
    }
}