import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class Profile extends Component {
  render() {
    const { params } = this.props.navigation.state;

    const data = params ? params.data : null;  
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Book Detail !</Text>
        <Text>{data}</Text>
      </View>
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
