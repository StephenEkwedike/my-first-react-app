import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Greeting from './greetings.jsx'
import { Goodbye } from './greetings.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting/>
    <Goodbye/>
  </StrictMode>,
)
