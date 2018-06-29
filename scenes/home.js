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

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
            <Image
                style={[styles.icon, { tintColor: tintColor }]}
            />
        )
    };

    render() {
        return (
            <View style={styles.main}>

                <View style={styles.header}>
                    <Button
                        onPress={() => this.props.navigation.openDrawer()}
                        title="Open"
                    />
                </View>

                <View style={{ width: 600, height: 100, backgroundColor: 'royalblue' }} />

                <Image
                    style={{ width: 400, height: 200, backgroundColor: 'royalblue' }}
                    source={{ uri: 'https://eduzon.co/wp-content/uploads/2018/04/welcome-featured-image.jpg' }}
                />

                <View style={{ width: 600, height: 100, backgroundColor: 'royalblue' }} />

                <Text style={styles.bigblue}>      Homepage of Thomas' App      </Text>

                <View style={styles.new}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SignIn')}>

                        <Text style={styles.text2}>                      ⇚Sign Out                             </Text>
                    </TouchableOpacity>
                </View>

                <View style={{ width: 500, height: 90, backgroundColor: 'royalblue' }} />

                <View style={{ width: 700, height: 100, backgroundColor: 'royalblue' }} />

                <View style={{ width: 200, height: 20, backgroundColor: 'royalblue' }} />

                <View style={{ width: 500, height: 40, backgroundColor: 'white' }} />

                <View style={{ width: 700, height: 20, backgroundColor: 'royalblue' }} />

                <View style={{ width: 500, height: 40, backgroundColor: 'white' }} />

                <View style={{ width: 200, height: 20, backgroundColor: 'royalblue' }} />

                <View style={{ width: 700, height: 100, backgroundColor: 'royalblue' }} />

                <View style={{ width: 500, height: 90, backgroundColor: 'royalblue' }} />

            </View>
        );
    }

    _showMoreApp = () => {
        this.props.navigation.navigate('Store');
    };

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
}

export default HomeScreen;
