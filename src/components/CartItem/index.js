import { connect } from 'react-redux'
import CartItem from './CartItem'
import { updateQuantity, removeItem } from '../../store/reducers/cart/actions'

const mapStateToProps = () => ({})

const mapDispatchToProps = {
  updateQuantity,
  removeItem,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartItem)
