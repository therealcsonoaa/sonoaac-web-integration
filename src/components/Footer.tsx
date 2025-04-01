
import React from 'react';
import Logo from './Logo';
import { Mail, Phone, Linkedin, Github, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <Logo className="mb-4 md:mb-0" />
          <div className="flex space-x-6">
            <a 
              href="mailto:email@sonoaac.com" 
              className="text-gray-600 hover:text-sonoaac-DEFAULT transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
              href="tel:8622568342" 
              className="text-gray-600 hover:text-sonoaac-DEFAULT transition-colors"
              aria-label="Phone"
            >
              <Phone className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-sonoaac-DEFAULT transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-sonoaac-DEFAULT transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-sonoaac-DEFAULT transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">
            Contact Me: <a href="mailto:email@sonoaac.com" className="hover:text-sonoaac-DEFAULT">email@sonoaac.com</a> | <a href="tel:8622568342" className="hover:text-sonoaac-DEFAULT">862-256-8342</a>
          </p>
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} sonoaac. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
