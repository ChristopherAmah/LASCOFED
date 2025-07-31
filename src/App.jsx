import { useState } from 'react'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Topbar from './components/Topbar';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'

function App() {
  return (
    <main className='relative min-h-screen overflow-x-hidden'>
      <div className='overflow-hidden'>
        <BrowserRouter>
          <Topbar />
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </main>
  )
}

export default App
