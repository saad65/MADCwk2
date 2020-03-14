import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TextInput, Alert, ToastAndroid, ActivityIndicator, AsyncStorage, FlatList, Image} from 'react-native';

export default class GetUserFollowersResults extends Component {
    // GET REQ WORKS PROPERLY, OUTPUT TO UI BUT NEED TO OUTPUT CHIT CONTENT TOO
    constructor(props){
        super(props);
        this.state = {
            id: -1,
            isLoading: true,
            data: [],
            token: ''
        }
    }

    getToken = async () => {
        const token = await AsyncStorage.getItem('token')
        return (token)
    }

    getUserID = async () => {
        decodeURI
        var uri = './default.png'
        var path = 'C:\\Users\\SM\\Coursework2\\default.png'
        var p = 'file:\\' + path
        
        const data = new FormData();
        data.append('image', './default.png', 'default')
        var formData = new FormData();
        formData.append('my_photo', {
            uri: p,
            name: 'default.png',
            type: 'image/png'
        })
        const token = await this.getToken();
        const displayToken = token.toString();
        console.log("Token received in UpdateUserPhoto: " + displayToken)
        this.state.token = displayToken;
        const { navigate } = this.props.navigation;

        RNFetchBlob.fetch('POST', 'http://10.0.2.2:3333/api/v0.0.5/user/photo', {
            'Content-Type': 'application/octet-stream',
            'X-Authorization': ""+ displayToken
        }, RNFetchBlob.wrap(path))
        .then((response) => {
            ToastAndroid.show('Photo Updated', ToastAndroid.SHORT);
            console.log(response)
        })
        .catch((error) => {
            console.log(error);
        });


        // fetch ('http://10.0.2.2:3333/api/v0.0.5/user/photo', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/octet-stream',
        //         'X-Authorization': ""+ displayToken
        //     },
        //     body: uri
        // })
        // .then((response) => {
        //     ToastAndroid.show('Photo Updated', ToastAndroid.SHORT);
        //     console.log(response)
        // })
        // .catch((error) => {
        //     console.log(error);
        // });

    }

    render() {
        return (
            <View>
                <Button title="Update Photo" onPress={this.getUserID}>Update photo</Button>
            </View>
        )
    }
}