import React, { Component } from 'react';
import { View, ActivityIndicator, AsyncStorage, Image} from 'react-native';

/*
    Displays the photo of the URI obtained from AsyncStorage as set in GetUserPhoto.
    Displayed in an Image tag.
*/

export default class ShowUserPhoto extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            data: [],
            uri: ''
        }
    }

    getID = async () => {
        try {
          const uri = await AsyncStorage.getItem('UserPhotoID')
          console.log("User uri for photo is: " + uri)
          if (uri !== null) {
              this.state.uri = uri;
              this.setState({isLoading: false})
          }
        } catch (error) {
          console.log(error)
        }
      };

    componentDidMount = () => {
        this.getID();
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
            <View style={{justifyContent: 'center'}}>
                <Image style = {{width: 250, height: 250, alignSelf: 'center'}} source = {{uri: this.state.uri}}></Image>
            </View>
        );
    }
}