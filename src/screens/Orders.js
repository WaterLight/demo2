import React from 'react'
import { View, Text } from 'react-native'

export default class OderScreen extends React.Component {
  static navigationOptions = {
    title: 'Oders',
  };

  render() {
    return(
      <View>
        <Text>Đây là trang Oders</Text>
      </View>
    );
  };
}