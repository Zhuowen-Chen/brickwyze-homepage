// src/App.jsx
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import WhoWeAre from './components/WhoWeAre';
// import Welcome from './components/Welcome';
// import WhyChooseUs from './components/WhyChooseUs';
// import HowItWorks from './components/HowItWorks';
// import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {/* <WhoWeAre />
      <Welcome />
      <WhyChooseUs />
      <HowItWorks />
      <Footer /> */}
    </div>
  );
}

export default App;