import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TextInput, Alert, ToastAndroid, ActivityIndicator, AsyncStorage, FlatList, TouchableWithoutFeedbackBase} from 'react-native';

export default class SearchUserResult extends Component {
    // GET REQ WORKS PROPERLY, OUTPUT TO UI BUT NEED TO OUTPUT CHIT CONTENT TOO
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            data: [],
        }
    }

    getQuery = async () => {
        try {
          const query = await AsyncStorage.getItem('SearchQuery')
          if (query !== null) {
            return (query)
          }
        } catch (error) {
          console.log(error)
        }
      };

    getResults = async () => {
        var query = await this.getQuery();
        console.log("User Query in SearchUserResults getResults is :" + query)
        const url = 'http://10.0.2.2:3333/api/v0.0.5/search_user?q=' + query;
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
            <Text style={{color: '#4094f0', textAlign: 'center', fontSize: 25}}>User: </Text>
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