import React, { Component } from 'react';
import { Text, View, Button, TextInput, Alert, ToastAndroid, AsyncStorage, PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';


export default class CreateChit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      chit_id: -1,
      timestamp: '',
      chit_content: '',
      location: {
        longitude: -1,
        latitude: -1
      },
      user: {
        user_id: -1,
        given_name: '',
        family_name: '',
        email: ''
      },
      locationPermission: false
    };
  }

  setLat = (latitude) => {
    this.state.location.latitude = parseInt(latitude);
  }
  setLong = (longitude) => {
    this.state.location.longitude = parseInt(longitude);
  }
  setGName = (givenName) => {
    this.state.user.given_name = givenName;
  }
  setFName = (familyName) => {
    this.state.user.family_name = familyName;
  }
  setEmail = (email) => {
    this.state.user.email = email;
  }
  setTimestamp = (timestamp) => {
    this.state.timestamp = timestamp;
  }
  requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
        title: 'Chit Location Permission',
        message:'This app requires access to your location.', buttonNeutral: 'Ask Me Later', buttonNegative: 'Cancel',buttonPositive: 'OK'
      });
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can access location');
          return true;
        } else {
          console.log('Location permission denied');
          return false;
        }
      }
      catch (error) {
        console.warn(error);
      }
    }


    findCoordinates = () => {
      if (!this.state.locationPermission) {
          this.state.locationPermission = this.requestLocationPermission();
      }
      Geolocation.getCurrentPosition(
          (position) => {
              const positionJSON = JSON.stringify(position);
              console.log(positionJSON);
              const parseJSON = JSON.parse(positionJSON);
              this.setLat(parseJSON.coords.latitude);
              this.setLong(parseJSON.coords.longitude);
              this.setTimestamp(parseJSON.timestamp);
              const latitude = this.state.location.latitude;
              const latitudeString = latitude.toString();
              const longitude = this.state.location.longitude;
              const longitudeString = longitude.toString();
              const timestamp = this.state.timestamp;
              const timestampString = timestamp.toString();
              console.log("Lat is: " + latitudeString)
              console.log("Long is: " + longitudeString)
              console.log("Chit timestamp: " + timestampString)
          },
          (error) => {
              Alert.alert(error.message)
          }, {
          enableHighAccuracy: false, timeout: 20000, maximumAge: 1000
      });
  };

  componentDidMount = () => {
      this.findCoordinates();
  }
  
  getToken = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token !== null) {
        console.log("Token in CreateChit getToken is: " + token)
        return (token)
      }
    }
    catch (error) {
      console.log(error)
    }
  };
  getUID = async () => {
    try {
      const id = await AsyncStorage.getItem('id');
      console.log("ID obtained from LoginScreen in CreateChit is: " + id)
      if (id !== null) {
        this.state.user.user_id = parseInt(id);
        return (id)
      }
    }
    catch (error) {
      console.log(error)
    }
  };

  gotoCreateChit = async () => {
    var token = await this.getToken();
    var id = await this.getUID();
    this.setState({token: token})
    this.createChit();
  }

  gotoGetChitIDPhoto = () => {
    const { navigate } = this.props.navigation;
    navigate("GetChitIDPhoto");
  }

  createChit = () => {
    const displayToken = this.state.token
    fetch('http://10.0.2.2:3333/api/v0.0.5/chits',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Authorization': "" + displayToken
      },
      body: JSON.stringify({
          chit_id: this.state.chit_id,
          timestamp: this.state.timestamp,
          chit_content: this.state.chit_content,
          location: {
              longitude: this.state.location.longitude,
              latitude: this.state.location.latitude
          },
          user: {
              user_id: this.state.user.user_id,
              given_name: this.state.given_name,
              family_name: this.state.family_name,
              email: this.state.email
          }
      })
    })
    .then((data) => {
      ToastAndroid.show("Chit created!", ToastAndroid.SHORT)
    });
  }

    render() {
      const { navigate } = this.props.navigation;
        return(
        <View>
            <Text style={{color: '#4094f0', textAlign: 'center', fontSize: 25}}>Create chit</Text>
            <Text></Text>
            <TextInput placeholder="Chit_content" onChangeText={(chit_content) => this.setState({chit_content: chit_content})} underlineColorAndroid="transparent"></TextInput>
            <TextInput placeholder="First Name" onChangeText={(GName) => this.setGName(GName)} underlineColorAndroid="transparent"></TextInput>
            <TextInput placeholder="Surname" onChangeText={(FName) => this.setFName(FName)} underlineColorAndroid="transparent"></TextInput>
            <TextInput placeholder="Email" onChangeText={(email) => this.setEmail(email)} underlineColorAndroid="transparent"></TextInput>
            <Button title="Create chit" onPress={this.gotoCreateChit}/>
            <Text></Text>
            <Button title="Take and upload chit photo" onPress={this.gotoGetChitIDPhoto}/>
            <Text></Text>
            <Button title="View chit photo" onPress={() => navigate("GetChitPhoto")}/>
        </View>
        )
    }
}