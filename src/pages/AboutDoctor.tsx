import React from 'react';
import { Award, Calendar, Users, Stethoscope, GraduationCap, MapPin } from 'lucide-react';
import Tilt from "react-parallax-tilt";

const AboutDoctor = () => {
  const credentials = [
    {
      icon: <GraduationCap className="h-6 w-6 text-[#082567]" />,
      title: "BEMS Certified",
      description: "Bachelor of Electro Homoeopathic Medicine"
    },
    {
      icon: <Award className="h-6 w-6 text-[#FFB300]" />,
      title: "Registered Practitioner",
      description: "IEHI Registration Date: 27th December 2022"
    },
    {
      icon: <Calendar className="h-6 w-6 text-[#082567]" />,
      title: "Practice Since",
      description: "December 2022 in Kolkata"
    },
    {
      icon: <Users className="h-6 w-6 text-[#FFB300]" />,
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
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="mb-8 transform-3d">
            <img src="/logo.jpeg" alt="Tiwari Clinic Logo" className="h-20 w-auto mx-auto mb-6 card-3d p-4" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#082567] mb-4">
            About <span className="text-[#FFB300]">Dr. Devendra Tiwari</span>
          </h1>
          <p className="text-xl text-[#334155]">
            Electro Homoeopathic Physician | Consultant & Online Practitioner
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Doctor Photo and Basic Info */}
          <div className="lg:col-span-1">
            <Tilt className="card-3d p-8 text-center transform-3d">
              {/* Placeholder for doctor photo */}
              <div className="w-48 h-48 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mb-6">
                <Stethoscope className="h-24 w-24 text-[#082567]" />
              </div>
              <h2 className="text-2xl font-bold text-[#082567] mb-2">Dr. Devendra Tiwari</h2>
              <p className="text-[#FFB300] font-semibold mb-4">BEMS Certified</p>
              <div className="flex items-center justify-center space-x-2 text-[#334155]">
                <MapPin className="h-4 w-4" />
                <span>Kolkata, West Bengal</span>
              </div>
            </Tilt>

            {/* Note for photo */}
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-[#334155]">
                <strong>Note:</strong> Professional photo of Dr. Devendra Tiwari will be added here.
              </p>
            </div>
          </div>

          {/* About Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Text */}
            <div className="card-layered p-8">
              <h3 className="text-2xl font-bold text-[#082567] mb-6">About Dr. Devendra</h3>
              <p className="text-[#334155] leading-relaxed text-lg">
                Dr. Devendra Tiwari is a registered Electro Homoeopathic Physician (Registration Date: 27th December 2022, 
                Institute of Electro Homoeopathy of India - IEHI). With a practice established in Kolkata since December 2022, 
                he has successfully treated over 5,000 patients. He specializes in a wide range of conditions, from acute 
                issues like cough, cold, acidity, and gas to chronic ailments such as Psoriasis, Eczema, and Ganglion Cyst. 
                Dr. Tiwari is dedicated to providing compassionate and effective care through Electro Homoeopathy.
              </p>
            </div>

            {/* Credentials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {credentials.map((credential, index) => (
                <Tilt key={index} className="card-3d p-6 transform-3d">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="p-2 bg-gray-100 rounded-full">
                      {credential.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-[#082567]">{credential.title}</h4>
                  </div>
                  <p className="text-[#334155]">{credential.description}</p>
                </Tilt>
              ))}
            </div>

            {/* Specializations */}
            <div className="card-layered p-8">
              <h3 className="text-2xl font-bold text-[#082567] mb-6">Areas of Specialization</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {specializations.map((specialization, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#FFB300] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-[#334155]">{specialization}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories Section */}
        <div className="mt-16">
          <div className="card-layered p-8">
            <h3 className="text-2xl font-bold text-[#082567] mb-6 text-center">
              Patient Success Stories & Testimonials
            </h3>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-[#334155] text-center">
                <strong>Coming Soon:</strong> Patient testimonials and success stories will be added to this section to showcase 
                the positive outcomes and experiences of patients treated by Dr. Devendra Tiwari.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="gradient-bg rounded-2xl p-8 text-white relative overflow-hidden parallax-container">
            <div className="absolute inset-0 bg-gradient-to-br from-[#082567] via-[#0d3a8a] to-[#051a3d]"></div>
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-20 w-40 h-40 bg-[#FFB300] rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 left-20 w-32 h-32 bg-[#FFB300] rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Ready to Begin Your Healing Journey?</h3>
              <p className="text-lg mb-6 text-gray-200">
                Schedule a consultation with Dr. Devendra Tiwari and experience the benefits of Electro Homoeopathy
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/booking"
                  className="btn-3d btn-accent px-8 py-3 rounded-lg font-semibold"
                >
                  Book Appointment
                </a>
                <a
                  href="tel:9831339955"
                  className="btn-3d px-8 py-3 rounded-lg font-semibold border-2 border-white/20"
                >
                  Call: 9831339955
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDoctor;