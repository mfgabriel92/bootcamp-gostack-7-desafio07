import styled from 'styled-components/native'

export const Container = styled.View`
  padding: 10px;
  margin: 1px 5px;
  flex: 1;
  flex-direction: row;
  background: #fff;
`

export const Image = styled.Image`
  width: 150px;
  height: 150px;
  margin-right: 20px;
`

export const Info = styled.View`
  flex-direction: column;
  flex: 1;
`

export const Name = styled.Text`
  margin-top: 5px;
  font-weight: bold;
  font-size: 16px;
`

export const Price = styled.Text`
  margin-top: 10px;
  font-size: 15px;
  color: #555;
`

export const Actions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
  align-items: flex-end;
`

export const ItemCount = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Count = styled.Text`
  margin: 0 12px;
  font-size: 15px;
`

export const Button = styled.TouchableOpacity`
  background: transparent;
`
