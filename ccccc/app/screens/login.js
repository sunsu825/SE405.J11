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
    username: 'TuAnh',
    pass: '12345678'
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
            name: ''
        }
        showPass = require('../images/show_pass.png');
        hidePass = require('../images/hide_pass.png');
        background = require('../images/Pokemon.jpg');
        logo = require('../images/logo2.png');
        BG = require('../images/BG.png');
    }

    // _onShowHidePass = (() => {
    //      this.setState({show_hide_pass : !show_hide_pass})
        
    // })

    // sor = (()=>{
    //     this.state.show_hide_pass ? (this.setState = ({sour : showPass})) : (this.setState = ({sour : hidePass}))

    // })
    
    _onPressLogin = (() => {
        // let url = '192.168.137.197:8080/user/login';
        // let name = "tuanh003";
        // let pass = "Monday-03";
        // var user = {
        //     name:"tuanh003",
        //     pass:"Monday-03"
        // }
        //alert(name + '--' + pass)
        //console.log(`${name} + '--' + ${pass}`)
        // fetch('192.168.198.2:8080/user/login',{
        //     method: 'POST',
        //     headers: {
        //         //'Accept':'application/json',
        //         'Content-Type':'application/json'
        //     },
        //     // body: JSON.stringify({
        //     //     // name: `${name}`,
        //     //     // pass: `${pass}`
        //     //     name: 'tuanh003',
        //     //     pass: 'Monday-03'
        //     // })
        //     Body: JSON.stringify(user)
            
        // }).then((response) => {
        //     //console.log("get response !!!");
        //     response.json()
        // })
        //   .then((responseJson) => {
        //       //console.log("parsed to json");
        //       let data = responseJson;
        //       if(data === null){
        //         alert("username or password wrong !!");
        //     } else {
        //         this.setState({
        //             token: data.token,
        //             idUser: data.idUser,
        //             name: data.name,
        //           })
        //           alert(`user ${name} login successful !!`);
        //            let Page_url = 'App';
        //            this.props.navigation.navigate(Page_url);
        //     }
        //   })
        //   .catch((error) =>{
        //     console.error(error);
        //   });
        var user = {
            name: this.state.name,
            pass: this.state.password
          };
        var use = {
            name: "tuanh001",
            pass: "tuanh001"
        }
        axios.post('192.168.198.2:8080/user/login',{ use })
        .then(res => {
            //console.log(res);
            //console.log(res.data);
            // if(res.data !== null){
            //     let Page_url = 'App';
            //     this.props.navigation.navigate(Page_url);
            // } else {
            //     alert("login failed !!")
            // }
            var txtFile = "c:/test.txt";
            var file = new File(txtFile);
            var str = res.data.token;

            file.open("w"); // open file with write access
            file.writeln("First line of text");
            file.writeln("Second line of text " + str);
            file.write(str);
            file.close();
        })
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
                                        let pageUrl = 'Register';
                                        const {navigate} = this.props.navigation;
                                        setTimeout(() => {
                                            navigate(pageUrl, null);
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

