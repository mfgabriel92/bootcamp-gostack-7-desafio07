import React, { Component } from 'react'
import Container from '../../components/Container'
import Product from '../../components/Product'
import { ProductsList } from './styles'
import Api from '../../services/Api'

class Home extends Component {
  state = {
    products: [],
  }

  async componentDidMount() {
    const response = await Api.get('/products')
    this.setState({ products: response.data })
  }

  render() {
    const { products } = this.state

    return (
      <Container>
        <ProductsList
          data={products}
          extraData={products}
          keyExtractor={item => String(item.id)}
          numColumns={2}
          renderItem={({ item }) => <Product product={item} />}
        />
      </Container>
    )
  }
}

export default Home
