import React, { useState } from 'react';
import {
  FaShoppingCart,
  FaHeart,
  FaUser,
  FaBars,
  FaTimes,
  FaHome,
  FaBook,
  FaUniversity,
  FaList,
  FaInfoCircle,
  FaChalkboardTeacher,
  FaCalendarAlt,
  FaBlogger,
  FaUserPlus,
  FaEnvelope,
  FaFileContract,
  FaShieldAlt,
  FaUserGraduate,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assets/AFRIBOT Robotics -logo.png';

const Navbar = ({ isLoggedIn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <nav className="bg-black text-white p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2 animate-fadeInLeft">
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-40 md:h-14 md:w-60 object-cover transform hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8 mr-14">
          {['Home', 'Courses', 'Pages', 'Dashboard'].map((menu) => (
            <div key={menu} className="relative">
              <button
                className="hover:text-red-900 transition-colors duration-300"
                onClick={() => toggleDropdown(menu)}
              >
                {menu}
              </button>

              {/* Collapsible Dropdown Menu */}
              {activeDropdown === menu && (
                <div className="w-60 absolute bg-white text-black p-4 rounded shadow-lg transition-all duration-300">
                  {menu === 'Home' && (
                    <>
                      <Link to="/" className="block hover:bg-gray-100 px-4 py-2 transition-colors duration-300 flex items-center">
                        <FaHome className="mr-2" /> Main Home
                      </Link>
                      <Link to="/online-courses" className="block hover:bg-gray-100 px-4 py-2 transition-colors duration-300 flex items-center">
                        <FaBook className="mr-2" /> Online Course
                      </Link>
                      <Link to="/university" className="block hover:bg-gray-100 px-4 py-2 transition-colors duration-300 flex items-center">
                        <FaUniversity className="mr-2" /> University
                      </Link>
                    </>
                  )}
                  {menu === 'Courses' && (
                    <>
                      <Link to="/all-courses" className="block hover:bg-gray-100 px-4 py-2 transition-colors duration-300 flex items-center">
                        <FaList className="mr-2" /> All Courses
                      </Link>
                      <Link to="/course-details" className="block hover:bg-gray-100 px-4 py-2 transition-colors duration-300 flex items-center">
                        <FaInfoCircle className="mr-2" /> Course Details
                      </Link>
                      <Link to="/course-lesson" className="block hover:bg-gray-100 px-4 py-2 transition-colors duration-300 flex items-center">
                        <FaChalkboardTeacher className="mr-2" /> Course Lesson
                      </Link>
                    </>
                  )}
                  {menu === 'Pages' && (
                    <>
                      <Link to="/about-us" className="block hover:bg-gray-100 px-4 py-2 transition-colors duration-300 flex items-center">
                        <FaInfoCircle className="mr-2" /> About Us
                      </Link>
                      <Link to="/our-instructors" className="block hover:bg-gray-100 px-4 py-2 transition-colors duration-300 flex items-center">
                        <FaChalkboardTeacher className="mr-2" /> Our Instructors
                      </Link>
                      <Link to="/events" className="block hover:bg-gray-100 px-4 py-2 transition-colors duration-300 flex items-center">
                        <FaCalendarAlt className="mr-2" /> Our Events
                      </Link>
                      <Link to="/shop" className="block hover:bg-gray-100 px-4 py-2 transition-colors duration-300 flex items-center">
                        <FaShoppingCart className="mr-2" /> Shop
                      </Link>
                      <Link to="/blog" className="block hover:bg-gray-100 px-4 py-2 transition-colors duration-300 flex items-center">
                        <FaBlogger className="mr-2" /> Blog
                      </Link>
                      <Link to="/student-login" className="block hover:bg-gray-100 px-4 py-2 transition-colors duration-300 flex items-center">
                        <FaUser className="mr-2" /> Student Login
                      </Link>
                      <Link to="/student-registration" className="block hover:bg-gray-100 px-4 py-2 transition-colors duration-300 flex items-center">
                        <FaUserPlus className="mr-2" /> Student Registration
                      </Link>
                      <Link to="/contact-us" className="block hover:bg-gray-100 px-4 py-2 transition-colors duration-300 flex items-center">
                        <FaEnvelope className="mr-2" /> Contact Us
                      </Link>
                      <Link to="/terms" className="block hover:bg-gray-100 px-4 py-2 transition-colors duration-300 flex items-center">
                        <FaFileContract className="mr-2" /> Terms of Service
                      </Link>
                      <Link to="/privacy" className="block hover:bg-gray-100 px-4 py-2 transition-colors duration-300 flex items-center">
                        <FaShieldAlt className="mr-2" /> Privacy Policy
                      </Link>
                    </>
                  )}
                  {menu === 'Dashboard' && (
                    <>
                      <Link to="/instructor-dashboard" className="block hover:bg-gray-100 px-4 py-2 transition-colors duration-300 flex items-center">
                        <FaChalkboardTeacher className="mr-2" /> Instructor Dashboard
                      </Link>
                      <Link to="/student-dashboard" className="block hover:bg-gray-100 px-4 py-2 transition-colors duration-300 flex items-center">
                        <FaUserGraduate className="mr-2" /> Student Dashboard
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>
          ))}

          {/* Search Bar for Desktop */}
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-700 text-white px-4 py-2 rounded-full"
            />
          </div>
        </div>

        {/* Icons and Login Button for Desktop */}
        <div className="hidden md:flex items-center space-x-6 animate-fadeInRight">
          <button className="hover:text-red-900 transition-colors duration-300">
            <FaHeart className="text-xl transform hover:scale-110 transition-transform duration-300" />
          </button>
          <button className="hover:text-red-900 transition-colors duration-300">
            <FaShoppingCart className="text-xl transform hover:scale-110 transition-transform duration-300" />
          </button>
          {!isLoggedIn ? (
            <button className="bg-red-900 hover:bg-gray-900 text-white px-4 py-2 rounded-full transition-transform duration-300 hover:scale-105">
              <FaUser className="inline-block mr-2" /> Login
            </button>
          ) : (
            <div className="relative group">
              <button className="hover:text-red-900 transition-colors duration-300">My Account</button>
              <div className="absolute hidden group-hover:block bg-white text-black p-4 rounded shadow-lg transition-all duration-300 transform -translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                <Link to="/profile" className="block hover:bg-gray-100 px-4 py-2 transition-colors duration-300">Profile</Link>
                <Link to="/orders" className="block hover:bg-gray-100 px-4 py-2 transition-colors duration-300">Orders</Link>
                <Link to="/logout" className="block hover:bg-gray-100 px-4 py-2 transition-colors duration-300">Logout</Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 p-4">
          {/* Search Bar for Mobile */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-700 text-white px-4 py-2 rounded-full w-full"
            />
          </div>

          {/* Menu Links with Icons */}
          {['Home', 'Courses', 'Pages', 'Dashboard'].map((menu) => (
            <div key={menu} className="relative mb-2">
              <button
                className="w-full text-left hover:text-red-900 transition-colors duration-300 flex items-center"
                onClick={() => toggleDropdown(menu)}
              >
                {menu === 'Home' && <FaHome className="mr-2" />}
                {menu === 'Courses' && <FaBook className="mr-2" />}
                {menu === 'Pages' && <FaList className="mr-2" />}
                {menu === 'Dashboard' && <FaChalkboardTeacher className="mr-2" />}
                {menu}
              </button>
              {activeDropdown === menu && (
                <div className="w-full bg-white text-black p-2 rounded shadow-lg transition-all duration-300">
                  {menu === 'Home' && (
                    <>
                      <Link to="/" className="block hover:bg-gray-100 px-2 py-1 transition-colors duration-300 flex items-center">
                        <FaHome className="mr-2" /> Main Home
                      </Link>
                      <Link to="/online-course" className="block hover:bg-gray-100 px-2 py-1 transition-colors duration-300 flex items-center">
                        <FaBook className="mr-2" /> Online Course
                      </Link>
                      <Link to="/university" className="block hover:bg-gray-100 px-2 py-1 transition-colors duration-300 flex items-center">
                        <FaUniversity className="mr-2" /> University
                      </Link>
                    </>
                  )}
                  {menu === 'Courses' && (
                    <>
                      <Link to="/all-courses" className="block hover:bg-gray-100 px-2 py-1 transition-colors duration-300 flex items-center">
                        <FaList className="mr-2" /> All Courses
                      </Link>
                      <Link to="/course-details" className="block hover:bg-gray-100 px-2 py-1 transition-colors duration-300 flex items-center">
                        <FaInfoCircle className="mr-2" /> Course Details
                      </Link>
                      <Link to="/course-lesson" className="block hover:bg-gray-100 px-2 py-1 transition-colors duration-300 flex items-center">
                        <FaChalkboardTeacher className="mr-2" /> Course Lesson
                      </Link>
                    </>
                  )}
                  {menu === 'Pages' && (
                    <>
                      <Link to="/about-us" className="block hover:bg-gray-100 px-2 py-1 transition-colors duration-300 flex items-center">
                        <FaInfoCircle className="mr-2" /> About Us
                      </Link>
                      <Link to="/our-instructors" className="block hover:bg-gray-100 px-2 py-1 transition-colors duration-300 flex items-center">
                        <FaChalkboardTeacher className="mr-2" /> Our Instructors
                      </Link>
                      <Link to="/events" className="block hover:bg-gray-100 px-2 py-1 transition-colors duration-300 flex items-center">
                        <FaCalendarAlt className="mr-2" /> Our Events
                      </Link>
                      <Link to="/shop" className="block hover:bg-gray-100 px-2 py-1 transition-colors duration-300 flex items-center">
                        <FaShoppingCart className="mr-2" /> Shop
                      </Link>
                      <Link to="/blog" className="block hover:bg-gray-100 px-2 py-1 transition-colors duration-300 flex items-center">
                        <FaBlogger className="mr-2" /> Blog
                      </Link>
                      <Link to="/student-login" className="block hover:bg-gray-100 px-2 py-1 transition-colors duration-300 flex items-center">
                        <FaUser className="mr-2" /> Student Login
                      </Link>
                      <Link to="/student-registration" className="block hover:bg-gray-100 px-2 py-1 transition-colors duration-300 flex items-center">
                        <FaUserPlus className="mr-2" /> Student Registration
                      </Link>
                      <Link to="/contact-us" className="block hover:bg-gray-100 px-2 py-1 transition-colors duration-300 flex items-center">
                        <FaEnvelope className="mr-2" /> Contact Us
                      </Link>
                      <Link to="/terms" className="block hover:bg-gray-100 px-2 py-1 transition-colors duration-300 flex items-center">
                        <FaFileContract className="mr-2" /> Terms of Service
                      </Link>
                      <Link to="/privacy" className="block hover:bg-gray-100 px-2 py-1 transition-colors duration-300 flex items-center">
                        <FaShieldAlt className="mr-2" /> Privacy Policy
                      </Link>
                    </>
                  )}
                  {menu === 'Dashboard' && (
                    <>
                      <Link to="/instructor-dashboard" className="block hover:bg-gray-100 px-2 py-1 transition-colors duration-300 flex items-center">
                        <FaChalkboardTeacher className="mr-2" /> Instructor Dashboard
                      </Link>
                      <Link to="/student-dashboard" className="block hover:bg-gray-100 px-2 py-1 transition-colors duration-300 flex items-center">
                        <FaUserGraduate className="mr-2" /> Student Dashboard
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>
          ))}

          {/* Icons for Mobile */}
          <div className="flex justify-around mt-4">
            <button>
              <FaHeart className="text-xl hover:text-red-900 transition-transform duration-300" />
            </button>
            <button>
              <FaShoppingCart className="text-xl hover:text-red-900 transition-transform duration-300" />
            </button>
            {!isLoggedIn ? (
              <button className="bg-red-900 hover:bg-gray-900 text-white px-4 py-2 rounded-full transition-transform duration-300">
                <FaUser className="inline-block mr-2" /> Login
              </button>
            ) : (
              <Link to="/profile" className="bg-red-900 hover:bg-gray-900 text-white px-4 py-2 rounded-full transition-transform duration-300">My Account</Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
