import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    View,
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
            <View style={styles.rowContainer}>
                
            </View>
          
          
        );
    }
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    height: 100,
    padding: 8,
    marginRight: 1,
    marginLeft: 1,
    marginTop: 4,
    borderRadius: 5,
    shadowOffset:{  width: 1,  height: 1,  },
    shadowColor: '#CCC',
    shadowOpacity: 1.0,
    shadowRadius: 1
  },
  title: {
    paddingLeft: 10,
    paddingTop: 0,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#777'
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
    height: undefined,
    width: undefined
  },
  rowText: {
    flex: 4,
    flexDirection: 'column'
  }
  });