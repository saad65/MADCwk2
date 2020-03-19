import React, { Component } from 'react';
import { Text, View, Button, AsyncStorage} from 'react-native';

export default class UpdateUserPhoto extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: -1,
            isLoading: true,
            data: [],
        }
    }

    storeId = (id) => {
        const timestamp = Date.now();
        const timestampString = timestamp.toString
        const url = 'http://10.0.2.2:3333/api/v0.0.5/user/' + id + '/photo?' + timestampString
        AsyncStorage.setItem('uri', url)
    }

    getId = async () => {
        const id = AsyncStorage.getItem("id")
        this.setState({id: id});
        const { navigate } = this.props.navigation;
        this.storeId(id);
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