import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Master from './components/Master.jsx'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <App/>
    </BrowserRouter>
  </StrictMode>,
)