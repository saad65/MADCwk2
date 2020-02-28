import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TextInput, Alert, ToastAndroid, ActivityIndicator, AsyncStorage} from 'react-native';
import SearchUserResults from './SearchUserResults';

export default class App extends Component {
    // GET REQ WORKING PROPERLY BUT NO RESPONSE OUTPUT TO UI
    // NO OUTPUT TO CONSOLE AS IT ADDS A "/" TO THE END OF THE QUERY WHICH THE API READS AS PART OF THE QUERY
    constructor(props){
        super(props);
        this.state = {
            query: '',
            returnUID: '',
            returnGName: '',
            returnFName: '',
            returnEmail: '',
        }
    }
    setQuery = (query) => {
        this.state.query = query;
    }

    getQuery = () => {
        var query = this.state.query;
        var queryString = query.toString();
        const url = 'http://10.0.2.2:3333/api/v0.0.5/search_user?q=' + queryString;
        var fetchURL = new URL(url)
        console.log(fetchURL.toString());
        fetch(fetchURL, {
            method:'GET'
        })
        .then(r =>  r.json().then(data => ({status: r.status, body: data})))
        .then(obj => console.log(obj))
        .catch((error) =>{
            console.log(error);
        });
    }

    render() {
      return(
          <View>
              <TextInput placeholder="Enter Query" onChangeText={(query) => this.setQuery(query)} underlineColorAndroid="transparent"></TextInput>
              <Text></Text>
              <Button title="View results" onPress = {this.getQuery}></Button>
              <Text></Text>
          </View>
      )
    }
}