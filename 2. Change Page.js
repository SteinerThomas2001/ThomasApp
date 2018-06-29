import React from 'react';
import { Button, View, Text, TextInput, StyleSheet, TouchableOpacity, Keyboard } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>

        <View style={{ width: 50, height: 200, backgroundColor: 'transparent' }} />
        <TextInput
          placeholder="Username"
          placeholderTextColor="gray"
          style={{ height: 40, width: 300, borderColor: 'lightgray', borderWidth: 2 }}
        />
        <View style={{ width: 50, height: 8, backgroundColor: 'transparent' }} />
        <TextInput
          placeholder="Password"
          placeholderTextColor="gray"
          style={{ height: 40, width: 300, borderColor: 'lightgray', borderWidth: 2 }}
        />
        <View style={{ width: 50, height: 20, backgroundColor: 'transparent' }} />
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Log In</Text>

          </View>
        </TouchableOpacity>

        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <TouchableOpacity onPress={() => this.props.navigation.push('Details')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Refresh Page</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Go to Home</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
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
