import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    View,
    Dimensions,
  } from 'react-native';
import { Icon } from 'react-native-elements';

export default class BookcaseItem extends Component {
  constructor(props){
    super(props);
    this.state={
      clickFavor: false,
    }
  }

  _onPress = () => {
    let id = this.props.id;
    this.props.navigation.navigate('Detail', {id:id})
  }

  TF = () => {this.setState({
    clickFavor: !this.state.clickFavor
  })
  }
    render() {
        return(
          <TouchableOpacity onPress={this._onPress}>
              <View style={styles.rowContainer}>
              {/* <View style={styles.rowText}>
                  <Text style={styles.title} numberOfLines={2} ellipsizeMode ={'tail'}>
                    {this.props.title}
                  </Text>
              </View> */}
                <Image source={{uri: this.props.image}}
                style={styles.thumbnail}
                resizeMode="cover" />
                {/* <View style={styles.rowText}>
                  <Text style={styles.title} numberOfLines={2} ellipsizeMode ={'tail'}>
                    {this.props.title}
                  </Text>
                  <Text style={styles.author} numberOfLines={1} ellipsizeMode ={'tail'}>
                    {this.props.author}
                  </Text>
                  <Text>{this.props.id}</Text>
                  <Text>{this.props.index}</Text>
                </View> */}
                {/* <TouchableOpacity 
                  onPress={this.TF}>
                  <Icon 
                    size={10}
                    style={styles.fav}
                    raised
                    name='heart'
                    color= {this.state.clickFavor ? '#f50' : '#000000'}
                    type='font-awesome'
                    
                  />
              </TouchableOpacity> */}
            </View>
          </TouchableOpacity>
          
        );
    }
}

const styles = StyleSheet.create({
  rowContainer: {
    //flexDirection: 'row',
    backgroundColor: '#FFF',
    width: 100,
    height: 150,
    //padding: 2,
    marginRight: 1,
    marginLeft: 1,
    marginTop: 4,
    //borderRadius: 5,
    //shadowOffset:{  width: 1,  height: 1,  },
    //shadowColor: '#CCC',
    //shadowOpacity: 1.0,
    //shadowRadius: 1
  },
  title: {
    //paddingLeft: 10,
    //paddingTop: 0,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000000'
  },
  author: {
    paddingLeft: 10,
    marginTop: 5,
    fontSize: 14,
    color: '#777'
  },
  fav: {
    marginRight: 2,
    marginBottom: 2,
  },
  thumbnail: {
    flex: 1,
    //height: undefined,
    //width: undefined
  },
  rowText: {
    flex: 4,
    flexDirection: 'column'
  }
  });