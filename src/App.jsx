// start react: bash -> cd brickwyze-homepage -> npm start

// src/App.jsx
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import Welcome from './components/Welcome';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import Login from './components/Login';

function Homepage() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhoWeAre />
      <Welcome />
      <WhyChooseUs />
      <HowItWorks />
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;