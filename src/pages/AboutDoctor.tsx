import React from 'react';
import { Award, Calendar, Users, Stethoscope, GraduationCap, MapPin } from 'lucide-react';

const AboutDoctor = () => {
  const credentials = [
    {
      icon: <GraduationCap className="h-6 w-6 text-blue-600" />,
      title: "BEMS Certified",
      description: "Bachelor of Electro Homoeopathic Medicine"
    },
    {
      icon: <Award className="h-6 w-6 text-emerald-600" />,
      title: "Registered Practitioner",
      description: "IEHI Registration Date: 27th December 2022"
    },
    {
      icon: <Calendar className="h-6 w-6 text-purple-600" />,
      title: "Practice Since",
      description: "December 2022 in Kolkata"
    },
    {
      icon: <Users className="h-6 w-6 text-orange-600" />,
      title: "Patients Treated",
      description: "Successfully treated over 5,000 patients"
    }
  ];

  const specializations = [
    "Acute conditions (Cough, Cold, Acidity, Gas)",
    "Chronic ailments (Psoriasis, Eczema, Ganglion Cyst)",
    "Digestive disorders and metabolic conditions",
    "Skin conditions and dermatological issues",
    "Respiratory system disorders",
    "General wellness and preventive care"
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="gradient-text">Dr. Devendra Tiwari</span>
          </h1>
          <p className="text-xl text-gray-600">
            Electro Homoeopathic Physician | Consultant & Online Practitioner
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Doctor Photo and Basic Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              {/* Placeholder for doctor photo */}
              <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-100 to-emerald-100 rounded-full flex items-center justify-center mb-6">
                <Stethoscope className="h-24 w-24 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">EH Dr. Devendra Tiwari</h2>
              <p className="text-blue-600 font-semibold mb-4">BEMS Certified</p>
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <MapPin className="h-4 w-4" />
                <span>Kolkata, West Bengal</span>
              </div>
            </div>

            {/* Note for photo */}
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Note:</strong> Professional photo of Dr. Devendra Tiwari will be added here.
              </p>
            </div>
          </div>

          {/* About Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Text */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">About Dr. Devendra</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                EH Dr. Devendra Tiwari is a registered Electro Homoeopathic Physician (Registration Date: 27th December 2022, 
                Institute of Electro Homoeopathy of India - IEHI). With a practice established in Kolkata since December 2022, 
                he has successfully treated over 5,000 patients. He specializes in a wide range of conditions, from acute 
                issues like cough, cold, acidity, and gas to chronic ailments such as Psoriasis, Eczema, and Ganglion Cyst. 
                Dr. Tiwari is dedicated to providing compassionate and effective care through Electro Homoeopathy.
              </p>
            </div>

            {/* Credentials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {credentials.map((credential, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center space-x-4 mb-3">
                    {credential.icon}
                    <h4 className="text-lg font-semibold text-gray-900">{credential.title}</h4>
                  </div>
                  <p className="text-gray-600">{credential.description}</p>
                </div>
              ))}
            </div>

            {/* Specializations */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Areas of Specialization</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {specializations.map((specialization, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{specialization}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories Section */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Patient Success Stories & Testimonials
            </h3>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-blue-800 text-center">
                <strong>Coming Soon:</strong> Patient testimonials and success stories will be added to this section to showcase 
                the positive outcomes and experiences of patients treated by Dr. Devendra Tiwari.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Begin Your Healing Journey?</h3>
            <p className="text-lg mb-6 text-blue-100">
              Schedule a consultation with Dr. Devendra Tiwari and experience the benefits of Electro Homoeopathy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/booking"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Book Appointment
              </a>
              <a
                href="tel:9831339955"
                className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors border-2 border-emerald-600"
              >
                Call: 9831339955
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDoctor;