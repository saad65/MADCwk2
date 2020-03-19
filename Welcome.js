import React, { Component } from 'react';
import { Text, View, Button} from 'react-native';

export default class Welcome extends Component{
    render(){
        const { navigate } = this.props.navigation;
        return(
            <View>
                <Text> </Text>
                <Text style={{color: '#4094f0', textAlign: 'center', fontSize: 25}}>Welcome to Chittr</Text>
                <Text> </Text>
                <Button title="Login" onPress ={() => navigate("Login")}/>
                <Text> </Text>
                <Button title="Create an account" onPress={() => navigate("CreateAccount")}/>
                <Text></Text>
                <Button title="Get all chits from homepage" onPress={() => navigate("GetChits")}/>
                <Text></Text>
            </View>
        )
    }
}