import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TextInput, Alert, ToastAndroid, ActivityIndicator, AsyncStorage, FlatList, TouchableWithoutFeedbackBase} from 'react-native';

export default class extends Component {
    // GET REQ WORKS PROPERLY, HOWEVER NO RESPONSE OUTPUT TO UI ONLY TO CONSOLE
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            data: [],
            userID: -1
        }
    }

    getUserID = async () => {
        try {
          const userID = await AsyncStorage.getItem('singleUserID')
          if (userID !== null) {
            return (userID)
          }
        } catch (error) {
          console.log(error)
        }
      };

    getResults = async () => {
        // this.state.data = await AsyncStorage.getItem('singleUser');
        const userID = this.getUserID();
        this.state.userID = userID;
        var userIDString = userID.toString();
        console.log("User ID is: " + userID)
        // return await fetch('http://10.0.2.2:3333/api/v0.0.5/user/' + userID)
        // .then((response) => response.json())
        // .then((responseJson) => {
        //     this.setState({
        //         isLoadding: false, data: responseJson
        //     });
        // })
        // .catch((error) => {
        //     console.log(error);
        // });
        const url = 'http://10.0.2.2:3333/api/v0.0.5/user/' + userID + '/';
        var fetchURL = new URL(url)
        console.log("URL is: " + fetchURL.toString());
        fetch(fetchURL)
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                data: responseJson,
            });
        })
        .then(console.log(this.state.data))
        .catch((error) =>{
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
                <Text style={{color: '#4094f0', textAlign: 'center', fontSize: 25}}>All chits: </Text>
                <FlatList
                data = {this.state.data}
                renderItem = {({ item }) =>
                (
                    <View>
                        <Text></Text>
                        <Text style={{color: '#4094f0', textAlign: 'center', fontSize: 20}}>Email: </Text>
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