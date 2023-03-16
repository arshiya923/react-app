import React from 'react'
import Product from './components/Product/Product'

import './App.css'

class App extends React.Component {

    state = {
        Products : [
            {name : 'Chai', price: 2500},
            {name : 'Coffee', price: 3000},
            {name : 'OJ', price: 1500},
            {name : 'Add Your Product Name', price: 5000 }
        ],
        showProducts : false
    }

    ChangeNameHandler = (event) => {
        this.setState({
            Products : [
                {name : 'Chai', price: 3000},
                {name : 'Coffee', price: 3500},
                {name : 'OJ', price: 2000},
                {name : event.target.value, price : 5000 }
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

        return(
            <div className='center'>
                <h2>React App</h2>
                <p>Hello World !</p>

                <button style={btnStyle} onClick={this.toggleProductHandler}>
                    Show/Hide Products
                </button>

                {this.state.showProducts ?
                    <div>
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
                            click={() => this.changePriceHandler('Black Tea')}
                        />

                        <Product
                            name={this.state.Products[3].name}
                            price={this.state.Products[3].price}
                            change={this.ChangeNameHandler}
                        />
                    </div> : null
                }
                

                
            </div>
        )
    }
}

export default App