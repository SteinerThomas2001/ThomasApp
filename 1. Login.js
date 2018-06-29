import React, { Component } from 'react';
import { Alert, AppRegistry, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, TextInput, View } from 'react-native';

export default class login extends Component {
  _onPressButton() {
    Alert.alert('Logged In!')
  }
  constructor(props) {
    super(props);
    this.state = { text: 'username' };
  }

  render() {
    return (

      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <TextInput
          style={{ height: 40, width: 300, borderColor: 'lightgray', borderWidth: 2 }}
          value={this.state.text}
        />
        <View style={{ width: 50, height: 8, backgroundColor: 'white' }} />
        <TextInput
          style={{ height: 40, width: 300, borderColor: 'lightgray', borderWidth: 2 }}
          value={this.state.text}
        />
        <View style={{ width: 50, height: 20, backgroundColor: 'white' }} />
        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Log In</Text>

          </View>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    width: 300,
    alignItems: 'center',
    backgroundColor: '#299999'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => login);
