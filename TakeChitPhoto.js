import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert, AsyncStorage, TouchableOpacity} from 'react-native';
import {RNCamera} from 'react-native-camera';

/*
    Same as TakePhoto which is used for uploading a photo for the user profile.
    Uses RNCamera module to take a picture and send it in a POST request to the server.
    Gets the Chit ID to upload the photo to and the authentication token from AsyncStorage.
*/

export default class TakeChitPhoto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: '',
            chitID: -1
        }
    }
    
    getToken = async() => {
        const token = await AsyncStorage.getItem("token");
        this.state.token = token;
        console.log("Token got: " + token)
    }

    getChitID = async() => {
        const chitID = AsyncStorage.getItem("chitPhotoID");
        this.state.chitID = chitID;
        const chitIDString = this.state.chitID;
        const displayChitID = chitIDString.toString();
        console.log("Chit ID got: " + displayChitID)
        return(chitID)
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
            const chitID = await this.getChitID();
            const chitIDString = chitID.toString();
            console.log(data.uri, this.state.token)

            return fetch("http://10.0.2.2:3333/api/v0.0.5/chits/" + chitIDString + '/photo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'image/jpeg',
                    'X-Authorization': tokenString
                },
                body: data
            })
                .then(() => {
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