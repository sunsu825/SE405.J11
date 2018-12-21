import React, { Component } from 'react';
import {
    Image,
    Dimensions,
    View,
    StatusBar,
    AsyncStorage,
    Navi
  } from 'react-native';

import { createStackNavigator} from 'react-navigation';

var KEY_STORAGE = 'key_access_token';

export default class FlashScreen extends Component{
    constructor(props){
        super(props);
        img = require('../images/book-fes.jpg')
    }

    componentWillMount(){
        var pageUrl = 'Login';
        try {
            AsyncStorage.getItem(KEY_STORAGE).then((user_data_json)=>{
                let userdata = JSON.parse(user_data_json);
                if(userdata != undefined){
                    pageUrl = 'App';
                }
            });
        } catch (error) {
            console.log('AsyncStorage error: ' + error.message);
        }

        const {navigate} = this.props.navigation;
        setTimeout(() => {
            navigate(pageUrl, null);
          }, 1000);
    }

    

    render(){
        return(
            <View style={{flex:1}}>
                <Image source={img} 
                style={{flex: 1, resizeMode:'stretch', width: Dimensions.get('window').width}}/>
            </View>
            
        )
    }
}