import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the contact form data to your backend
    alert('Message sent successfully! Dr. Devendra will get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const subjects = [
    'General Inquiry',
    'Appointment Booking',
    'Treatment Question',
    'Medicine Order',
    'Follow-up Query',
    'Health Consultation',
    'Other'
  ];

  const faqs = [
    {
      question: 'What is Electro Homoeopathy?',
      answer: 'Electro Homoeopathy is a natural system of medicine using plant-based remedies that work in harmony with your body\'s healing processes.'
    },
    {
      question: 'Are there any side effects?',
      answer: 'Electro Homoeopathic medicines are completely natural and safe with no harmful side effects, suitable for all ages.'
    },
    {
      question: 'How long does treatment take?',
      answer: 'Treatment duration varies based on the condition. Acute conditions may resolve quickly, while chronic conditions may need longer treatment periods.'
    },
    {
      question: 'Do you offer online consultations?',
      answer: 'Yes, we offer both in-clinic and online video consultations for your convenience.'
    },
    {
      question: 'How can I order medicines?',
      answer: 'Existing patients can order medicines through our Order Medicine page or by calling our clinic directly.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ask Dr. Devendra / <span className="gradient-text">Contact Us</span>
          </h1>
          <p className="text-xl text-gray-600">
            Get in touch with us for any health-related questions or appointment bookings
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <MessageCircle className="h-6 w-6 text-blue-600" />
                Send Your Query
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      {subjects.map((subject) => (
                        <option key={subject} value={subject}>{subject}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Please describe your health concerns, questions, or any other details..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-emerald-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Clinic Details */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Clinic Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Health with Electro Homoeopathic Clinic<br />
                      4 Government Place North, Delta House<br />
                      2nd Floor, Room No. 216<br />
                      (Above Federal Bank, Near Registry Office)<br />
                      Kolkata – 700001, West Bengal
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-emerald-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <a 
                      href="tel:9831339955" 
                      className="text-emerald-600 hover:text-emerald-700 transition-colors font-medium"
                    >
                      9831339955
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-purple-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Practice Hours</h4>
                    <div className="text-gray-600 text-sm space-y-1">
                      <p><span className="font-medium">Monday - Saturday:</span> 10:00 AM - 7:00 PM</p>
                      <p><span className="font-medium">Sunday:</span> By Appointment</p>
                      <p className="text-emerald-600 font-medium mt-2">Online Consultations Available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h3>
              <div className="space-y-3">
                <a
                  href="/booking"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
                >
                  Book Appointment
                </a>
                <a
                  href="/order-medicine"
                  className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors text-center block"
                >
                  Order Medicine
                </a>
                <a
                  href="tel:9831339955"
                  className="w-full bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors text-center block flex items-center justify-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Find Our Clinic</h2>
            
            {/* Map Placeholder */}
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-4">Google Maps Integration</h3>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-left max-w-2xl mx-auto">
                  <h4 className="font-semibold text-blue-800 mb-2">To Add Google Maps:</h4>
                  <ol className="text-blue-700 text-sm space-y-1">
                    <li>1. Go to Google Maps and search for the clinic address</li>
                    <li>2. Click "Share" → "Embed a map"</li>
                    <li>3. Copy the iframe code</li>
                    <li>4. Replace this placeholder with the embedded map</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;