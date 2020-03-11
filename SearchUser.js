import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TextInput, Alert, ToastAndroid, ActivityIndicator, AsyncStorage} from 'react-native';

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
    storeQuery = (query) => {
        AsyncStorage.setItem('SearchQuery', query)
    }

    getQuery = () => {
        const query = this.state.query;
        const { navigate } = this.props.navigation;
        this.storeQuery(query);
        navigate("SearchUserResults")
    }

    render() {
      return(
          <View>
              <TextInput placeholder="Enter Query" onChangeText={(query) => this.setState({query: query})} underlineColorAndroid="transparent"></TextInput>
              <Text></Text>
              <Button title="View results" onPress = {this.getQuery}></Button>
              <Text></Text>
          </View>
      )
    }
}