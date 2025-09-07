import React from 'react';
import { Calendar, User, ArrowRight, BookOpen, Plus } from 'lucide-react';

const Blog = () => {
  const placeholderPosts = [
    {
      id: 1,
      title: 'Understanding Electro Homoeopathy: A Natural Path to Healing',
      excerpt: 'Discover the principles and benefits of Electro Homoeopathy and how it can help in treating various health conditions naturally.',
      category: 'Education',
      date: 'Coming Soon',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Success Story: Overcoming Chronic Eczema Naturally',
      excerpt: 'Read about how a patient successfully managed chronic eczema using Electro Homoeopathic treatment.',
      category: 'Success Stories',
      date: 'Coming Soon',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: '10 Natural Health Tips for Better Immunity',
      excerpt: 'Practical tips and lifestyle recommendations to boost your immune system and maintain optimal health.',
      category: 'Health Tips',
      date: 'Coming Soon',
      readTime: '6 min read'
    }
  ];

  const categories = [
    { name: 'All Articles', count: 0 },
    { name: 'Health Tips', count: 0 },
    { name: 'Success Stories', count: 0 },
    { name: 'Education', count: 0 },
    { name: 'Treatment Insights', count: 0 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Health <span className="gradient-text">Blog & Articles</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with health tips, success stories, and insights into Electro Homoeopathic treatment
          </p>
        </div>

        {/* Coming Soon Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-12 text-center mb-16">
          <div className="max-w-2xl mx-auto">
            <Plus className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Blog Section Coming Soon!</h2>
            <p className="text-blue-800 text-lg mb-6">
              We're preparing valuable content including health tips, patient success stories, 
              and educational articles about Electro Homoeopathy.
            </p>
            <div className="bg-white rounded-lg p-6 text-left">
              <h3 className="font-semibold text-blue-900 mb-3">Planned Content:</h3>
              <ul className="text-blue-800 space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Educational articles about Electro Homoeopathy</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span>Patient success stories and testimonials</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span>Natural health tips and lifestyle advice</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span>Treatment insights and case studies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Placeholder Articles */}
            <div className="space-y-8">
              {placeholderPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-2 text-gray-500 text-sm">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500 text-sm">
                      <BookOpen className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">EH Dr. Devendra Tiwari</p>
                        <p className="text-xs text-gray-500">Electro Homoeopathic Physician</p>
                      </div>
                    </div>
                    
                    <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors opacity-50 cursor-not-allowed">
                      <span>Read More</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="mt-16 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Stay Updated with Health Tips</h3>
              <p className="text-blue-100 mb-6">
                Get notified when we publish new health articles and success stories
              </p>
              <div className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                    disabled
                  />
                  <button
                    className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors opacity-50 cursor-not-allowed"
                    disabled
                  >
                    Subscribe
                  </button>
                </div>
                <p className="text-blue-200 text-sm mt-3">Newsletter coming soon!</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Categories */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.name}>
                    <button className="w-full text-left px-3 py-2 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors flex justify-between items-center opacity-50 cursor-not-allowed">
                      <span>{category.name}</span>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* About Author */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">About the Author</h3>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-10 w-10 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">EH Dr. Devendra Tiwari</h4>
                <p className="text-blue-600 text-sm mb-3">BEMS, IEHI Registered</p>
                <p className="text-gray-600 text-sm mb-4">
                  Experienced Electro Homoeopathic Physician with over 5,000 successful treatments.
                </p>
                <a
                  href="/about-doctor"
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  Learn More →
                </a>
              </div>
            </div>

            {/* Contact Widget */}
            <div className="bg-gradient-to-br from-emerald-600 to-blue-600 rounded-2xl p-6 text-white text-center">
              <h3 className="text-lg font-bold mb-3">Have Questions?</h3>
              <p className="text-emerald-100 text-sm mb-4">
                Get personalized health advice from Dr. Devendra
              </p>
              <div className="space-y-2">
                <a
                  href="/booking"
                  className="w-full bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm block"
                >
                  Book Consultation
                </a>
                <a
                  href="/contact"
                  className="w-full border border-white text-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-sm block"
                >
                  Ask Question
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;