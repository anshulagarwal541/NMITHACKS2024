import './App.css'
import "./index.css";
import React from 'react'
import Footer from './components/footer/footer.jsx';
import FAQ from './components/faqs/FAQ.jsx';
import PriceSection from './components/priceSection/PriceSection.jsx';
import New2Tracks from './components/tracks/New2Tracks.jsx';
import Mousetrail from './components/MouseTrail/MouseTrail.jsx';

function App() {
  return (
    <Mousetrail>
      <div>
        <New2Tracks />
        <PriceSection />
        <FAQ />
        <Footer />
      </div>
    </Mousetrail>
  )
}

export default App