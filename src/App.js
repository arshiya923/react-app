import React from 'react'
import Product from './components/Product/Product'

import './App.css'

class App extends React.Component {

    state = {
        Products : [
            {name : 'Chai', price: 2500},
            {name : 'Coffee', price: 3000},
            {name : 'OJ', price: 1500},
        ],
        showProducts : false
    }

    ChangeNameHandler = (event) => {
        this.setState({
            Products : [
                {name : 'Chai', price: 3000},
                {name : 'Coffee', price: 3500},
                {name : 'OJ', price: 2000},
            ],
            showProducts : this.state.showProducts
        })
    }

    

    toggleProductHandler = () => {
        const show = this.state.showProducts
        this.setState({
            showProducts : !show
        })
    }

    render(){

        const btnStyle = {
            backgroundColor : '#7B1FA2',
            color : '#ffffff',
            font : 'inherit',
            border : 'none',
            outline : 'none',
            borderRadius : '3px',
            padding : '.6rem',
            margin : '.6rem auto'

        }

        let products = null

        if(this.state.showProducts)
        {
            products = (

                <div>
                    {
                        this.state.Products.map((item) => {
                            return <Product 
                                        name={item.name}
                                        price={item.price}
                            />
                        })
                    }
                </div>
                )
        }

        return(
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