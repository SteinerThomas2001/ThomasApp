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
  FlatList,
  SectionList,
  ScrollView,
  createDrawerNavigator,
  Image,
} from 'react-native';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

class StoreScreen extends React.Component {
  static navigationOptions = {
    title: 'Stores',
  };

  componentDidMount() {
    return AsyncStorage.getItem('userBody')
      .then((data) => {
        console.log(data);
      });
  }

  render() {
    return (
      <View style={styles.main}>

        <View style={styles.header}>
          <Button
            onPress={() => this.props.navigation.openDrawer()}
            title="Open"
          />
        </View>

        <ScrollView>
          <View style={styles.container}>
            <SectionList
              sections={[
                { title: 'A', data: ['Adam', 'Aaron', 'Anthony'] },
                { title: 'B', data: ['Britney', 'Bessie', 'Bethany'] },
                { title: 'C', data: ['Calvin', 'Casper', 'Cliff'] },
                { title: 'D', data: ['Devin', 'Dewford', 'Darrel'] },
                { title: 'E', data: ['Elizabeth', 'Elexis', 'Eggman'] },
                { title: 'F', data: ['Felix', 'Father', 'Ferrell'] },
                { title: 'G', data: ['Garon', 'George', 'Grange'] },
                { title: 'H', data: ['Harry', 'Hermoine', 'Happy'] },
                { title: 'I', data: ['Imogen', 'Issac', 'Isabella'] },
                { title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie'] },
              ]}
              renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
              renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
              keyExtractor={(item, index) => index}
            />
          </View>
          <StatusBar barStyle="default" />
        </ScrollView>

      </View>
    );
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

export default StoreScreen;