import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TextInput, Alert, ToastAndroid, ActivityIndicator, AsyncStorage, FlatList} from 'react-native';

export default class extends Component {
    // GET REQ WORKS PROPERLY, HOWEVER NO RESPONSE OUTPUT TO UI ONLY TO CONSOLE
    constructor(props){
        super(props);
        this.state = {
            shoppingListData: [],
            data: ''
        }
    }

    componentDidMount = () => {
        fetch('http://10.0.2.2:3333/api/v0.0.5/chits', {
            method:'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              }
        })
        .then(r =>  r.json().then(data => ({status: r.status, body: data})))
        .then(obj => console.log(obj))
        .catch((error) =>{
            console.log(error);
        });
    }
       
    
    render(){
        return(
        <View>
            <Text>Data below: </Text>
         </View>
        );
    }
}