import './App.css';
import Home from './components/Home'
import Artist from './components/Artist';
import Business from './components/Business';
import Contact from './components/Contact';

import React ,{useState}from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import UserLogin from './components/UserLogin';
import {AiOutlineArrowUp} from 'react-icons/ai';
function App() {
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  window.addEventListener('scroll', toggleVisible);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/artist' element={<Artist />} />
        <Route path='/business' element={<Business />} />
        <Route path='/userLogin' element={<UserLogin />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <button
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }}
        style={{
          position: 'fixed',
          borderRadius:'50%',
          padding: '6px 10px',
          outline:'none',
          border:'none',
          fontSize: '20px',
          bottom: '40px',
          right: '40px',
          backgroundColor: '#eb202b',
          color: '#fff',
          textAlign: 'center',
          display: visible ? 'inline' : 'none',
        }}
      >
      <AiOutlineArrowUp/>
      </button>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
