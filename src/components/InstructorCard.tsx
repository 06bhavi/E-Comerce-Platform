import React from 'react';
import { Star, Users, BookOpen, Award } from 'lucide-react';
import type { Course } from '../data/courses';

interface InstructorCardProps {
  course: Course;
}

const InstructorCard: React.FC<InstructorCardProps> = ({ course }) => {
  return (
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-6">Meet Your Instructor</h3>
      
      <div className="flex items-start space-x-6 mb-6">
        <img
          src={course.instructorImage}
          alt={course.instructor}
          className="w-24 h-24 rounded-full object-cover"
        />
        <div className="flex-1">
          <h4 className="text-2xl font-bold text-gray-900 mb-2">{course.instructor}</h4>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{course.instructorRating}</span>
              <span>Instructor Rating</span>
            </div>
            <div className="flex items-center space-x-1">
              <Award className="h-4 w-4 text-blue-600" />
              <span>{course.reviewCount.toLocaleString()} Reviews</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4 text-blue-600" />
              <span>{course.students.toLocaleString()} Students</span>
            </div>
            <div className="flex items-center space-x-1">
              <BookOpen className="h-4 w-4 text-blue-600" />
              <span>{course.instructorCourses} Courses</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className="bg-gray-50 rounded-lg p-6 mb-6">
        <h5 className="font-semibold text-gray-900 mb-3">About the Instructor</h5>
        <p className="text-gray-700 leading-relaxed">{course.instructorBio}</p>
      </div>

      {/* Instructor Highlights */}
      <div>
        <h5 className="font-semibold text-gray-900 mb-3">Why Learn from {course.instructor.split(' ')[0]}?</h5>
        <ul className="space-y-2">
          <li className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">Industry expert with proven track record</span>
          </li>
          <li className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">Passionate about teaching and student success</span>
          </li>
          <li className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">Active in professional community and mentorship</span>
          </li>
          <li className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">Responsive to student questions and feedback</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InstructorCard;