import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, Users, Award } from 'lucide-react';
import type { Course } from '../data/courses';

interface ProductCardProps {
  course: Course;
}

const ProductCard: React.FC<ProductCardProps> = ({ course }) => {
  const discount = course.originalPrice ? Math.round((1 - course.price / course.originalPrice) * 100) : 0;

  return (
    <Link to={`/course/${course.id}`} className="group block">
      <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group-hover:transform group-hover:scale-105">
        {/* Course Image */}
        <div className="relative overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {discount > 0 && (
            <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
              -{discount}%
            </div>
          )}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-sm font-medium text-gray-800">
            {course.level}
          </div>
        </div>

        {/* Course Content */}
        <div className="p-6">
          {/* Category Badge */}
          <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
            {course.category}
          </div>

          {/* Course Title */}
          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
            {course.title}
          </h3>

          {/* Instructor */}
          <p className="text-gray-600 mb-3">By {course.instructor}</p>

          {/* Course Stats */}
          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium text-gray-700">{course.rating}</span>
              <span>({course.reviewCount.toLocaleString()})</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>{course.students.toLocaleString()}</span>
            </div>
          </div>

          {/* Course Features */}
          <div className="flex flex-wrap gap-2 mb-4">
            {course.certificateIncluded && (
              <div className="flex items-center space-x-1 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                <Award className="h-3 w-3" />
                <span>Certificate</span>
              </div>
            )}
            <div className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
              Updated {course.lastUpdated}
            </div>
          </div>

          {/* Pricing */}
          <div className="flex items-center justify-between">
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl font-bold text-gray-900">${course.price}</span>
              {course.originalPrice && (
                <span className="text-lg text-gray-500 line-through">${course.originalPrice}</span>
              )}
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              View Course
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;