import types from './types'

export function addToCart(id) {
  return {
    type: types.ADD_TO_CART,
    id,
  }
}

export function addToCartSuccess(product) {
  return {
    type: types.ADD_TO_CART_SUCCESS,
    product,
  }
}

export function updateQuantity(id, quantity) {
  return {
    type: types.UPDATE_QUANTITY,
    id,
    quantity,
  }
}

export function updateQuantitySuccess(id, quantity) {
  return {
    type: types.UPDATE_QUANTITY_SUCCESS,
    id,
    quantity,
  }
}

export function removeItem(id) {
  return {
    type: types.REMOVE_ITEM,
    id,
  }
}
