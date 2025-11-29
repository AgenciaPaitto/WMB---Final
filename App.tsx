import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { Bio } from './components/Bio';
import { Showcase } from './components/Showcase';
import { Features } from './components/Features';
import { Trust } from './components/Trust';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';
import { Navigation } from './components/Navigation';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      
      {!loading && (
        <div className="bg-dark-bg min-h-screen text-gray-100 selection:bg-gold-500 selection:text-black">
          <Navigation />
          <Hero />
          <Bio />
          <Showcase />
          <Features />
          <Trust />
          <Contact />
          <Footer />
          
          {/* Custom Cursor Logic could go here or global CSS */}
        </div>
      )}
    </>
  );
};

export default App;