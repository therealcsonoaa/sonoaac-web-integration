
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Logo />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            onClick={() => handleScrollToSection('about')} 
            className="text-gray-700 hover:text-sonoaac-DEFAULT cursor-pointer font-medium transition-colors"
          >
            About
          </a>
          <a 
            onClick={() => handleScrollToSection('services')} 
            className="text-gray-700 hover:text-sonoaac-DEFAULT cursor-pointer font-medium transition-colors"
          >
            Services
          </a>
          <a 
            onClick={() => handleScrollToSection('contact')} 
            className="button-primary"
          >
            Book an Appointment
          </a>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md animate-fade-in">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <a 
              onClick={() => handleScrollToSection('about')} 
              className="text-gray-700 hover:text-sonoaac-DEFAULT cursor-pointer font-medium transition-colors py-2"
            >
              About
            </a>
            <a 
              onClick={() => handleScrollToSection('services')} 
              className="text-gray-700 hover:text-sonoaac-DEFAULT cursor-pointer font-medium transition-colors py-2"
            >
              Services
            </a>
            <a 
              onClick={() => handleScrollToSection('contact')} 
              className="button-primary inline-block text-center"
            >
              Book an Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
