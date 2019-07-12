import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Home from './index'

export default {
  screen: Home,
  navigationOptions: ({ navigation }) => ({
    headerTitle: 'Home',
    headerRight: (
      <TouchableOpacity
        style={{ marginRight: 20 }}
        onPress={() => navigation.navigate('Cart')}
      >
        <Icon name="shopping-cart" size={23} color="#FFF" />
      </TouchableOpacity>
    ),
  }),
}
