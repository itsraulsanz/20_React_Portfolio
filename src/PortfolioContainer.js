import React, { useState } from 'react';
import Navigation from './components/navigation';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './components/resume/resume';
import Contact from './components/contact/contact';

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
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} /> 
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
