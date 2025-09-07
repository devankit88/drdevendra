import React, { useState } from 'react';
import { Package, Truck, CheckCircle, AlertCircle, Phone } from 'lucide-react';

const OrderMedicine = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    patientId: '',
    email: '',
    phone: '',
    medicineName: '',
    quantity: '',
    potency: '',
    previousPrescription: 'no',
    specialInstructions: '',
    shippingAddress: '',
    city: '',
    state: '',
    pincode: '',
    landmark: ''
  });

  const commonMedicines = [
    'Scrofuloso 1', 'Scrofuloso 2', 'Scrofuloso 3',
    'Canceroso 1', 'Canceroso 2', 'Canceroso 3',
    'Febrifugo 1', 'Febrifugo 2', 'Febrifugo 3',
    'Pettorale 1', 'Pettorale 2', 'Pettorale 3',
    'Vermifugo 1', 'Vermifugo 2', 'Vermifugo 3'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the order data to your backend
    alert('Medicine order submitted successfully! You will receive a confirmation call within 24 hours.');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Order <span className="gradient-text">Medicine</span>
          </h1>
          <p className="text-xl text-gray-600">
            Order Electro Homoeopathic medicines with home delivery
          </p>
        </div>

        {/* Important Notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
          <div className="flex items-start space-x-3">
            <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-amber-800 mb-2">Important Notice</h3>
              <ul className="text-amber-700 text-sm space-y-1">
                <li>• This service is primarily for existing patients with previous prescriptions</li>
                <li>• All orders will be verified before processing</li>
                <li>• New patients should book a consultation first</li>
                <li>• Prescription copy may be required for verification</li>
              </ul>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Patient Information */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Patient Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Patient Name *
                </label>
                <input
                  type="text"
                  name="patientName"
                  required
                  value={formData.patientName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Enter patient's full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Patient ID (if available)
                </label>
                <input
                  type="text"
                  name="patientId"
                  value={formData.patientId}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Enter patient ID from previous prescription"
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
                  placeholder="Enter email address"
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
                  placeholder="Enter phone number"
                />
              </div>
            </div>
          </div>

          {/* Medicine Details */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Medicine Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Medicine Name *
                </label>
                <select
                  name="medicineName"
                  required
                  value={formData.medicineName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                >
                  <option value="">Select medicine or choose 'Other'</option>
                  {commonMedicines.map((medicine) => (
                    <option key={medicine} value={medicine}>{medicine}</option>
                  ))}
                  <option value="other">Other (specify in special instructions)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity *
                </label>
                <select
                  name="quantity"
                  required
                  value={formData.quantity}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                >
                  <option value="">Select quantity</option>
                  <option value="1 bottle">1 Bottle (30ml)</option>
                  <option value="2 bottles">2 Bottles (60ml)</option>
                  <option value="3 bottles">3 Bottles (90ml)</option>
                  <option value="custom">Custom quantity</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Potency/Strength
                </label>
                <input
                  type="text"
                  name="potency"
                  value={formData.potency}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="e.g., 1, 2, 3 or as prescribed"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Previous Prescription?
                </label>
                <select
                  name="previousPrescription"
                  value={formData.previousPrescription}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                >
                  <option value="no">No, first time order</option>
                  <option value="yes">Yes, refill from previous prescription</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Instructions
                </label>
                <textarea
                  name="specialInstructions"
                  value={formData.specialInstructions}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Any special instructions, alternative medicine names, or custom requirements"
                />
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Truck className="h-6 w-6 text-emerald-600" />
              Shipping Address
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Address *
                </label>
                <textarea
                  name="shippingAddress"
                  required
                  value={formData.shippingAddress}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Enter complete address with house number, street, area"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City *
                </label>
                <input
                  type="text"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Enter city"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  State *
                </label>
                <input
                  type="text"
                  name="state"
                  required
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Enter state"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  PIN Code *
                </label>
                <input
                  type="text"
                  name="pincode"
                  required
                  value={formData.pincode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Enter PIN code"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Landmark
                </label>
                <input
                  type="text"
                  name="landmark"
                  value={formData.landmark}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Nearby landmark (optional)"
                />
              </div>
            </div>
          </div>

          {/* Delivery Information */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Delivery Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Package className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900 mb-1">Secure Packaging</h3>
                <p className="text-gray-600 text-sm">Medicines packed safely to maintain quality</p>
              </div>
              <div className="text-center p-4 bg-emerald-50 rounded-lg">
                <Truck className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900 mb-1">Home Delivery</h3>
                <p className="text-gray-600 text-sm">Direct delivery to your doorstep</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <CheckCircle className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900 mb-1">Quality Assured</h3>
                <p className="text-gray-600 text-sm">Fresh medicines with proper expiry dates</p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-12 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-emerald-700 transition-colors flex items-center gap-2 mx-auto"
            >
              <CheckCircle className="h-5 w-5" />
              Submit Medicine Order
            </button>
            <p className="text-gray-500 text-sm mt-4">
              You will receive a confirmation call within 24 hours to verify the order and arrange payment.
            </p>
          </div>
        </form>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <div className="bg-gray-900 text-white rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4">Need Help with Your Order?</h3>
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

export default OrderMedicine;