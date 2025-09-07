import React from 'react';
import { Stethoscope, Video, Clock, CheckCircle, Phone, Calendar } from 'lucide-react';

const Services = () => {
  const consultationTypes = [
    {
      icon: <Stethoscope className="h-8 w-8 text-blue-600" />,
      title: "In-Clinic Consultation",
      description: "Personal consultation at our Kolkata clinic",
      features: [
        "Face-to-face examination",
        "Complete health assessment", 
        "Personalized treatment plan",
        "Follow-up appointments"
      ],
      duration: "45-60 minutes",
      price: "Contact for pricing"
    },
    {
      icon: <Video className="h-8 w-8 text-emerald-600" />,
      title: "Online Video Consultation",
      description: "Convenient virtual consultations from home",
      features: [
        "Video call consultation",
        "Digital health records",
        "Online prescription",
        "Home medicine delivery"
      ],
      duration: "30-45 minutes", 
      price: "Contact for pricing"
    }
  ];

  const acuteConditions = [
    "Cough & Cold", "Fever", "Headaches", "Acidity", "Gas & Indigestion", 
    "Nausea & Vomiting", "Diarrhea", "Minor Infections", "Allergic Reactions",
    "Throat Infections", "Body Aches", "Minor Cuts & Wounds"
  ];

  const chronicConditions = [
    "Psoriasis", "Eczema", "Ganglion Cyst", "Diabetes Management", 
    "Hypertension", "Arthritis", "Asthma", "Chronic Fatigue",
    "Digestive Disorders", "Anxiety & Stress", "Insomnia", "Migraine"
  ];

  const treatmentProcess = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "Detailed health assessment and medical history review"
    },
    {
      step: "2", 
      title: "Diagnosis & Analysis",
      description: "Comprehensive analysis using Electro Homoeopathic principles"
    },
    {
      step: "3",
      title: "Treatment Plan",
      description: "Personalized remedy selection and dosage instructions"
    },
    {
      step: "4",
      title: "Follow-up Care",
      description: "Regular monitoring and treatment adjustments as needed"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="gradient-text">Services & Treatments</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive Electro Homoeopathic care for acute and chronic conditions, 
            available both in-clinic and online
          </p>
        </div>

        {/* Consultation Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Consultation Options</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {consultationTypes.map((consultation, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center space-x-4 mb-6">
                  {consultation.icon}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{consultation.title}</h3>
                    <p className="text-gray-600">{consultation.description}</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  {consultation.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{consultation.duration}</span>
                  </div>
                  <div className="text-blue-600 font-semibold">{consultation.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conditions Treated */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Conditions We Treat</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Acute Conditions */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">Acute Conditions</h3>
              <p className="text-gray-600 mb-6">
                Quick relief for immediate health concerns and short-term illnesses
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {acuteConditions.map((condition, index) => (
                  <div key={index} className="flex items-center space-x-3 p-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 text-sm">{condition}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Chronic Conditions */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-emerald-600 mb-6">Chronic Conditions</h3>
              <p className="text-gray-600 mb-6">
                Long-term management and healing of persistent health issues
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {chronicConditions.map((condition, index) => (
                  <div key={index} className="flex items-center space-x-3 p-2">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span className="text-gray-700 text-sm">{condition}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Treatment Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Treatment Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {treatmentProcess.map((process, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Our Services */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Why Choose Our Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Stethoscope className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Experienced Practitioner</h3>
              <p className="text-gray-600 text-sm">
                IEHI registered physician with over 5,000 successful treatments
              </p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Proven Results</h3>
              <p className="text-gray-600 text-sm">
                Track record of successful treatment for both acute and chronic conditions
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Video className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Convenient Access</h3>
              <p className="text-gray-600 text-sm">
                Both in-person and online consultations available for your convenience
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Treatment?</h3>
            <p className="text-lg mb-6 text-blue-100">
              Book your consultation today and take the first step towards natural healing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/booking"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="h-5 w-5" />
                Book Appointment
              </a>
              <a
                href="tel:9831339955"
                className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors border-2 border-emerald-600 flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Call: 9831339955
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;