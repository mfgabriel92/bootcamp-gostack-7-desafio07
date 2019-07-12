import produce from 'immer'
import types from './types'

export default function cart(state = [], action) {
  switch (action.type) {
    case types.ADD_TO_CART_SUCCESS:
      return produce(state, draft => {
        draft.push(action.product)
      })
    case types.UPDATE_QUANTITY_SUCCESS:
      return produce(state, draft => {
        const i = draft.findIndex(p => p.id === action.id)

        if (i !== -1) {
          draft[i].quantity = Number(action.quantity)
        }
      })
    case types.REMOVE_ITEM:
      return produce(state, draft => {
        const i = draft.findIndex(p => p.id === action.id)

        if (i !== -1) {
          draft.splice(i, 1)
        }
      })
    default:
      return state
  }
}
