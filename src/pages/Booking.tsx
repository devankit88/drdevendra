import React, { useState } from 'react';
import { Calendar, Clock, Video, MapPin, Phone, CheckCircle, AlertCircle } from 'lucide-react';

const Booking = () => {
  const [selectedConsultationType, setSelectedConsultationType] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: '',
    previousPatient: 'no',
    preferredLanguage: 'english'
  });

  const consultationTypes = [
    {
      id: 'online',
      title: 'Online Video Consultation',
      icon: <Video className="h-6 w-6" />,
      description: 'Convenient consultation from your home',
      duration: '30-45 minutes',
      price: 'Contact for pricing'
    },
    {
      id: 'clinic',
      title: 'In-Clinic Consultation', 
      icon: <MapPin className="h-6 w-6" />,
      description: 'Personal consultation at our Kolkata clinic',
      duration: '45-60 minutes',
      price: 'Contact for pricing'
    }
  ];

  // Generate next 14 days
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      // Skip Sundays (0 = Sunday)
      if (date.getDay() !== 0) {
        dates.push(date);
      }
    }
    return dates;
  };

  const availableDates = generateDates();

  const timeSlots = [
    '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
    '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the booking data to your backend
    alert('Booking submitted successfully! You will receive a confirmation call within 24 hours.');
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Book Your <span className="gradient-text">Consultation</span>
          </h1>
          <p className="text-xl text-gray-600">
            Schedule your appointment with EH Dr. Devendra Tiwari
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Consultation Type Selection */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Consultation Type</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {consultationTypes.map((type) => (
                <div
                  key={type.id}
                  onClick={() => setSelectedConsultationType(type.id)}
                  className={`border-2 rounded-xl p-6 cursor-pointer transition-all ${
                    selectedConsultationType === type.id
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`p-2 rounded-lg ${
                      selectedConsultationType === type.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {type.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{type.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{type.description}</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{type.duration}</span>
                    <span className="font-medium">{type.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Date Selection */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Calendar className="h-6 w-6 text-blue-600" />
              Select Date
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
              {availableDates.map((date, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedDate(date.toISOString().split('T')[0])}
                  className={`p-3 rounded-lg text-center transition-all ${
                    selectedDate === date.toISOString().split('T')[0]
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 hover:bg-blue-100 text-gray-700'
                  }`}
                >
                  <div className="text-sm font-medium">{formatDate(date)}</div>
                  <div className="text-xs">{date.getDate()}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Time Selection */}
          {selectedDate && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Clock className="h-6 w-6 text-emerald-600" />
                Select Time
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`p-3 rounded-lg text-center font-medium transition-all ${
                      selectedTime === time
                        ? 'bg-emerald-600 text-white'
                        : 'bg-gray-100 hover:bg-emerald-100 text-gray-700'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Patient Information */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Patient Information</h2>
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

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Previous Patient?
                </label>
                <select
                  name="previousPatient"
                  value={formData.previousPatient}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                >
                  <option value="no">No, first time</option>
                  <option value="yes">Yes, returning patient</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Reason for Visit *
                </label>
                <textarea
                  name="reason"
                  required
                  value={formData.reason}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Please describe your symptoms or health concerns"
                />
              </div>
            </div>
          </div>

          {/* Payment Information */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Information</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-blue-800 mb-2">Payment Integration Coming Soon</h3>
                  <p className="text-blue-700 text-sm">
                    Online payment integration (Razorpay/PayPal) will be implemented here. 
                    For now, payment arrangements will be confirmed during the consultation booking call.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-gray-600">
                You will receive a call within 24 hours to confirm your appointment and discuss payment options.
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={!selectedConsultationType || !selectedDate || !selectedTime || !formData.name || !formData.email || !formData.phone || !formData.reason}
              className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-12 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 mx-auto"
            >
              <CheckCircle className="h-5 w-5" />
              Book Appointment
            </button>
            <p className="text-gray-500 text-sm mt-4">
              By submitting this form, you agree to receive a confirmation call from our clinic.
            </p>
          </div>
        </form>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <div className="bg-gray-900 text-white rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4">Need Immediate Assistance?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:9831339955"
                className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors flex items-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Call: 9831339955
              </a>
              <p className="text-gray-300">Available Monday - Saturday, 10 AM - 7 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;