import React from 'react'

import './Product.css'

const Product = (props) => { 

    return (
        <div className='product'>
            <h3>Product Name : {props.name}</h3>
            <p>{props.name} Is Good</p>
            <p onClick={props.click}>Product Price : {props.price}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change}/>
        </div>
    )
}

export default Product