import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

export const Container = styled.View`
  padding: 10px;
  margin: 2px;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  background: #fff;
`

export const Image = styled.Image`
  height: 150px;
`
export const Name = styled.Text`
  margin-top: 5px;
  font-weight: bold;
  font-size: 13px;
`

export const Price = styled.Text`
  margin-top: 5px;
  font-size: 13px;
  color: #555;
`

export const ButtonWrapper = styled.View`
  flex-direction: row;
  background: #7149c1;
  margin-top: 10px;
`

export const Button = styled(TouchableOpacity)`
  flex: 1;
  padding: 10px;
`

export const ButtonIcon = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.2);
  padding-left: 7px;
  padding-right: 7px;
`

export const ButtonIconText = styled.Text`
  margin-left: 5px;
  color: #fff;
  font-size: 11px;
`

export const ButtonText = styled.Text`
  align-self: center;
  color: #fff;
  max-height: 30px;
  font-weight: bold;
`
