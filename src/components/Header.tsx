import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X, BookOpen } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
            <BookOpen className="h-8 w-8" />
            <span>LearnPro</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Courses</Link>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Categories</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Instructors</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</a>
          </nav>

          

          {/* Right Section */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Search icon for mobile/tablet */}
            <button className="xl:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Search className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            
            <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <User className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <button className="hidden sm:block bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm sm:text-base">
              Sign Up
            </button>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 bg-white">
            <nav className="space-y-1">
              <Link 
                to="/" 
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-colors rounded-lg mx-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Courses
              </Link>
              <a href="#" className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-colors rounded-lg mx-2">
                Categories
              </a>
              <a href="#" className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-colors rounded-lg mx-2">
                Instructors
              </a>
              <a href="#" className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-colors rounded-lg mx-2">
                About
              </a>
              
              {/* Mobile Search - only show on smaller screens */}
              <div className="xl:hidden pt-3 px-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search courses..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              {/* Mobile Sign Up - only show on very small screens */}
              <div className="sm:hidden pt-3 px-2">
                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Sign Up
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;