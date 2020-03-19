import React, { Component } from 'react';
import { Text, View, ActivityIndicator, FlatList} from 'react-native';

/*
    Simple GET request which stores response in an array then iterates over each item
    in the array using FlatList tag.
*/

export default class extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            data: []
        }
    }

    getData = async () => {

         return await fetch('http://10.0.2.2:3333/api/v0.0.5/chits')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false, data: responseJson,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }


    componentDidMount = () => {
        this.getData();
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
            <View>
                <Text style={{color: '#4094f0', textAlign: 'center', fontSize: 25}}>All chits: </Text>
                <FlatList
                data = {this.state.data}
                renderItem = {({ item }) =>
                (
                    <View>
                        <Text></Text>
                        <Text style={{color: '#4094f0', textAlign: 'center', fontSize: 20}}>First Name: </Text>
                        <Text style={{textAlign: 'center', fontSize: 15}}>{item.user.given_name}</Text>
                        <Text style={{color: '#4094f0', textAlign: 'center', fontSize: 20}}>Surname: </Text>
                        <Text style={{textAlign: 'center', fontSize: 15}}>{item.user.family_name}</Text>
                        <Text style={{color: '#4094f0', textAlign: 'center', fontSize: 20}}>Chit content: </Text>
                        <Text style={{textAlign: 'center', fontSize: 15}}>{item.chit_content}</Text>
                        <Text style={{color: '#4094f0', textAlign: 'center', fontSize: 20}}>Email: </Text>
                        <Text style={{textAlign: 'center', fontSize: 15}}>{item.user.email}</Text>
                    </View>
                )
            }
            keyExtractor={({ id }, index) => id}
                />
            </View>
        );
    }
}