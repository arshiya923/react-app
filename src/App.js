import React from 'react'
import Product from './components/Products/Products'

class App extends React.Component {
    render(){
        return(
            <div id='main' className='container'>
                <h2>React App</h2>
                <p>Hello Wrold !</p>

                <Product />
                <Product />
                <Product />
            </div>
        )
    }
}

export default App