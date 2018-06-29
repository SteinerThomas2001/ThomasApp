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
  createDrawerNavigator,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default StyleSheet.create({

  container: {
    width: 600,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  header: {
    marginTop: 24,
    width: 600,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'lightgray',
  },

  button: {
    marginTop: 0,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#299999'
  },

  buttonText: {
    padding: 20,
    color: 'white'
  },

  bigblue: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
    backgroundColor: 'royalblue'
  },

  red: {
    color: 'firebrick',
    fontWeight: 'bold',
    fontSize: 30,
    backgroundColor: 'royalblue',
  },

  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(150,150,150,1.0)',
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    width: 390,
  },

  icon: {
    width: 24,
    height: 24,
  },

  button2: {
    alignSelf: 'center',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  main: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  new: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  text2: {
    color: 'aquamarine',
    fontWeight: 'bold',
    fontSize: 35,
    flexDirection: 'column',
      backgroundColor: 'royalblue',
  },

  blue2: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 70,
    backgroundColor: 'royalblue',
 
  },
});