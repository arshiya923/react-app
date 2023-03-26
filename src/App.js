import React from 'react'
import Product from './components/Product/Product'

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
        const btnStyle = {
            backgroundColor: '#7B1FA2',
            color: '#ffffff',
            font: 'inherit',
            border: 'none',
            outline: 'none',
            borderRadius: '3px',
            padding: '.6rem',
            margin: '.6rem auto'

        }

        let products = null

        if (this.state.showProducts) {
            products = (

                <div>
                    {
                        this.state.products.map((item, index) => {
                            return <Product
                                name={item.name}
                                price={item.price}
                                click={() => this.deleteProductHandler(index)}
                                change={(event) => this.ChangeNameHandler(event, item.id)}
                                key={index}
                            />
                        })
                    }
                </div>
            )
        }

        return (
            <div className='center'>
                <h2>React App</h2>
                <p>Hello World !</p>

                <button style={btnStyle} onClick={this.toggleProductHandler}>
                    Show/Hide Products
                </button>

                {products}

            </div>
        )
    }
}

export default App
