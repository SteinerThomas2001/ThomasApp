import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Animatable,
  AppRegistry,
  BlinkView,
  Button,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  document,
  Image,
} from 'react-native';
import { createStackNavigator, createSwitchNavigator, createDrawerNavigator } from 'react-navigation';
import styles from './scenes/styles';

class SignInScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      showError: boolean = false,
    };
  }

  static navigationOptions = {
    title: 'Sign In',
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', }}>

        <View style={{ width: 750, height: 125, backgroundColor: 'royalblue' }} />

        <Text style={styles.blue2} >     Thomas' App      </Text>

        <View style={{ width: 750, height: 125, backgroundColor: 'royalblue' }} />

        <View style={{ width: 750, height: 8, backgroundColor: 'transparent' }} />

        <TextInput
          placeholder="Username"
          ref='username'
          onFocus={this.onUsernameFocus}
          placeholderTextColor="gray"
          style={{ height: 40, width: 300, borderColor: 'lightgray', borderWidth: 2 }}
          onChangeText={(text) => this.setState({ username: text })}
        />

        <View style={{ width: 50, height: 8, backgroundColor: 'transparent' }} />

        <TextInput
          placeholder="Password"
          placeholderTextColor="gray"
          style={{ height: 40, width: 300, borderColor: 'lightgray', borderWidth: 2 }}
          onChangeText={(text) => this.setState({ password: text })}
        />

        <View style={{ width: 50, height: 20, backgroundColor: 'transparent' }} />

        <TouchableOpacity onPress={this._signInAsync}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Sign In</Text>
          </View>
        </TouchableOpacity>

        <View style={{ width: 50, height: 5, backgroundColor: 'transparent' }} />

        <Text> Don't have an account? </Text>

        <View style={{ width: 50, height: 8, backgroundColor: 'transparent' }} />

        <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </View>
        </TouchableOpacity>

        <View style={{ width: 750, height: 8, backgroundColor: 'transparent' }} />

        {this.state.showError &&
          <View>
            <Text style={styles.red} >                           Error Signing In                               </Text>
          </View>
        }
        <View style={{ width: 750, height: 400, backgroundColor: 'royalblue' }} />
      </View>
    );
  }

  _signInAsync = async () => {
    const request = require('superagent');
    let model = { email: this.state.username, password: this.state.password };

    return request
      .post('https://vapi.viability.io/user')
      .send(model)
      .then((result) => {
        console.log(result.body);
        return AsyncStorage.setItem('userBody', JSON.stringify(result.body))
          .then(() => {
            this.props.navigation.navigate('App');
          });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ showError: true });
      })
  };
}

import HomeScreen from './scenes/home.js';
import StoreScreen from './scenes/Store.js';
import SignUpScreen from './scenes/SignUp.js';

class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const AppStack = createDrawerNavigator({ Home: HomeScreen, Store: StoreScreen, });
const AuthStack = createStackNavigator({ SignIn: SignInScreen, SignUp: SignUpScreen });

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'App', //Changing the orange '...' changes the screen the app opens to.
  }
);


