import React from 'react'
import Product from './components/Products/Products'


const App = () => {
    return(
        <div id='main' className='container'>
            <h2>React App</h2>
            <p>Hello Wrold !</p>

            <Product />

        </div>
    )
}

export default App