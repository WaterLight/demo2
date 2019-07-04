import React from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import axios from 'axios'

import CartListItem from '../Components/CartListItem';
import { CartContext } from '../contexts/CartContexts'

export default class CartScreen extends React.Component {
  static navigationOptions = {
    title: 'Cart',
  };

  render() {
    return (
      <View>
        <View style={styles.viewFlatlist}>
          <CartContext.Consumer>
            { ({cartItems}) => 
              <FlatList 
              data={cartItems}
              contentContainerStyle= {styles.container}
              renderItem = { ({item}) => 
                <CartListItem cart={item} />
              }
              keyExtractor = {(item) => `${item.id}00`}
              />
            }        
          </CartContext.Consumer>
        </View>
        <View style={styles.totalRow}>
          <CartContext.Consumer>
            {({getTotal}) => <Text style={styles.totalPrice}>{getTotal()}</Text>}            
          </CartContext.Consumer>
          <TouchableOpacity activeOpacity={0.5} >
            <Text style={styles.order}>ĐẶT HÀNG</Text> 
          </TouchableOpacity>
        </View>     
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingTop: 16
  },
  totalRow: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 8,
    width: '100%',
    alignItems: 'center'
  },
  viewFlatlist: {
    height:'90%',
    backgroundColor: '#eee',
    marginBottom: 8
  },
  totalPrice: {
    fontSize: 36,
    marginRight: 'auto',
    color: '#000'
  },
  order: {
    marginLeft: 'auto',
    borderRadius: 4,
    backgroundColor: 'blue',
    fontSize: 24,
    paddingHorizontal: 8,
    paddingVertical: 4,
    color: '#fff'
  }
});