import React, { Component } from 'react';
import {Text, View, ActivityIndicator, AsyncStorage} from 'react-native';

/*
    Displays the result of the user ID entered from ViewSingleUser.
    Gets the ID using AsyncStorage, then displays all user data returned from the server using <Text> tags.
*/

export default class SingleUserResults extends Component {
    constructor(props){
        super(props);
        this.state = {
            combinedData: [],
            isLoading: true,
            email: '',
            user_id: -1,
            family_name: '',
            given_name: '',
            recent_chits: {
                chit_content: '',
                chit_id: -1,
                location: {
                    latitude: -1,
                    longitude: -1
                },
            },
            timestamp: []
        };
    }

    getUserID = async () => {
        try {
          const userID = await AsyncStorage.getItem('SingleID')
          if (userID !== null) {
            return (userID)
          }
        } catch (error) {
          console.log(error)
        }
      };

    getResults = async () => {
        var id = await this.getUserID();
        id = parseInt(id)
        console.log("User ID in SingleUserResults getResults is :" + id)
        const url = 'http://10.0.2.2:3333/api/v0.0.5/user/' + id + '/';
        return await fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson)
            this.setState({
                isLoading: false, email: responseJson.email, user_id: responseJson.user_id, family_name: responseJson.family_name,
                given_name: responseJson.given_name
            });

            this.setState({
                combinedData: responseJson.recent_chits.map(chit => ({
                    chit_id: chit.chit_id,
                    content: chit.chit_content,
                    timestamp: chit.timestamp,
                    latitude: chit.location.latitude,
                    longitude: chit.location.longitude
                }))
              })
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
            <Text style={{color: '#4094f0', textAlign: 'center', fontSize: 25}}> User:</Text>
            <Text></Text>
            <Text style={{color: '#4094f0', textAlign: 'center', fontSize: 20}}>{this.state.user_id}</Text>
            <Text style={{color: '#4094f0', textAlign: 'center', fontSize: 20}}>{this.state.given_name}</Text>
            <Text style={{color: '#4094f0', textAlign: 'center', fontSize: 20}}>{this.state.family_name}</Text>
            <Text style={{color: '#4094f0', textAlign: 'center', fontSize: 20}}>{this.state.email}</Text>
            <Text></Text>
            {this.state.combinedData.map(item => <Text style={{color: '#4094f0', textAlign: 'center', fontSize: 20}}>Chit ID:  {item.chit_id}, Chit: "{item.content}", Timestamp: {item.timestamp}, Latitude: {item.latitude}, Longitude: {item.longitude}</Text>)}
        </View>
        );
    }
}