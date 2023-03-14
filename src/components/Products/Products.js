import React from 'react'

const Product = () => {

    const price = 2500;

    return (
        <div style={{textAlign:'center'}}>
            <h3>Product Name : Chai</h3>
            <p>Chai Is Good</p>
            <p>Product Price : {price}</p>
        </div>
    )
}

export default Product