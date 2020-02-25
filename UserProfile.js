import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TextInput, Alert, ToastAndroid, ActivityIndicator, AsyncStorage} from 'react-native';

export default class UserProfile extends Component{
  render() {
    return(
      <View>
        <Text style={{color: '#4094f0', textAlign: 'center', fontSize: 25}}>User Area</Text>
      </View>
    )
  }
}