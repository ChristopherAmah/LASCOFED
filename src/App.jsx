import { useState } from 'react'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Topbar from './components/Topbar';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

function App() {
  return (
    <main className='relative min-h-screen overflow-x-hidden'>
      <div className='overflow-hidden'>
        <BrowserRouter>
          <Topbar />
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </main>
  )
}

export default App
