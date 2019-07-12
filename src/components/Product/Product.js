import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome'
import { formatPrice } from '../../utils/format'
import {
  Container,
  Image,
  Name,
  Price,
  ButtonWrapper,
  Button,
  ButtonIcon,
  ButtonIconText,
  ButtonText,
} from './styles'

class Product extends Component {
  render() {
    const { product, quantity, addToCart } = this.props

    return (
      <Container>
        <Image source={{ uri: product.image }} />
        <Name>{product.title}</Name>
        <Price>{formatPrice(product.price)}</Price>
        <ButtonWrapper>
          <ButtonIcon>
            <Icon name="cart-plus" size={18} color="#fff" />
            <ButtonIconText>{quantity[product.id] || 0}</ButtonIconText>
          </ButtonIcon>
          <Button onPress={() => addToCart(product.id)}>
            <ButtonText>Add to Cart</ButtonText>
          </Button>
        </ButtonWrapper>
      </Container>
    )
  }
}

Product.propTypes = {
  product: PropTypes.shape().isRequired,
  quantity: PropTypes.number.isRequired,
  addToCart: PropTypes.func.isRequired,
}

export default Product
