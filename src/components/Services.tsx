
import React from 'react';
import { Calendar, DollarSign, Users, Code, CheckCircle } from 'lucide-react';

const ServiceCard: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
}> = ({ title, description, icon }) => {
  return (
    <div className="card group hover:border-sonoaac-light">
      <div className="mb-4 text-sonoaac-DEFAULT group-hover:text-sonoaac-accent transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-sonoaac-DEFAULT transition-colors">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const servicesList = [
    {
      title: "Appointment Booking",
      description: "Create custom appointment booking systems for your business with calendar integration and automated reminders.",
      icon: <Calendar className="h-10 w-10" />
    },
    {
      title: "Payment Scheduling",
      description: "Implement secure payment processing and scheduling solutions that make it easy for your customers to pay you.",
      icon: <DollarSign className="h-10 w-10" />
    },
    {
      title: "In-Person Meetings",
      description: "Schedule in-person consultations to discuss your project requirements and goals in detail.",
      icon: <Users className="h-10 w-10" />
    },
    {
      title: "Custom Web Development",
      description: "Build tailored web solutions designed specifically for your business needs and target audience.",
      icon: <Code className="h-10 w-10" />
    }
  ];

  const benefits = [
    "Mobile-responsive designs that work on all devices",
    "Fast, optimized websites that load quickly",
    "SEO-friendly development practices",
    "Secure, reliable web solutions",
    "Ongoing support and maintenance options"
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="heading-lg text-center mb-4">Services</h2>
        <div className="h-1 w-20 bg-sonoaac-accent mx-auto mb-8 rounded-full"></div>
        <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          I help small businesses establish and enhance their online presence with professional web solutions tailored to your specific needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {servicesList.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <h3 className="heading-md text-center mb-8">Why Choose My Services?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-sonoaac-accent mr-2 flex-shrink-0" />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
