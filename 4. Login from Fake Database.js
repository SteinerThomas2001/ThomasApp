import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>

        <View style={{ width: 50, height: 150, backgroundColor: 'transparent' }} />
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
        <TouchableOpacity onPress={this._signInAsync}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Sign In</Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ width: 50, height: 2, backgroundColor: 'transparent' }} />
        <TouchableOpacity onPress={this._showMoreApp}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Continue</Text>
          </View>
        </TouchableOpacity>

        <View style={{ width: 50, height: 20, backgroundColor: 'transparent' }} />
        <TouchableOpacity onPress={this._signOutAsync}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Sign Out</Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }

  _showMoreApp = () => {
    this.props.navigation.navigate('Other');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

class OtherScreen extends React.Component {
  static navigationOptions = {
    title: 'Continued',
  };

  render() {
    return (
      <View style={styles.container}>

        <View style={{ width: 50, height: 20, backgroundColor: 'transparent' }} />
        <TouchableOpacity onPress={this._signOutAsync}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Sign Out</Text>
          </View>
        </TouchableOpacity>


        <StatusBar barStyle="default" />
      </View>
    );
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  },



});

const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });
const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);


