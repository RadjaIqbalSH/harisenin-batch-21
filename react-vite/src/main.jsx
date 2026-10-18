import { createRoot } from 'react-dom/client'

import "./assets/styles/main.css"

import App from './App.jsx'

const app = document.getElementById('root')

const root = createRoot(app)

root.render(<App />)
