import React from 'react';
import { Leaf, Shield, Heart, Users, BookOpen, Play } from 'lucide-react';

const AboutElectroHomoeopathy = () => {
  const principles = [
    {
      icon: <Leaf className="h-8 w-8 text-emerald-600" />,
      title: "Natural Plant-Based Remedies",
      description: "All medicines are prepared from plants, ensuring natural healing without synthetic chemicals."
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Safe & Gentle",
      description: "No harmful side effects, making it suitable for patients of all ages including children and elderly."
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Holistic Approach",
      description: "Treats the whole person, not just symptoms, addressing root causes of illness."
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Body's Natural Harmony",
      description: "Works in harmony with the body's natural healing processes to restore balance."
    }
  ];

  const benefits = [
    "No toxic side effects",
    "Suitable for all age groups",
    "Treats both acute and chronic conditions",
    "Strengthens the immune system",
    "Improves overall health and vitality",
    "Cost-effective treatment option",
    "Can be used alongside conventional medicine",
    "Focuses on prevention as well as cure"
  ];

  const conditions = [
    {
      category: "Acute Conditions",
      items: ["Fever", "Cough & Cold", "Headaches", "Digestive Issues", "Minor Infections", "Allergic Reactions"]
    },
    {
      category: "Chronic Conditions", 
      items: ["Skin Disorders", "Respiratory Problems", "Digestive Disorders", "Joint & Muscle Issues", "Metabolic Disorders", "Mental Health Support"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="gradient-text">Electro Homoeopathy</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A natural system of medicine that uses remedies prepared from plants, designed to work in harmony 
            with the body's natural healing processes.
          </p>
        </div>

        {/* What is Electro Homoeopathy */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Electro Homoeopathy?</h2>
          <div className="prose prose-lg text-gray-700 max-w-none">
            <p className="mb-6">
              Electro Homoeopathy is a natural system of medicine that uses remedies prepared from plants. 
              It is designed to work in harmony with the body's natural healing processes. This gentle yet 
              effective approach to healthcare focuses on treating the person as a whole, rather than just 
              addressing individual symptoms.
            </p>
            <p className="mb-6">
              The system recognizes that the body has an innate ability to heal itself when given the right 
              support. Electro Homoeopathic remedies work by stimulating and supporting these natural healing 
              mechanisms, helping to restore balance and promote optimal health.
            </p>
            <p>
              Unlike conventional medicine that often suppresses symptoms, Electro Homoeopathy aims to address 
              the root causes of illness, leading to more lasting and comprehensive healing.
            </p>
          </div>
        </div>

        {/* Core Principles */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Core Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">
                  {principle.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{principle.title}</h3>
                <p className="text-gray-600 text-sm">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* YouTube Video Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Learn More About Electro Homoeopathy</h2>
          
          {/* Video Placeholder */}
          <div className="bg-gray-100 rounded-lg p-12 text-center border-2 border-dashed border-gray-300">
            <Play className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-4">YouTube Video Placeholder</h3>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-left max-w-2xl mx-auto">
              <h4 className="font-semibold text-blue-800 mb-2">To Add YouTube Video:</h4>
              <ol className="text-blue-700 text-sm space-y-1">
                <li>1. Upload your educational video to YouTube</li>
                <li>2. Copy the video URL</li>
                <li>3. Replace this placeholder with an embedded YouTube iframe</li>
                <li>4. Use this format: &lt;iframe src="https://www.youtube.com/embed/VIDEO_ID"&gt;</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Benefits of Electro Homoeopathy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-emerald-50 rounded-lg">
                <div className="w-2 h-2 bg-emerald-600 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Conditions Treated */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Conditions We Treat</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {conditions.map((condition, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-600 mb-4">{condition.category}</h3>
                <div className="grid grid-cols-1 gap-3">
                  {condition.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How It Differs */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How Electro Homoeopathy Differs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">From Conventional Medicine</h3>
              <p className="text-gray-600 text-sm">
                Focuses on natural healing rather than symptom suppression, with no harmful side effects
              </p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Leaf className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">From Other Alternative Systems</h3>
              <p className="text-gray-600 text-sm">
                Uses specific plant-based remedies with a unique approach to diagnosis and treatment
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Holistic Approach</h3>
              <p className="text-gray-600 text-sm">
                Treats the whole person, addressing physical, mental, and emotional aspects of health
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Experience Natural Healing</h3>
            <p className="text-lg mb-6 text-blue-100">
              Discover how Electro Homoeopathy can help you achieve optimal health naturally
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/booking"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Book Consultation
              </a>
              <a
                href="/contact"
                className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors border-2 border-emerald-600"
              >
                Ask Questions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutElectroHomoeopathy;