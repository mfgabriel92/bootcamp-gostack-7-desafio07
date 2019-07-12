import { call, put, select, all, takeLatest } from 'redux-saga/effects'
import { Alert } from 'react-native'
import { addToCartSuccess, updateQuantitySuccess } from './actions'
import Api from '../../../services/Api'
import types from './types'

function* addToCart({ id }) {
  const inCart = yield select(({ cart }) => cart.find(p => p.id === id))
  const inStock = yield call(Api.get, `/stock/${id}`)
  const quantity = (inCart ? inCart.quantity : 0) + 1

  if (inStock.data.quantity === 0) {
    Alert.alert('Stock', 'Product not in stock', [{ text: 'OK' }])
    return
  }

  if (quantity > inStock.data.quantity) {
    Alert.alert('Stock', 'Product quantity out of stock', [{ text: 'OK' }])
    return
  }

  if (inCart) {
    yield put(updateQuantitySuccess(id, quantity))
    return
  }

  const product = yield call(Api.get, `/products/${id}`)
  const data = {
    ...product.data,
    quantity: 1,
  }

  yield put(addToCartSuccess(data))
}

function* updateQuantity({ id, quantity }) {
  if (quantity <= 0) return

  const inStock = yield call(Api.get, `/stock/${id}`)

  if (inStock.data.quantity === 0) {
    Alert.alert('Stock', 'Product not in stock', [{ text: 'OK' }])
    return
  }

  if (quantity > inStock.data.quantity) {
    Alert.alert('Stock', 'Product quantity out of stock', [{ text: 'OK' }])
    return
  }

  yield put(updateQuantitySuccess(id, quantity))
}

export default all([
  takeLatest(types.ADD_TO_CART, addToCart),
  takeLatest(types.UPDATE_QUANTITY, updateQuantity),
])
