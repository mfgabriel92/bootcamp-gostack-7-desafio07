import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { TouchableOpacity } from 'react-native'
import {
  Container,
  Image,
  Info,
  Name,
  Price,
  Actions,
  ItemCount,
  Count,
  Button,
} from './styles'

class CartItem extends Component {
  decrement = ({ id, quantity }) => {
    const { updateQuantity } = this.props
    updateQuantity(id, quantity - 1)
  }

  increment = ({ id, quantity }) => {
    const { updateQuantity } = this.props
    updateQuantity(id, quantity + 1)
  }

  render() {
    const { product, removeItem } = this.props

    return (
      <Container>
        <Image source={{ uri: product.image }} />
        <Info>
          <Name>{product.title}</Name>
          <Price>{product.subtotal}</Price>
          <Actions>
            <ItemCount>
              <Button onPress={() => this.decrement(product)}>
                <Icon name="minus-circle-outline" size={22} color="#7159c1" />
              </Button>
              <Count>{product.quantity}</Count>
              <Button onPress={() => this.increment(product)}>
                <Icon name="plus-circle-outline" size={22} color="#7159c1" />
              </Button>
            </ItemCount>
            <TouchableOpacity onPress={() => removeItem(product.id)}>
              <Icon name="delete" size={22} color="#7159c1" />
            </TouchableOpacity>
          </Actions>
        </Info>
      </Container>
    )
  }
}

CartItem.propTypes = {
  product: PropTypes.shape().isRequired,
  updateQuantity: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
}

export default CartItem
