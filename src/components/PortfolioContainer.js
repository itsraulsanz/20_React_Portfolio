import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='body-container'>
    <header>
      <Header />
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} /> 
    </header>
    <main>
      {renderPage()}
    </main>     
    <footer>
      <Footer />
    </footer>
    </div>      

  );
}
