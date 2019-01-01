import React, {Component} from 'react';
import {
    Platform, 
    StyleSheet, 
    Text, 
    View, 
    Button, 
    TextInput, 
    Image, 
    Dimensions, 
    TouchableOpacity,
    TouchableHighlight,
    TouchableWithoutFeedback,
    ScrollView,
    ImageBackground,
    Keyboard,
    AsyncStorage,
    localStorage
} from 'react-native';
import axios, {get,post} from 'axios';
import styles from '../style/style';

//Keyboard.dismiss();
const DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

const user = {
    name: 'tuanh001',
    pass: 'tuanh001'
}
const conf = {
    headers: {
    'Content-Type': 'application/json',
    //'Authorization': 'Bearer ' + localStorage.CBRescueUserToken,      
    "Access-Control-Allow-Origin": "*",        
        }};
export default class VerticalScrollView extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            user: '',
            password: '',
            isLoggingIn: false,
            message: '',
            show_hide_pass: true,
            sour: '',
            token: '',
            idUser: '',
            name: '',
            responseLogin: ''
        }
        showPass = require('../images/show_pass.png');
        hidePass = require('../images/hide_pass.png');
        background = require('../images/Pokemon.jpg');
        logo = require('../images/logo2.png');
        BG = require('../images/BG.png');
    }

    _onPressLogin = (() => {
        let url = 'https://storyap.herokuapp.com/user/login';
        // let user1 = {

        //     "name": "sunsu005",
        //     "pass": "s005"
            
        // }
        alert(url)
        fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            
            body: JSON.stringify({
                "name": this.state.user,
                "pass": this.state.password,
                
            })
            
        }).then((response) => {
            response.json()
        }).then((responseJson) => {
            let data = responseJson;
            // this.setState({
            //     responseLogin: responseJson,
            //     token: data.token,
            //     idUser: data.idUser,
            //     name: data.name,
            //   })
            
            if(data === null || data === undefined){
                alert('username or pass wrong !!');
            } else{
                alert('user login successful !!');
                const {navigate} = this.props.navigation;
                setTimeout(() => {
                    navigate('App', null);
                }, 1000); 
                //deviceStorage.saveItem("token",responseJSON.token);
            } 
          })
          .catch((error) =>{
            console.error(error);
          });
          //alert(this.state.token);
    })

    _onChangeTextuser = ((username) => {
        this.setState({user : username});
    })

    _onChangeTextpass = ((pass) => {
        this.setState({password : pass});
    })

    // componentWillMount(){
    //     var pageUrl = 'Register';
    //     const {navigate} = this.props.navigation;
    //     setTimeout(() => {
    //         navigate(pageUrl, null);
    //       }, 1000);
    // }

    
    render(){
        
        return(
            
            <ImageBackground source={BG} style={{flex:1, resizeMode: 'contain'}}>
            
                <ImageBackground style={styles.image}>
                <DismissKeyboard>
                    <View style={styles.container}>
                        <Image source={logo} style={styles.logo} />
                        <View style={styles.form}>
                            <View style={styles.username}>
                                <TextInput 
                                    onSubmitEditing={Keyboard.dismiss}
                                    style={styles.textinput}
                                    placeholder='enter user...'
                                    onChangeText={this._onChangeTextuser}
                                />
                                <TextInput 
                                    onSubmitEditing={Keyboard.dismiss}
                                    secureTextEntry={true}
                                    style={styles.textinput}
                                    placeholder='enter pass...'
                                    onChangeText={this._onChangeTextpass}
                                />
                                {/* <Image onPress={this._onShowHidePass} style={{flex:1, resizeMode:'contain'}}/> */}
                            </View>
                            <View style={styles.ButtonLogin}>
                                <TouchableOpacity
                                    secureTextEntry={true}
                                    style={styles.button}
                                    onPress={this._onPressLogin}
                                    >
                                    <Text> Sign in </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    secureTextEntry={true}
                                    style={styles.button}
                                    onPress= {()=>{
                                        //let pageUrl = 'Register';
                                        const {navigate} = this.props.navigation;
                                        setTimeout(() => {
                                            navigate('Register', null);
                                        }, 100);
                                        //alert('move to register screen !!')
                                    }}
                                    >
                                    <Text> Sign up </Text>
                                </TouchableOpacity>
                                
                            </View>
                        </View>
                    </View>
                    </DismissKeyboard>
                </ImageBackground>
                
                </ImageBackground>
            
        );
    }
}

