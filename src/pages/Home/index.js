import { connect } from 'react-redux'
import Home from './Home'

const mapStateToProps = state => ({
  quantity: state.cart.reduce((quantity, product) => {
    quantity[product.id] = product.quantity
    return quantity
  }, 0),
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
