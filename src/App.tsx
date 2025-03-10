import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { CallToAction } from './components/CallToAction';
import { Founders } from './components/Founders';
import { Advisors } from './components/Advisors';
import { Autofinancing } from './pages/Autofinancing';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Footer } from './components/Footer';

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <CallToAction />
      <Founders />
      <Advisors />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <AnnouncementBar />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/autofinancing" element={<Autofinancing />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;