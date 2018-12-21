/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class AddBook extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to AddBook!</Text>
        <XXX />
      </View>
    );
  }
}

class XXX extends Component{
  render(){
    return(
      <Text>XXXXXX</Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
