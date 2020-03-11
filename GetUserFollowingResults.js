import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TextInput, Alert, ToastAndroid, ActivityIndicator, AsyncStorage, FlatList, TouchableWithoutFeedbackBase} from 'react-native';

export default class GetUserFollowingResults extends Component {
    // GET REQ WORKS PROPERLY, OUTPUT TO UI BUT NEED TO OUTPUT CHIT CONTENT TOO
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            data: [],
        }
    }

    getUserID = async () => {
        try {
          const id = await AsyncStorage.getItem('FollowingID')
          if (id !== null) {
            return (id)
          }
        } catch (error) {
          console.log(error)
        }
      };

    getResults = async () => {
        var id = await this.getUserID();
        console.log("User Query in GetUserFollowingResults getResults is :" + id)
        const url = 'http://10.0.2.2:3333/api/v0.0.5/user/' + id + '/following';
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
            <Text style={{color: '#4094f0', textAlign: 'center', fontSize: 25}}>User is following: </Text>
            <Text></Text>
            <FlatList
            data = {this.state.data}
            renderItem = {({ item }) =>
            (
                <View>
                    <Text style={{textAlign: 'center', fontSize: 15}}>{item.user_id}</Text>
                    <Text style={{textAlign: 'center', fontSize: 15}}>{item.given_name}</Text>
                    <Text style={{textAlign: 'center', fontSize: 15}}>{item.family_name}</Text>
                    <Text style={{textAlign: 'center', fontSize: 15}}>{item.email}</Text>
                </View>
            )
        }
        keyExtractor={({ id }, index) => id}
            />
        </View>
        );
    }
}