import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

import CategoryList from '../Components/CategoryList'

export default class Categories extends Component {
  static navigationOptions = {
    title: 'Categories',
  };
  constructor(props) {
    super(props);

    this.state = {
      Categories: []
    }
  }

  componentDidMount() {
    axios.get('http://192.168.43.152:3000/Categories')
      .then( res => this.setState({
        Categories: res.data
      }))
      .catch( error => console.error(error) )
      
  }

  render() {
    const { Categories } = this.state;
    const { navigation } = this.props;
    return (
      <FlatList 
        data= { Categories }
        renderItem = { ({item}) => <CategoryList
          item= {item}
          onPress={() => navigation.navigate('Category', {
            categoryName: item.name,
            idCategory: item.id
          })}
        />}
        keyExtractor= {(item) => `${item.id}`}
        contentContainerStyle = { styles.container }
      />
    );
  };
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingTop: 16,
    paddingRight: 16,
  }
});