import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'
import cart from './reducers/cart/index'

const reducers = combineReducers({ cart })

const sagaMonitor = console.tron.createSagaMonitor()
const sagas = createSagaMiddleware({ sagaMonitor })

const enhancer = compose(
  console.tron.createEnhancer(),
  applyMiddleware(sagas)
)

const store = createStore(reducers, enhancer)

sagas.run(rootSaga)

export default store
