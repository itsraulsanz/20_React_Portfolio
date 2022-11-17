import React from 'react';
import Navigation from './components/navigation';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './pages/Home';

export default function PortfolioContainer() {
  return (
    <div className='body-container'>
    <header>
      <div className='header_container'>
        <Header />
        <Navigation /> 
      </div>  
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
