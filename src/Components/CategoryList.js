import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import Skikt from '../../assets/skirt.png'

export default function CategoryList(props) { 
  
  const { item, onPress } = props; 
  return (
    <TouchableOpacity 
      activeOpacity={0.5}
      onPress={onPress}
    >
      <View style={styles.container}>
        <Text style={styles.text} >{item.name}</Text>
        <Image source={Skikt} style={styles.img} />        
      </View>
    </TouchableOpacity>
  );

}

const styles = StyleSheet.create({
  img: {
    width: 64, height: 64
  },
  text: {
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 8,
    color: '#000'
  },
  container: {
    elevation: 1,
    alignItems: 'center',
    padding: 8,
    shadowColor: '#000',    
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.8,    
    borderRadius: 4,
    marginBottom: 8,
    backgroundColor: '#FFF'
  }
});