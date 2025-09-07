import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutDoctor from './pages/AboutDoctor';
import AboutElectroHomoeopathy from './pages/AboutElectroHomoeopathy';
import Services from './pages/Services';
import Booking from './pages/Booking';
import OrderMedicine from './pages/OrderMedicine';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-doctor" element={<AboutDoctor />} />
            <Route path="/about-electro-homoeopathy" element={<AboutElectroHomoeopathy />} />
            <Route path="/services" element={<Services />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/order-medicine" element={<OrderMedicine />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;