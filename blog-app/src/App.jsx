import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home />} /> 
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
              </Routes>
          </BrowserRouter>
      );
}

export default App
