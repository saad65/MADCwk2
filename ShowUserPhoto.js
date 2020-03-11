import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TextInput, Alert, ToastAndroid, ActivityIndicator, AsyncStorage, FlatList, Image} from 'react-native';

export default class ShowUserPhoto extends Component {
    // GET REQ WORKS PROPERLY, OUTPUT TO UI BUT NEED TO OUTPUT CHIT CONTENT TOO
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            data: [],
            uri: ''
        }
    }

    getID = async () => {
        try {
          const uri = await AsyncStorage.getItem('UserPhotoID')
          console.log("User uri for photo is: " + uri)
          if (uri !== null) {
              this.state.uri = uri;
              this.setState({isLoading: false})
          }
        } catch (error) {
          console.log(error)
        }
      };

    componentDidMount = () => {
        this.getID();
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
                <Image style = {{width: 100, height: 100}} source = {{uri: this.state.uri}}></Image>
            </View>
        );
    }
}