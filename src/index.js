import './config/reactotron'
import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import Routes from './routes'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StatusBar backgroundColor="#1a1626" />
        <Routes />
      </Provider>
    )
  }
}

export default App
