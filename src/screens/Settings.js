import React from 'react'
import { View, Text } from 'react-native'

export default class SettingScreen extends React.Component {
  static navigationOptions = {
    title: 'Setting',
  };

  render() {
    return(
      <View>
        <Text>Đây là trang Settings</Text>
      </View>
    );
  };
}