import React from 'react';
import Navigation from './components/navigation';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/Home';

export default function PortfolioContainer() {
  return (
    <div className='body-container'>
    <header>
      <Header />
      <Navigation /> 
    </header>
    <main>
      <Home />
    </main>     
    <footer>
      <Footer />
    </footer>
    </div>      
  );
}
