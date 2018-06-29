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
import styles from './scenes/styles';

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
        //  await AsyncStorage.setItem('userToken', 'abc');
        //  this.props.navigation.navigate('App');
        const request = require('superagent');
        let model = { email: "alan.mcleod@viability.io", password: "viability1" };

        return request
            .post('https://vapi.viability.io/user')
            .send(model)
            .then((result) => {
                console.log(result.body);
            })
    };
}

import HomeScreen from './scenes/home.js';
import OtherScreen from './scenes/Other.js';

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