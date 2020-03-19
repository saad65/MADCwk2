import React, { Component } from 'react';
import { Text, View, Button, AsyncStorage} from 'react-native';

/*
    Navigates to TakePhoto and gets the user ID from AsyncStorage. Then passes this and creates
    an URI.
    Also passes the timestamp in the URI in order to force it to refresh any cached image.
*/

export default class UpdateUserPhoto extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: -1
        }
    }

    storeURI = (id) => {
        const timestamp = Date.now();
        const timestampString = timestamp.toString
        const url = 'http://10.0.2.2:3333/api/v0.0.5/user/' + id + '/photo?' + timestampString
        AsyncStorage.setItem('uri', url)
    }

    getId = async () => {
        const id = await AsyncStorage.getItem("id")
        this.setState({id: id});
        const { navigate } = this.props.navigation;
        this.storeURI(id);
        navigate("TakePhoto")
    }

    render() {
        return (
            <View>
                <Text></Text>
                <Button title="Take Photo" onPress={this.getId}></Button>
            </View>
        )
    }
}