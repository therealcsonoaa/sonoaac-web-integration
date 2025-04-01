
import React, { useState } from 'react';
import { toast } from 'sonner';
import { Send } from 'lucide-react';

const CTA: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the form data to your backend
    console.log('Form submitted:', formData);
    
    // Show success message
    toast.success('Your message has been sent! I will contact you shortly.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="bg-gradient-to-br from-sonoaac-dark to-sonoaac-DEFAULT rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="heading-lg mb-4">Let's Work Together</h2>
              <p className="text-white/90 text-lg mb-6">
                Ready to take your business to the next level with a professional web presence? 
                Get in touch to discuss your project and how I can help you succeed online.
              </p>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="font-bold text-xl mb-4">What to expect:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="bg-sonoaac-accent h-2 w-2 rounded-full mr-2"></div>
                    <span>Quick response within 7 hours</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-sonoaac-accent h-2 w-2 rounded-full mr-2"></div>
                    <span>Personal consultation about your needs</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-sonoaac-accent h-2 w-2 rounded-full mr-2"></div>
                    <span>Custom quote tailored to your project</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-sonoaac-accent h-2 w-2 rounded-full mr-2"></div>
                    <span>Transparent process from start to finish</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Book an Appointment</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sonoaac-light focus:border-sonoaac-light"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sonoaac-light focus:border-sonoaac-light"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sonoaac-light focus:border-sonoaac-light"
                    placeholder="Your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sonoaac-light focus:border-sonoaac-light"
                    placeholder="Tell me about your project"
                  ></textarea>
                </div>
                
                <button type="submit" className="button-accent w-full flex items-center justify-center">
                  <Send className="mr-2 h-5 w-5" />
                  Book an Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
