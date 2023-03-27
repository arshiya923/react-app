import React from 'react'
import ProductList from './components/ProductList/ProductList'
import Main from './components/Main/Main'

import './App.css'

class App extends React.Component {
    state = {
        products: [
            { id: 1, name: 'Chai', price: 2500 },
            { id: 2, name: 'Coffee', price: 3000 },
            { id: 3, name: 'OJ', price: 1500 }
        ],
        showProducts: false
    }

    ChangeNameHandler = (event, id) => {
        const productIndex = this.state.products.findIndex((item) => {
            return item.id === id
        })
        const product = {
            ...this.state.products[productIndex]
        }

        product.name = event.target.value

        const products = [...this.state.products]

        products[productIndex] = product

        this.setState({
            products
        })
    }

    toggleProductHandler = () => {
        const show = this.state.showProducts
        this.setState({
            showProducts: !show
        })
    }

    deleteProductHandler = (productIndex) => {
        const products = [...this.state.products]
        products.splice(productIndex, 1)
        this.setState({
            products
        })
    }

    render () {
        let products = null

        if (this.state.showProducts) {
            products = (

                <div>
                    <ProductList
                        products={this.state.products}
                        click={this.deleteProductHandler}
                        change={this.ChangeNameHandler}
                    />
                </div>
            )
        }

        return (
            <div className='center'>
                <h2>React App</h2>

                <Main click={this.toggleProductHandler} />

                {products}

            </div>
        )
    }
}

export default App
