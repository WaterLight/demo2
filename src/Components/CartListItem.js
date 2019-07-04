import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import Skikt from '../../assets/skirt.png'
import Minus from '../../assets/minus.png'
import Plus from '../../assets/plus1.png'

import { CartContext } from '../contexts/CartContexts'

export default function CartListItem(props) {

  const {cart} = props;

  return(
    <View style={styles.container}>
      <View style={styles.infoRow}>
        <Image style={styles.imgProduct} source={Skikt}/>
        <View style={styles.nameColum}>
          <Text style={styles.nameText}>{cart.name}</Text>
          <Text style={styles.price}>{cart.price}</Text>
        </View>
        <View style={styles.quantityRow}>
          <CartContext.Consumer>
            { ({ reductionCartItem }) =>
              <TouchableOpacity opacity={0.5} onPress={ () => reductionCartItem(cart)}>
                <Image style={styles.quantityImg} source={Minus} />
              </TouchableOpacity>
            }            
          </CartContext.Consumer>
          <Text style={styles.quantityText}>{cart.quantity.length}</Text>
          <CartContext.Consumer>
            { ({ increaseCartItem }) => 
              <TouchableOpacity opacity={0.5} onPress={() => increaseCartItem(cart)}>
                <Image style={styles.quantityImg} source={Plus}/>
              </TouchableOpacity>
            }            
          </CartContext.Consumer>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    elevation: 1,
    padding: 8,
    shadowColor: '#000',    
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.8,    
    borderRadius: 4,
    marginBottom: 8,
    backgroundColor: '#FFF'
  },
  infoRow: {
    flexDirection: 'row'
  },
  imgProduct: {
    width: 80,
    height: 80,
    marginRight: 16
  },
  nameColum: {
    justifyContent: 'center',
    flex: 1
  },
  nameText: {
    // textTransform: 'uppercase',
    fontSize: 16,
    color: '#000'
  },
  price: {
    opacity: 0.8,
    fontSize: 14
  },
  quantityRow: {
    flexDirection: 'row',
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  quantityText: {
    marginHorizontal: 8,
    fontSize:32,
    color: '#000'
  },
  quantityImg: {
    width:18,
    height:18,
    marginTop: 'auto',
    marginBottom: 'auto'
  }
});