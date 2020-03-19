import React, { Component } from 'react';
import { Text, View, Button, TextInput, AsyncStorage} from 'react-native';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            query: '',
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