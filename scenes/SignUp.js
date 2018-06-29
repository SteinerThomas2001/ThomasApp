import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    Animatable, 
    BlinkView,
    Button,
    StatusBar,
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

class SignUpScreen extends React.Component {
    static navigationOptions = {
        title: 'Sign Up',
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>

                <View style={{ width: 700, height: 80, backgroundColor: 'royalblue' }} />

                <Text style={styles.blue2} >       Join Today         </Text>

                <View style={{ width: 700, height: 80, backgroundColor: 'royalblue' }} />

                <View style={{ width: 50, height: 8, backgroundColor: 'transparent' }} />
                
                <TextInput
                    placeholder="Email"
                    placeholderTextColor="gray"
                    style={{ height: 40, width: 300, borderColor: 'lightgray', borderWidth: 2 }}
                />

                <View style={{ width: 50, height: 8, backgroundColor: 'transparent' }} />

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

                <View style={{ width: 50, height: 8, backgroundColor: 'transparent' }} />

                <TextInput
                    placeholder="Confirm Password"
                    placeholderTextColor="gray"
                    style={{ height: 40, width: 300, borderColor: 'lightgray', borderWidth: 2 }}
                />

                <View style={{ width: 50, height: 20, backgroundColor: 'transparent' }} />

                <TouchableOpacity onPress={() => this.props.navigation.navigate('SignIn')}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </View>
                </TouchableOpacity>

                <View style={{ width: 50, height: 20, backgroundColor: 'transparent' }} />

                <TouchableOpacity onPress={() => this.props.navigation.navigate('SignIn')}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Return</Text>
                    </View>
                </TouchableOpacity>

                <View style={{ width: 50, height: 8, backgroundColor: 'transparent' }} />

                <View style={{ width: 600, height: 500, backgroundColor: 'royalblue' }} />
            </View>
        );
    }
}

export default SignUpScreen; 