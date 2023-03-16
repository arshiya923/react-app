import React/*, { useState } */from 'react'
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
    }

    ChangeNameHandler = (event) => {
        this.setState({
            Products : [
                {name : 'Chai', price: 3000},
                {name : 'Coffee', price: 3500},
                {name : 'OJ', price: 2000},
                {name : event.target.value, price : 5000 }
            ],
        })
    }

    changePriceHandler = (newName) => {
        this.setState({
            Products : [
                {name : newName, price: 3000},
                {name : 'Coffee', price: 3500},
                {name : 'OJ', price: 2000},
                {name : 'Add Your Product Name', price: 5000 }
            ],
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
                

                <button style={btnStyle} onClick={this.changePriceHandler.bind(this, 'Black Tea')}>Change Price</button>
            </div>
        )
    }
}

/*
const App = (props) => {

    const [productState, setProductState] = useState({
        Products : [
            {name : 'Chai', price: 2500},
            {name : 'Coffee', price: 3000},
            {name : 'OJ', price: 1500},
        ],
    })

    const changePriceHandler = () => {
        setProductState({
            Products : [
                {name : 'Chai', price: 3000},
                {name : 'Coffee', price: 3500},
                {name : 'OJ', price: 2000},
            ],
        })
    }

    return(
        <div id='main' className='container'>
            <h2>React App</h2>
            <p>Hello World !</p>

            <Product 
                name={productState.Products[0].name}
                price={productState.Products[0].price}
            />
            
            <Product 
                name={productState.Products[1].name}
                price={productState.Products[1].price} 
            />
            
            <Product
                name={productState.Products[2].name}
                price={productState.Products[2].price}
            />
            

            <button onClick={changePriceHandler}>Change Price</button>
        </div>
    )
}
*/

export default App