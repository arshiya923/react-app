import React from 'react'
import Product from '../Product/Product'

const ProductList = (props) => {
    return props.products.map((item, index) => {
        return <Product
            name={item.name}
            price={item.price}
            click={() => props.click(index)}
            change={(event) => props.change(event, item.id)}
            key={index}
        />
    })
}

export default ProductList
