import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { Calendar, Users, Award, Video, Phone, CheckCircle, Heart, Leaf, Shield } from 'lucide-react';

const Home = () => {
  const highlights = [
    {
      icon: <Award className="h-8 w-8 text-[#082567]" />,
      title: "40+ Years Experience",
      description: "Dr. P. S. Tiwari's legacy of care since 1984"
    },
    {
      icon: <Users className="h-8 w-8 text-[#FFB300]" />,
      title: "5000+ Patients Treated",
      description: "Proven track record of successful treatments"
    },
    {
      icon: <Video className="h-8 w-8 text-[#082567]" />,
      title: "Online Consultations",
      description: "Convenient virtual appointments available"
    }
  ];

  const benefits = [
    {
      icon: <Leaf className="h-6 w-6 text-[#FFB300]" />,
      title: "Natural Healing",
      description: "Plant-based remedies working with your body's natural processes"
    },
    {
      icon: <Shield className="h-6 w-6 text-[#082567]" />,
      title: "Safe & Effective",
      description: "No harmful side effects, suitable for all ages"
    },
    {
      icon: <Heart className="h-6 w-6 text-[#FFB300]" />,
      title: "Holistic Care",
      description: "Treating the person, not just the symptoms"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - 3D Parallax */}
      <section className="gradient-bg text-white py-20 relative overflow-hidden parallax-container">
        <div className="absolute inset-0 bg-gradient-to-br from-[#082567] via-[#0d3a8a] to-[#051a3d]"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#FFB300] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#FFB300] rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <div className="mb-8 transform-3d">
              <img src="/logo.jpeg" alt="Tiwari Clinic Logo" className="h-24 w-auto mx-auto mb-6 card-3d p-4" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              Tiwari Clinics
            </h1>
            <p className="text-xl md:text-2xl mb-2 text-[#FFB300]">
              Health with Electro Homoeopathy
            </p>
            <p className="text-lg mb-8 text-gray-200">
              Providing compassionate and effective care through natural remedies with over 40 years of experience and 5,000+ patients treated.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="btn-3d btn-accent px-8 py-4 rounded-full font-semibold text-lg"
              >
                Book an Online Consultation
              </Link>
              <a
                href="tel:9831339955"
                className="btn-3d px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Call Now — 98313 39955
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Highlights Section - 3D Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <Tilt key={index} className="card-3d p-8 text-center transform-3d">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gray-50 rounded-full">
                    {highlight.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#082567] mb-2">{highlight.title}</h3>
                <p className="text-[#334155]">{highlight.description}</p>
              </Tilt>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#082567] mb-4">
              About Us
            </h2>
            <p className="text-xl text-[#334155] max-w-4xl mx-auto">
              At Tiwari Clinics, we specialize in Electro Homoeopathy, a natural, plant-based system of medicine that works with the body's own healing processes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Dr. P. S. Tiwari */}
            <Tilt className="card-3d p-8 transform-3d">
              <div className="text-center mb-6">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-12 w-12 text-[#082567]" />
                </div>
                <h3 className="text-2xl font-bold text-[#082567] mb-2">Dr. P. S. Tiwari</h3>
                <p className="text-[#FFB300] font-semibold">Founder & Senior Physician</p>
              </div>
              <div className="space-y-3 text-[#334155]">
                <p><strong>Qualification:</strong> D.M.S (Cal), Reg No. 11057</p>
                <p><strong>Experience:</strong> Over 40 years</p>
                <p><strong>Specialization:</strong> Homeopathic Physician, Specialist in Chronic Cases</p>
                <p><strong>Contact:</strong> <a href="tel:7059613492" className="text-[#FFB300] hover:underline">📞 70596 13492</a></p>
                <p className="text-sm mt-4">
                  Dr. P. S. Tiwari has dedicated his career to treating complex and chronic health conditions through homoeopathy. He is known for his holistic approach, compassionate care, and patient-first philosophy.
                </p>
              </div>
            </Tilt>

            {/* Dr. Devendra Tiwari */}
            <Tilt className="card-3d p-8 transform-3d">
              <div className="text-center mb-6">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-12 w-12 text-[#082567]" />
                </div>
                <h3 className="text-2xl font-bold text-[#082567] mb-2">Dr. Devendra Tiwari</h3>
                <p className="text-[#FFB300] font-semibold">Electro Homoeopathic Physician</p>
              </div>
              <div className="space-y-3 text-[#334155]">
                <p><strong>Qualification:</strong> B.E.M.S (Reg No. 2622), D.H.M.S (B.S.S), D.M.B.S</p>
                <p><strong>Certification:</strong> IEHI Certified Practitioner (since Dec 2022)</p>
                <p><strong>Specialization:</strong> Electro Homoeopathic Physician | Consultant & Online Practitioner</p>
                <p><strong>Patients Treated:</strong> 5,000+ successfully</p>
                <p><strong>Contact:</strong> <a href="tel:9831339955" className="text-[#FFB300] hover:underline">📞 98313 39955</a></p>
                <p className="text-sm mt-4">
                  Dr. Devendra Tiwari continues the legacy of care at Tiwari Clinics, offering safe and effective electro homoeopathic treatments. He provides both in-person consultations and convenient online appointments.
                </p>
              </div>
            </Tilt>
          </div>

          <div className="text-center">
            <p className="text-lg text-[#334155] max-w-4xl mx-auto">
              Founded by Dr. P. S. Tiwari, a senior Homeopathic Physician with over 40 years of clinical experience in chronic cases, the clinic continues its legacy of care under the guidance of Dr. Devendra Tiwari, Electro Homoeopathic Physician and certified practitioner. Together, they provide a blend of experience and modern expertise, offering both in-clinic and online consultations for patients across India.
            </p>
          </div>
        </div>
      </section>

      {/* About Electro Homoeopathy Section - Layered Design */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#082567] mb-4">
              What is <span className="text-[#FFB300]">Electro Homoeopathy?</span>
            </h2>
            <p className="text-xl text-[#334155] max-w-3xl mx-auto">
              Electro Homoeopathy is a natural system of medicine that uses remedies prepared from plants. 
              It is designed to work in harmony with the body's natural healing processes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="card-layered p-6 transform-3d">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-gray-100 rounded-full">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#082567] mb-2">{benefit.title}</h3>
                    <p className="text-[#334155]">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              to="/about-electro-homoeopathy"
              className="btn-3d btn-accent px-8 py-3 rounded-lg font-semibold"
            >
              Learn More About Electro Homoeopathy
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#082567] mb-4">
              Services
            </h2>
            <p className="text-xl text-[#334155]">
              Comprehensive healthcare services for your convenience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Tilt className="card-3d p-6 text-center transform-3d">
              <Video className="h-12 w-12 text-[#082567] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-[#082567] mb-2">Online Consultations</h3>
              <p className="text-[#334155] text-sm">Convenient virtual appointments from home</p>
            </Tilt>
            <Tilt className="card-3d p-6 text-center transform-3d">
              <Calendar className="h-12 w-12 text-[#FFB300] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-[#082567] mb-2">In-Clinic Consultations</h3>
              <p className="text-[#334155] text-sm">Personal consultations at our Kolkata clinic</p>
            </Tilt>
            <Tilt className="card-3d p-6 text-center transform-3d">
              <Heart className="h-12 w-12 text-[#082567] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-[#082567] mb-2">Medicine Orders & Home Delivery</h3>
              <p className="text-[#334155] text-sm">Convenient medicine delivery to your doorstep</p>
            </Tilt>
            <Tilt className="card-3d p-6 text-center transform-3d">
              <Users className="h-12 w-12 text-[#FFB300] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-[#082567] mb-2">Follow-up Care</h3>
              <p className="text-[#334155] text-sm">Continuous monitoring and treatment adjustments</p>
            </Tilt>
          </div>
        </div>
      </section>

      {/* Conditions We Treat Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#082567] mb-4">
              Conditions We Treat
            </h2>
            <p className="text-xl text-[#334155]">
              From acute conditions to chronic ailments, we provide comprehensive care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Tilt className="card-3d p-8 transform-3d">
              <h3 className="text-2xl font-bold text-[#082567] mb-4">Acute Conditions</h3>
              <ul className="space-y-3">
                {['Cough & Cold', 'Acidity, Gas & Indigestion', 'Fever', 'Headaches', 'Minor Infections'].map((condition) => (
                  <li key={condition} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#FFB300]" />
                    <span className="text-[#334155]">{condition}</span>
                  </li>
                ))}
              </ul>
            </Tilt>

            <Tilt className="card-3d p-8 transform-3d">
              <h3 className="text-2xl font-bold text-[#FFB300] mb-4">Chronic Conditions</h3>
              <ul className="space-y-3">
                {['Psoriasis', 'Eczema', 'Ganglion Cyst', 'Diabetes Management', 'Hypertension', 'Arthritis'].map((condition) => (
                  <li key={condition} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#082567]" />
                    <span className="text-[#334155]">{condition}</span>
                  </li>
                ))}
              </ul>
            </Tilt>
          </div>

          <div className="text-center mt-8">
            <Link
              to="/services"
              className="btn-3d px-8 py-3 rounded-lg font-semibold"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Patient Guidelines Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#082567] mb-4">
              Patient Guidelines
            </h2>
            <p className="text-xl text-[#334155]">
              Important precautions and guidelines for effective treatment
            </p>
          </div>

          <div className="card-layered p-8">
            <h3 className="text-2xl font-bold text-[#082567] mb-6 text-center">Precautions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFB300] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-[#334155]">Avoid consuming raw onions and garlic</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFB300] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-[#334155]">Don't eat lemons, pickles, or spicy foods</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFB300] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-[#334155]">Tea and coffee are not recommended</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFB300] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-[#334155]">Keep a 2–3 minute gap between different medicines</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFB300] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-[#334155]">Maintain at least 15 minutes gap between food and medication</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFB300] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-[#334155]">Avoid meat, chicken, eggs, and fish</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFB300] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-[#334155]">Don't consume khaini, pan masala, gutkha, cigarettes, or alcohol</span>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-[#334155] text-center">
                <strong>Note:</strong> Prescription valid for 1 month. Follow-up consultation recommended after 30 days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - 3D Parallax */}
      <section className="py-16 gradient-bg text-white relative overflow-hidden parallax-container">
        <div className="absolute inset-0 bg-gradient-to-br from-[#082567] via-[#0d3a8a] to-[#051a3d]"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-40 h-40 bg-[#FFB300] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-32 h-32 bg-[#FFB300] rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to Start Your Healing Journey?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Schedule your consultation today and take the first step towards natural healing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="btn-3d btn-accent px-8 py-4 rounded-full font-semibold text-lg"
            >
              Book Your Appointment
            </Link>
            <Link
              to="/contact"
              className="btn-3d px-8 py-4 rounded-full font-semibold text-lg border-2 border-white/20"
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