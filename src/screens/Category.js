import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

import ProductListItem from '../Components/ProductListItem';

export default class Category extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('categoryName')
    }
  };
  
  constructor(props) {
    super(props);

    this.state = {
      products: []
    }
  }

  componentDidMount(props) {
    const {navigation} = this.props;
    const idCategory = navigation.getParam('idCategory');

    axios.get('http://192.168.43.152:3000/products?category=' + idCategory)
      .then( res => {
        this.setState({
          products: res.data
        })
      })
      .catch( error => console.error(error) )
  }

  render() {
    return (
      <FlatList
        data= { this.state.products }
        contentContainerStyle = { styles.container }
        numColumns = {2}
        renderItem = { ({item}) =>
          <View style={ styles.wrapper }> 
            <ProductListItem product={item} />
          </View>
        }
        keyExtractor= {(item) => `${item.id}`}
      />
    );
  };
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 8
  },
  container: {
    paddingHorizontal: 8,
    paddingTop: 16
  }
});