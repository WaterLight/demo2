import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { CartContext } from '../contexts/CartContexts';

export default function ProductListItem(props) { 
  
  const { product } = props; 

  return (
    <View style={styles.shadow}>
      <View style={styles.container}>
        <Image style={styles.img} source={ {uri: product.img}} />
        <View style={styles.info}>
          <Text style={styles.name} >{product.name}</Text>
          <View style={styles.priceRow}>
            <Text style={styles.price}>{product.price}</Text>            
            
            <CartContext.Consumer>             
              {({addToCart}) => 
                <TouchableOpacity activeOpacity={0.5} onPress= {() => addToCart(product)} >
                  <Text style={styles.addCart} >
                    Mua ++
                  </Text>
                </TouchableOpacity> }                          
            </CartContext.Consumer>            
            
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 160, height: 150,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 4
  },
  name: {
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 4,
    color: '#000',
    marginRight: 'auto'
  },
  container: {   
    padding: 4    
  },
  shadow: {
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.8,    
    borderRadius: 4,
    marginBottom: 8,
    backgroundColor: '#FFF'
  },
  info: {
    padding: 4
  },
  priceRow: {
    flexDirection: 'row'
  },
  price: {
    opacity: 0.8,
    marginRight: 'auto',
    fontSize: 14
  },
  addCart: {
    color: 'blue',
    marginRight: 'auto',
    textTransform: 'uppercase'
  }
});