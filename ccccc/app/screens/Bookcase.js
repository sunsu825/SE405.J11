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
    BGW = require('../images/wood_background.jpg');
  }

  componentDidMount(){
    return fetch('https://storyap.herokuapp.com/book',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

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
  _renderItem = ({item}) => (
    <BookcaseItem
      id={item.id}
      // tensach={item.tensach}
      thumbnail={item.image}
      // image={item.image}
      // detai={item.fielpdf}
    />
  );

  _keyExtractor = (item, index) => 
    (item.id).toString();


  render() {
    return (
      <ImageBackground source={BGW} style={{flex: 1, resizeMode:'stretch', width: Dimensions.get('window').width}}>
      <ScrollView  style={styles.container}>
        {/* <SearchBar
          showLoading
          platform="android"
          placeholder='Search...' />
        <StatusBar
          barStyle="light-content"
        /> */}
            <Text style={{marginTop:17, fontWeight:'bold', fontSize:16}}>Most Stories</Text>
              <FlatList
                horizontal
                data={this.state.dataSource}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
              />

          {/*    
          <ImageBackground source={BGR} style={styles.TypeStory}>
            
              <Text style={{marginTop:17, fontWeight:'bold', fontSize:16}}>Most Stories</Text>
                <FlatList
                  horizontal
                  data={Books}
                  keyExtractor={this._keyExtractor}
                  renderItem={this._renderItem}
                />
            
          </ImageBackground> */}
          {/*
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
          {/* <View style={{flex: 1, paddingTop:20}}>
            <FlatList
              data={this.state.dataSource}
              renderItem={({item}) => <Text>{item.image}</Text>}
              keyExtractor={({id}, index) => id}
            />
          </View> */}
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