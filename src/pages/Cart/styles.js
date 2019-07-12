import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const CartList = styled.FlatList``

export const ButtonWrapper = styled.View`
  flex-direction: row;
  background: #7149c1;
`

export const Button = styled(RectButton)`
  flex: 1;
  padding: 17px 10px;
  flex-direction: row;
  justify-content: center;
`

export const ButtonIcon = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.2);
  padding: 0 17px;
`

export const ButtonText = styled.Text`
  align-self: center;
  color: #fff;
  max-height: 30px;
  font-size: 18px;
`

export const ButtonTextPrice = styled(ButtonText)`
  font-size: 22px;
  font-weight: bold;
  margin-left: 5px;
`
