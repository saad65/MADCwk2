import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TextInput, Alert, ToastAndroid, ActivityIndicator, AsyncStorage, FlatList, TouchableOpacity} from 'react-native';
import {RNCamera} from 'react-native-camera';
export default class TakePhoto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: ''
        }
    }
    
    getToken = async() => {
        const token = await AsyncStorage.getItem("token");
        this.state.token = token;
        console.log("Token got: " + token)
    }

    componentDidMount = async () => {
        await this.getToken();
    }

    render() {
        return (
            <View style={styles.container}>
                <RNCamera
                ref={ref => {
                this.camera = ref;
                }}
                    style={styles.preview}
                />
                <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity
                        onPress={this.takePicture.bind(this)}
                        style={styles.capture}>
                        <Text style={{ fontSize: 16 }}>CAPTURE</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    takePicture = async () => {
        if (this.camera) {
            const options = { quality: 0.5, base64: true };
            const data = await this.camera.takePictureAsync(options);
            const token = this.state.token
            const tokenString = token.toString();
            console.log(data.uri, this.state.token)

            return fetch("http://10.0.2.2:3333/api/v0.0.5/user/photo", {
                method: 'POST',
                headers: {
                    'Content-Type': 'image/jpeg',
                    'X-Authorization': tokenString
                },
                body: data
            })
                .then((response) => {
                    Alert.alert("Picture added!");
                })
                .catch((error) => {
                    console.log(error)
                });
        }
    };
}
const styles = StyleSheet.create({
    container: { flex: 1, flexDirection: 'column' },
    preview: { flex: 1, justifyContent: 'flex-end', alignItems: 'center' },
    capture: { flex: 0, borderRadius: 5, padding: 15, paddingHorizontal: 20, alignSelf: 'center', margin: 20, }
});