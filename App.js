/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { createAppContainer } from "react-navigation";

import AppNavigator from './AppNavigator'
import {CartProvider} from './src/contexts/CartContexts'

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return (   
      <CartProvider>     
        <AppContainer/>    
      </CartProvider>         
    );
  }
}

