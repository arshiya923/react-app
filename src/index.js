import React from 'react'
import { createRoot } from 'react-dom/client'

const mainElement = document.getElementById('root')
const rootElement = createRoot(mainElement)

const customElement = React.createElement(
    'div',
    { id: 'main', className:'container'},
    'Hello World!'
)

rootElement.render(customElement)
