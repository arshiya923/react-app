import React from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import App from './App'

const mainElement = document.getElementById('root')
const rootElement = createRoot(mainElement)

rootElement.render(<App />)
