import { connect } from 'react-redux'
import Product from './Product'
import { addToCart } from '../../store/reducers/cart/actions'

const mapStateToProps = state => ({
  quantity: state.cart.reduce((quantity, product) => {
    quantity[product.id] = product.quantity
    return quantity
  }, 0),
})

const mapDispatchToProps = {
  addToCart,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product)
