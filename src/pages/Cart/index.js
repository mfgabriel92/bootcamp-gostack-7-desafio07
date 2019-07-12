import { connect } from 'react-redux'
import { formatPrice } from '../../utils/format'
import Cart from './Cart'

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.quantity),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  ),
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart)
