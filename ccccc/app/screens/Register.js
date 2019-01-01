import React, {Component} from 'react';
import {
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    Dimensions, 
    TouchableOpacity,
    TouchableHighlight,
    ImageBackground,
    Image,
    TouchableWithoutFeedback,
    Keyboard,
    Platform,
    ToastAndroid,
    AsyncStorage,
    FlatList
} from 'react-native';
//import { createStackNavigator} from 'react-navigation';
import styles from '../style/style';
import deviceStorage from '../src/deviceStorage';

const DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

export default class Register extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            userName: '',
            password: '',
            message: '',
            token: ''
        }

        logo = require('../images/logo2.png');
        BG = require('../images/BG.png');
    }

    componentDidMount(){
        alert("XXXXXXXXXX")
    }
        newUser = (()=>{
            const serverURL = 'https://storyap.herokuapp.com/user/register';
            let user = this.state.userName;
            let pass = this.state.password;
            alert(serverURL +"-"+ user +"-"+ pass);
            
            //check in here
            fetch(serverURL,{
                    method: 'POST',
                    headers: {
                        'Accept' : 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        "name": this.state.userName,
                        "pass": this.state.password,
                        
                    })
                }).then((response)=>{
                    response.json();
                }).then((responseJSON)=>{
                    this.setState({
                        token: responseJSON.token,
                        idUser: responseJson.idUser,
                        name: responseJson.name
                      }, function(){
                        //   if(responseJSON !== null){
                        //     var { navigate } = this.props.navigation;
                        //     setTimeout(() => {
                        //         navigate('App', null);
                        //       }, 1000);
                        //   }
                        //alert("Register successful !! token : " + this.state.token);    
                      });
                      //deviceStorage.saveItem("token",responseJSON.token);
                }).catch((error)=>{
                    console.warn(error);
                });
                //alert(this.state.token);
        });

        _onPressCancel=(()=>{
            this.props.navigation.navigate('Login');
        })
    
        _onChangeTextuser = ((user) => {
            this.setState({userName : user});
        })
    
        _onChangeTextpass = ((pass) => {
            this.setState({password : pass});
        })

    render(){
        
        return(
            
            <ImageBackground source={BG}  style={{flex:1, resizeMode: 'contain'}}>
                <DismissKeyboard>
                <View 
                    style={styles.container}
                    behavior="padding"
                    
                    keyboardVerticalOffset = "-2000" 
                >
                        <Image source={logo} style={styles.logo} />
                        <View style={styles.form_Register}>
                            <View style={styles.username_Register}>
                                <TextInput 
                                    
                                    style={styles.textinput}
                                    placeholder='Type username...'
                                    onChangeText={this._onChangeTextuser}
                                />
                                <TextInput 
                                    onChangeText={this._onChangeTextpass}
                                    secureTextEntry={true}
                                    style={styles.textinput}
                                    placeholder='Type password...'
                                />

                        
                            
                            </View>
                            <View style={styles.ButtonRegister}>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={this.newUser}
                                    >
                                    <Text> Register </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.button}
                                    keyboardShouldPersistTaps={true}
                                    onPress={this._onPressCancel}
                                >
                                    <Text> Cancel </Text>
                                </TouchableOpacity>
                                
                            </View>
                        </View>
                    </View>
                </DismissKeyboard>                
            </ImageBackground>
            
            
        );
    }
}

