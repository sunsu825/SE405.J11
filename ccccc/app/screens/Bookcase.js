import React, { Component } from 'react';
import {
  StatusBar,
  StyleSheet,
  FlatList,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Dimensions,
  Image
} from 'react-native';
import {SearchBar, Button} from 'react-native-elements';
import BookcaseItem from './BookcaseItem';
import Books from '../data/bookInfor';
import { StackNavigator } from 'react-navigation';



export default class Boookcase extends Component {
  constructor(props){
    super(props);
    this.state ={
      data : Books
    }
    BG = require('../images/bg1.jpg');
    BGR = require('../images/background-row.jpg');
  }

  componentDidMount(){
        //var url = 'http://192.168.1.4:8080/book';
        fetch('http://192.168.1.4:8080/book',{
            method: 'GET',
            headers: {
                'Authorization':'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI1YmY5MjFjNDQ2YzBlYTM5ZTJkMWFjYjYiLCJjcmVhdGVBdCI6MTU0NTIzNDI5NX0.c3HmlMQdotPmCKIKp8QX2Y4e2FiSRvwJ5aiCLkB8p4k',
                'Content-Type':"application/json;charset=UTF-8"
            },
        }).then((response) => {
            console.log("get response !!!");
            response.json()
        }).then((responseJson) => {
              console.log("parsed to json");
              let data = responseJson;
              if(data === null){
                alert("username or password wrong !!");
            } else {
                this.setState({
                    listbook: responseJson
                  })
                  //  let Page_url = 'App';
                  //  this.props.navigation.navigate(Page_url);
            }
          })
          .catch((error) =>{
            console.error(error);
          });
  }

  openDetail = (data) => {
    this.props.navigation.navigate("Details", { 
      data: data
    });
  };
  _renderItem = ({item, index}) => (
    <BookcaseItem
      //index = {index + 1}
      //id={item.id}
      //passdata = {item.title}
      //title={'Magic Stories'}
      //author={item.author}
      thumbnail={item.image}
      openDetail={()=> this.openDetail(passdata)}
    />
  );

  _keyExtractor = (item, index) => 
    (item.id).toString();


  render() {
    return (
      <ImageBackground source={BG} style={{flex: 1, resizeMode:'stretch', width: Dimensions.get('window').width}}>
      <ScrollView  style={styles.container}>
        {/* <SearchBar
          showLoading
          platform="android"
          placeholder='Search...' />
        <StatusBar
          barStyle="light-content"
        /> */}
          <ImageBackground source={BGR} style={styles.TypeStory}>
            
              <Text style={{marginTop:17, fontWeight:'bold', fontSize:16}}>Most Stories</Text>
                <FlatList
                  horizontal
                  data={this.state.listbook}
                  keyExtractor={this._keyExtractor}
                  renderItem={this._renderItem}
                />
            
          </ImageBackground>
          {/* <ImageBackground source={BGR} style={styles.TypeStory}>
            
              <Text style={{marginTop:17, fontWeight:'bold', fontSize:16}}>Most Stories</Text>
                <FlatList
                  horizontal
                  data={Books}
                  keyExtractor={this._keyExtractor}
                  renderItem={this._renderItem}
                />
            
          </ImageBackground>
          <ImageBackground source={BGR} style={styles.TypeStory}>
            
              <Text style={{marginTop:17, fontWeight:'bold', fontSize:16}}>Most Stories</Text>
                <FlatList
                  horizontal
                  data={Books}
                  keyExtractor={this._keyExtractor}
                  renderItem={this._renderItem}
                />
            
          </ImageBackground>
          <ImageBackground source={BGR} style={styles.TypeStory}>
            
              <Text style={{marginTop:17, fontWeight:'bold', fontSize:16}}>Most Stories</Text>
                <FlatList
                  horizontal
                  data={Books}
                  keyExtractor={this._keyExtractor}
                  renderItem={this._renderItem}
                />
            
          </ImageBackground> */}
        
      </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#E7FAD3',
    
  },
  TypeStory:{
    height:220,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    
    paddingLeft:0, 
    paddingRight:0,
    resizeMode:'cover'
  },
});