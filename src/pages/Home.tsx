import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { Calendar, Users, Award, Video, Phone, CheckCircle, Heart, Leaf, Shield } from 'lucide-react';

const Home = () => {
  const highlights = [
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Registered Practitioner",
      description: "IEHI Certified since December 2022"
    },
    {
      icon: <Users className="h-8 w-8 text-emerald-600" />,
      title: "5000+ Patients Treated",
      description: "Proven track record of successful treatments"
    },
    {
      icon: <Video className="h-8 w-8 text-purple-600" />,
      title: "Online Consultations",
      description: "Convenient virtual appointments available"
    }
  ];

  const benefits = [
    {
      icon: <Leaf className="h-6 w-6 text-emerald-600" />,
      title: "Natural Healing",
      description: "Plant-based remedies working with your body's natural processes"
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Safe & Effective",
      description: "No harmful side effects, suitable for all ages"
    },
    {
      icon: <Heart className="h-6 w-6 text-red-500" />,
      title: "Holistic Care",
      description: "Treating the person, not just the symptoms"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              EH Dr. Devendra Tiwari
            </h1>
            <p className="text-xl md:text-2xl mb-2 text-blue-100">
              Electro Homoeopathic Physician
            </p>
            <p className="text-lg mb-8 text-blue-200">
              Consultant & Online Practitioner | BEMS Certified
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg"
              >
                Book an Online Consultation
              </Link>
              <a
                href="tel:9831339955"
                className="bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-700 transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Highlights Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Electro Homoeopathy Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What is <span className="gradient-text">Electro Homoeopathy?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Electro Homoeopathy is a natural system of medicine that uses remedies prepared from plants. 
              It is designed to work in harmony with the body's natural healing processes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              to="/about-electro-homoeopathy"
              className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              Learn More About Electro Homoeopathy
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Conditions We Treat
            </h2>
            <p className="text-xl text-gray-600">
              From acute conditions to chronic ailments, we provide comprehensive care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Acute Conditions</h3>
              <ul className="space-y-3">
                {['Cough & Cold', 'Acidity', 'Gas & Indigestion', 'Fever', 'Headaches', 'Minor Infections'].map((condition) => (
                  <li key={condition} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span className="text-gray-700">{condition}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-emerald-600 mb-4">Chronic Conditions</h3>
              <ul className="space-y-3">
                {['Psoriasis', 'Eczema', 'Ganglion Cyst', 'Diabetes Management', 'Hypertension', 'Arthritis'].map((condition) => (
                  <li key={condition} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">{condition}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              to="/services"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Healing Journey?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Schedule your consultation today and take the first step towards natural healing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors"
            >
              Book Your Appointment
            </Link>
            <Link
              to="/contact"
              className="bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-700 transition-colors border-2 border-emerald-600"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;