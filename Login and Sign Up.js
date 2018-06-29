import React from 'react';
import { Button, View, Text, TextInput, StyleSheet, TouchableOpacity, Keyboard, Alert, AppRegistry, Platform, TouchableHighlight } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json

class HomeScreen extends React.Component {
 
  static navigationOptions = {
    title: 'Welcome',
  };
 
  constructor(props) {
    super(props);
    
  }
 
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
      
    
      <View style={{width: 50, height: 100, backgroundColor: 'transparent'}} />
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Sign In</Text>
                      </View>
        </TouchableOpacity>
        <View style={{width: 50, height: 20, backgroundColor: 'transparent'}} />
        <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>
            
          </View>
        </TouchableOpacity>
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign In',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
           <View style={{width: 50, height: 200, backgroundColor: 'transparent'}} />
        <TextInput
          placeholder="Username"
          placeholderTextColor="gray"
        style={{height: 40,width: 300, borderColor: 'lightgray', borderWidth: 2}}
      />  
      <View style={{width: 50, height: 8, backgroundColor: 'transparent'}} />
       <TextInput
        placeholder="Password"
        placeholderTextColor="gray"
        style={{height: 40,width: 300, borderColor: 'lightgray', borderWidth: 2}}
      />  
<View style={{width: 50, height: 20, backgroundColor: 'transparent'}} />
         <TouchableOpacity onPress={() => this.props.navigation.navigate('Success')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
                      </View>
        </TouchableOpacity>
    
        <View style={{width: 50, height: 10, backgroundColor: 'transparent'}} />
         <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Return</Text>
                      </View>
        </TouchableOpacity>
             </View>
    );
  }
}

class SignupScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign Up',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
           <View style={{width: 50, height: 130, backgroundColor: 'transparent'}} />
        <TextInput
          placeholder="Email"
          placeholderTextColor="gray"
        style={{height: 40,width: 300, borderColor: 'lightgray', borderWidth: 2}}
      />  
      <View style={{width: 50, height: 8, backgroundColor: 'transparent'}} />
       <TextInput
        placeholder="Username"
        placeholderTextColor="gray"
        style={{height: 40,width: 300, borderColor: 'lightgray', borderWidth: 2}}
      />  
<View style={{width: 50, height: 8, backgroundColor: 'transparent'}} />
       <TextInput
        placeholder="Password"
        placeholderTextColor="gray"
        style={{height: 40,width: 300, borderColor: 'lightgray', borderWidth: 2}}
      />  
      <View style={{width: 50, height: 8, backgroundColor: 'transparent'}} />
       <TextInput
        placeholder="Confirm Password"
        placeholderTextColor="gray"
        style={{height: 40,width: 300, borderColor: 'lightgray', borderWidth: 2}}
      />  
      <View style={{width: 50, height: 20, backgroundColor: 'transparent'}} />
  <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>
                      </View>
        </TouchableOpacity>

         <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Return</Text>
                      </View>
        </TouchableOpacity>
             </View>
    );
  }
}
class SuccessScreen extends React.Component {
  static navigationOptions = {
    title: 'Success',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>

      />  
<View style={{width: 50, height: 20, backgroundColor: 'transparent'}} />
         <TouchableOpacity onPress={this._onPressButton}>>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Continue</Text>
                      </View>
        </TouchableOpacity>
    
  
             </View>
    );
  }
}

class FailScreen extends React.Component {
  static navigationOptions = {
    title: 'Failed',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>

      />  
<View style={{width: 50, height: 20, backgroundColor: 'transparent'}} />
         <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Return</Text>
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
    SignUp: {
      screen: SignupScreen,
    },
    Success: {
      screen: SuccessScreen,
    },
    Failure: {
      screen: FailScreen,
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
  _onPressButton() {
    Alert.alert('Logged In!')
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
