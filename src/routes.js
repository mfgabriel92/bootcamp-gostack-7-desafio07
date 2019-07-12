import { createAppContainer, createStackNavigator } from 'react-navigation'
import Home from './pages/Home/config'
import Cart from './pages/Cart/config'

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Cart,
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#241f33',
        },
        headerTintColor: '#fff',
      },
    }
  )
)

export default Routes
