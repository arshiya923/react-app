import React from 'react'

const Product = (props) => { 

    return (
        <div style={{textAlign:'center'}}>
            <h3>Product Name : {props.name}</h3>
            <p>{props.name} Is Good</p>
            <p>Product Price : {props.price}</p>
            <p>{props.children}</p>
        </div>
    )
}

export default Product