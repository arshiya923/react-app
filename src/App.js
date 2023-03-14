import React from 'react'
import Product from './components/Products/Products'

class App extends React.Component {

    state = {
        Products : [
            {name : 'Chai', price: 2500},
            {name : 'Coffee', price: 3000},
            {name : 'OJ', price: 1500},
        ],
    }

    changePriceHandler = () => {
        this.setState({
            Products : [
                {name : 'Chai', price: 3000},
                {name : 'Coffee', price: 3500},
                {name : 'OJ', price: 2000},
            ],
        })
    }

    render(){
        return(
            <div id='main' className='container'>
                <h2>React App</h2>
                <p>Hello Wrold !</p>

                <Product 
                    name={this.state.Products[0].name}
                    price={this.state.Products[0].price}
                />
                
                <Product 
                    name={this.state.Products[1].name}
                    price={this.state.Products[1].price} 
                />
                
                <Product
                    name={this.state.Products[2].name}
                    price={this.state.Products[2].price}
                />
                

                <button onClick={this.changePriceHandler}>Change Price</button>
            </div>
        )
    }
}

export default App