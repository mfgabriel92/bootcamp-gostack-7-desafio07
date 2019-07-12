import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome'
import Container from '../../components/Container'
import EmptyCart from '../../components/EmptyCart'
import CartItem from '../../components/CartItem'
import {
  CartList,
  ButtonWrapper,
  Button,
  ButtonIcon,
  ButtonText,
  ButtonTextPrice,
} from './styles'

class Cart extends Component {
  render() {
    const { total, cart } = this.props

    if (cart.length === 0) {
      return (
        <Container>
          <EmptyCart />
        </Container>
      )
    }

    return (
      <Container>
        <CartList
          data={cart}
          extraData={cart}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <CartItem product={item} />}
        />
        <ButtonWrapper>
          <ButtonIcon>
            <Icon name="check" size={18} color="#fff" />
          </ButtonIcon>
          <Button>
            <ButtonText>Pay</ButtonText>
            <ButtonTextPrice>{total}</ButtonTextPrice>
          </Button>
        </ButtonWrapper>
      </Container>
    )
  }
}

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  total: PropTypes.string.isRequired,
}

export default Cart
