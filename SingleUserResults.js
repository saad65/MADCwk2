import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TextInput, Alert, ToastAndroid, ActivityIndicator, AsyncStorage, FlatList, TouchableWithoutFeedbackBase} from 'react-native';

export default class SingleUserResults extends Component {
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
            const result = Object.keys(responseJson).map(key => ({[key]: responseJson[key]}));
            this.setState({
                isLoading: false, data: result,
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
            <Text style={{color: '#4094f0', textAlign: 'center', fontSize: 25}}>User: </Text>
            <Text></Text>
            <FlatList
            data = {this.state.data}
            renderItem = {({ item }) =>
            (
                <View>
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