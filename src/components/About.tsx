
import React from 'react';
import { Clock, Calendar, Phone } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding pt-32">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-lg text-center mb-4">About Me</h2>
          <div className="h-1 w-20 bg-sonoaac-accent mx-auto mb-8 rounded-full"></div>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            A Major in Cyber security and track in computer science, minoring in business analytics, looking to assist small businesses prosper on the web.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="card flex flex-col items-center text-center p-6">
              <div className="bg-sonoaac-light/10 p-4 rounded-full mb-4">
                <Calendar className="h-8 w-8 text-sonoaac-DEFAULT" />
              </div>
              <h3 className="font-bold text-xl mb-2">Initial Consultation</h3>
              <p className="text-gray-600">
                If you haven't set up an appointment yet, we'll have a zoom meeting to get you familiarized with the process.
              </p>
              <p className="text-sonoaac-DEFAULT font-medium mt-2">Duration: 10 minutes</p>
            </div>
            
            <div className="card flex flex-col items-center text-center p-6">
              <div className="bg-sonoaac-light/10 p-4 rounded-full mb-4">
                <Clock className="h-8 w-8 text-sonoaac-DEFAULT" />
              </div>
              <h3 className="font-bold text-xl mb-2">Quick Response</h3>
              <p className="text-gray-600">
                After selecting your service and completing payment, expect a phone call or email within hours.
              </p>
              <p className="text-sonoaac-DEFAULT font-medium mt-2">Response time: Maximum 7 hours</p>
            </div>
            
            <div className="card flex flex-col items-center text-center p-6">
              <div className="bg-sonoaac-light/10 p-4 rounded-full mb-4">
                <Phone className="h-8 w-8 text-sonoaac-DEFAULT" />
              </div>
              <h3 className="font-bold text-xl mb-2">Ready to Start</h3>
              <p className="text-gray-600">
                Select the type of service you want for your business, checkout, and get started on your web journey.
              </p>
              <p className="text-sonoaac-DEFAULT font-medium mt-2">Let's build your web presence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
