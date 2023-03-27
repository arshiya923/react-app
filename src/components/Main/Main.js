import React from 'react'

const Main = (props) => {
    const btnStyle = {
        backgroundColor: '#7B1FA2',
        color: '#ffffff',
        font: 'inherit',
        border: 'none',
        outline: 'none',
        borderRadius: '3px',
        padding: '.6rem',
        margin: '.6rem auto'

    }

    return (
        <div>
            <p>Hello World !</p>
            <button style={btnStyle} onClick={
                // eslint-disable-next-line react/prop-types
                props.click
            }>
                Show/Hide Products
            </button>
        </div>
    )
}

export default Main
