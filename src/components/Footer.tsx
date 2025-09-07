import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Practice Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-emerald-400" />
              <div>
                <h3 className="text-lg font-bold">Health with</h3>
                <p className="text-sm text-emerald-400">Electro Homoeopathy</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Providing compassionate and effective care through Electro Homoeopathy with over 5,000 patients treated.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about-doctor" className="text-gray-300 hover:text-emerald-400 transition-colors">About Dr. Devendra</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-emerald-400 transition-colors">Services</Link></li>
              <li><Link to="/booking" className="text-gray-300 hover:text-emerald-400 transition-colors">Book Appointment</Link></li>
              <li><Link to="/order-medicine" className="text-gray-300 hover:text-emerald-400 transition-colors">Order Medicine</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-emerald-400 transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-emerald-400 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium">Health with Electro Homoeopathic Clinic</p>
                  <p className="text-gray-300">4 Government Place North, Delta House, 2nd Floor, Room No. 216</p>
                  <p className="text-gray-300">(Above Federal Bank, Near Registry Office)</p>
                  <p className="text-gray-300">Kolkata – 700001, West Bengal</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-400" />
                <a href="tel:9831339955" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  9831339955
                </a>
              </div>
            </div>
          </div>

          {/* Practice Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Practice Hours</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-emerald-400" />
                <div className="text-sm">
                  <p className="text-gray-300">Monday - Saturday</p>
                  <p className="text-white font-medium">10:00 AM - 7:00 PM</p>
                </div>
              </div>
              <div className="text-sm">
                <p className="text-gray-300">Sunday</p>
                <p className="text-white font-medium">By Appointment</p>
              </div>
              <div className="mt-3 p-3 bg-blue-600 rounded-lg">
                <p className="text-sm font-medium">Online Consultations Available</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2024 Health with Electro Homoeopathy. All rights reserved. 
            <span className="block md:inline mt-1 md:mt-0 md:ml-2">
              EH Dr. Devendra Tiwari (BEMS) - Registered Practitioner
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;