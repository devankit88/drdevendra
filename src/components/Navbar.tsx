// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X, Heart, Phone } from 'lucide-react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   const navLinks = [
//     { path: '/', label: 'Home' },
//     { path: '/about-doctor', label: 'About Dr. Devendra' },
//     { path: '/about-electro-homoeopathy', label: 'About Electro Homoeopathy' },
//     { path: '/services', label: 'Services' },
//     { path: '/booking', label: 'Book Appointment' },
//     { path: '/order-medicine', label: 'Order Medicine' },
//     { path: '/contact', label: 'Contact' },
//     { path: '/blog', label: 'Blog' },
//   ];

//   return (
//     <nav className="bg-white shadow-lg sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-2">
//             <Heart className="h-8 w-8 text-emerald-600" />
//             <div>
//               <h1 className="text-lg font-bold text-blue-600">Health with</h1>
//               <p className="text-xs text-emerald-600 -mt-1">Electro Homoeopathy</p>
//             </div>
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden lg:flex items-center space-x-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className={`text-sm font-medium transition-colors duration-200 ${
//                   location.pathname === link.path
//                     ? 'text-blue-600 border-b-2 border-blue-600'
//                     : 'text-gray-700 hover:text-blue-600'
//                 } ${link.label === 'Book Appointment' ? 'bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700' : ''}`}
//               >
//                 {link.label}
//               </Link>
//             ))}
//             <a
//               href="tel:9831339955"
//               className="flex items-center space-x-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
//             >
//               <Phone className="h-4 w-4" />
//               <span>Call Now</span>
//             </a>
//           </div>

//           {/* Mobile menu button */}
//           <div className="lg:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 p-2 rounded-md"
//             >
//               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="lg:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   onClick={() => setIsOpen(false)}
//                   className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
//                     location.pathname === link.path
//                       ? 'text-blue-600 bg-blue-50'
//                       : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
//                   }`}
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//               <a
//                 href="tel:9831339955"
//                 className="block px-3 py-2 text-emerald-600 font-medium"
//               >
//                 Call: 9831339955
//               </a>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Phone, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const mainNavLinks = [
    { path: '/', label: 'Home' },
    { path: '/about-doctor', label: 'About Dr. Devendra' },
    { path: '/services', label: 'Services' },
    { path: '/booking', label: 'Book Appointment' },
    { path: '/contact', label: 'Contact' },
    { path: '/blog', label: 'Blog' },
  ];

  const dropdownLinks = [
    { path: '/about-electro-homoeopathy', label: 'About Electro Homoeopathy' },
    { path: '/order-medicine', label: 'Order Medicine' },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - 3D Brand Anchor */}
          <Link to="/" className="flex items-center space-x-3 group transform-3d">
            <div className="group-hover:scale-110 transition-all duration-300 card-3d p-2">
              <img src="/logo.jpeg" alt="Tiwari Clinic Logo" className="h-12 w-auto" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#082567] group-hover:text-[#FFB300] transition-colors">
                Tiwari Clinics
              </h1>
              <p className="text-sm text-[#FFB300] font-medium -mt-1">
                Health with Electro Homoeopathy
              </p>
            </div>
          </Link>

          {/* Desktop Menu - Better spacing and typography */}
          <div className="hidden xl:flex items-center space-x-1">
            {mainNavLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'text-[#082567] bg-blue-50 border-b-2 border-[#082567]'
                    : 'text-[#334155] hover:text-[#082567] hover:bg-gray-50'
                } ${
                  link.label === 'Book Appointment'
                    ? 'btn-3d btn-accent'
                    : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* More dropdown for additional items */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center space-x-1 px-4 py-2 text-sm font-medium text-[#334155] hover:text-[#082567] hover:bg-gray-50 rounded-lg transition-colors"
              >
                <span>More</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                  {dropdownLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-3 text-sm text-[#334155] hover:bg-gray-50 hover:text-[#082567] transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Call button - 3D CTA */}
            <a
              href="tel:9831339955"
              className="btn-3d flex items-center space-x-2 ml-4"
            >
              <Phone className="h-4 w-4" />
              <span className="font-medium">Call Now</span>
            </a>
          </div>

          {/* Tablet Menu (lg to xl) */}
          <div className="hidden lg:flex xl:hidden items-center space-x-1">
            {mainNavLinks.slice(0, 4).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'text-[#082567] bg-blue-50'
                    : 'text-[#334155] hover:text-[#082567] hover:bg-gray-50'
                } ${
                  link.label === 'Book Appointment'
                    ? 'btn-3d btn-accent'
                    : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-[#334155] hover:text-[#082567] hover:bg-gray-50 rounded-lg"
              >
                <span>More</span>
                <ChevronDown className={`h-4 w-4 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border py-2">
                  {[...mainNavLinks.slice(4), ...dropdownLinks].map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-2 text-sm text-[#334155] hover:bg-gray-50 hover:text-[#082567]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <a
              href="tel:9831339955"
              className="btn-3d flex items-center space-x-2 ml-2"
            >
              <Phone className="h-4 w-4" />
              <span>Call</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#334155] hover:text-[#082567] focus:outline-none focus:ring-2 focus:ring-[#082567] focus:ring-offset-2 p-2 rounded-lg transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-100">
            <div className="px-2 pt-4 pb-4 space-y-1 bg-white">
              {[...mainNavLinks, ...dropdownLinks].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                    location.pathname === link.path
                      ? 'text-[#082567] bg-blue-50 border-l-4 border-[#082567]'
                      : 'text-[#334155] hover:text-[#082567] hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:9831339955"
                className="btn-3d flex items-center space-x-2 mx-4 mt-4"
              >
                <Phone className="h-4 w-4" />
                <span>Call: 9831339955</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;