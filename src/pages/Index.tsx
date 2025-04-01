
import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Services from '../components/Services';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-custom">
          <div className="flex flex-col items-center text-center">
            <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.1s' }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                <span className="text-sonoaac-DEFAULT">sonoaac</span>
              </h1>
            </div>
            <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-600 max-w-3xl mx-auto mb-8">
                Turning Ideas into Functional Webpages
              </h2>
            </div>
            <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.5s' }}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="button-primary cursor-pointer"
                >
                  Book an Appointment
                </a>
                <a 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="button-secondary cursor-pointer bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-6 rounded-md transition-all"
                >
                  View Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />
      <Services />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
