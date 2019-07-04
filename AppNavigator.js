import React from "react";
import { View, Text, Alert, StyleSheet } from "react-native";
import { createStackNavigator, createBottomTabNavigator } from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome'

import Categories from './src/screens/Categories'
import Category from './src/screens/Category'
import Carts from './src/screens/Cart'
import Orders from './src/screens/Orders'
import Settings from './src/screens/Settings'

import { CartContext } from './src/contexts/CartContexts'

const color = {
  ACTIVE: '#147efb',
  INACTIVE: '#ccc'
}

const CategoryStack = createStackNavigator({
  Categories: {
    screen: Categories
  },
  Category: {
    screen: Category
  }
});
CategoryStack.navigationOptions = ({
  tabBarLabel: 'Home',
  tabBarIcon: ({focused}) => {
    return <Icon name="globe"
      size={24}
      color = { focused ? color.ACTIVE : color.INACTIVE }
    />
  }
});

const CartStack = createStackNavigator({
  Carts: {
    screen : Carts
  }
}) 
CartStack.navigationOptions = ({
  tabBarLabel: 'Carts',
  tabBarIcon: ({focused}) => {
    return(
      <CartContext.Consumer>
        { ({cartItems}) =>
          <View style={styles.container}>
            <Icon name="cart-plus" size={24} color={ focused ? color.ACTIVE : color.INACTIVE } />
            { cartItems.length > 0 && (
              <View style={styles.badge}>               
                <Text style={styles.badgeCount}>{cartItems.length}</Text>                   
              </View>
            )}
          </View>
        }              
      </CartContext.Consumer>
    )
  }
});

const OrderStack = createStackNavigator({
  Orders: {
    screen : Orders
  }
}) 
OrderStack.navigationOptions = ({
  tabBarLabel: 'Orders',
  tabBarIcon: ({focused}) => {
    return <Icon name="shopping-bag"
      size={24}
      color = { focused ? color.ACTIVE : color.INACTIVE }
    />
  }
});

const SettingStack = createStackNavigator({
  Settings: {
    screen : Settings
  }
}) 
SettingStack.navigationOptions = ({
  tabBarLabel: 'Setting',
  tabBarIcon: ({focused}) => {
    return <Icon name="users"
      size={24}
      color = { focused ? color.ACTIVE : color.INACTIVE }
    />
  }
});

const AppNavigator = createBottomTabNavigator(
  {
    Home: CategoryStack,
    Carts: CartStack,
    Orders: OrderStack,
    Settings: SettingStack
  }
)

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    right: -6,
    top: -3,
    backgroundColor: 'red',
    borderRadius: 6,
    width: 12,
    height: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: { 
    width: 24, 
    height: 24, 
    margin: 5 
  },
  badgeCount: { 
    color: 'white', 
    fontSize: 10, 
    fontWeight: 'bold' 
  }
});

export default AppNavigator;