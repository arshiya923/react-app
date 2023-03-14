import React from 'react'
import Product from './components/Products/Products'

class App extends React.Component {
    render(){
        return(
            <div id='main' className='container'>
                <h2>React App</h2>
                <p>Hello Wrold !</p>

                <Product name="Chai" price="2500" />
                <Product name="Coffee" price="3000">
                    Discount : 20%
                </Product>
                <Product name="OJ" price="1500" />
            </div>
        )
    }
}

export default App