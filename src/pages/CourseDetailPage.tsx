import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/courses';
import { 
  ArrowLeft, Play, Clock, Users, Star, Award, Globe, 
  Download, Smartphone, Tv, CheckCircle, MessageSquare,
  Share2, Heart, BookOpen
} from 'lucide-react';
import CurriculumSection from '../components/CurriculumSection';
import ReviewsSection from '../components/ReviewsSection';
import InstructorCard from '../components/InstructorCard';

const CourseDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('overview');
  
  const course = courses.find(c => c.id === id);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Course not found</h2>
          <Link to="/" className="text-blue-600 hover:text-blue-700">
            Return to catalog
          </Link>
        </div>
      </div>
    );
  }

  const discount = course.originalPrice ? Math.round((1 - course.price / course.originalPrice) * 100) : 0;

  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Courses</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Course Info */}
            <div className="lg:col-span-2">
              <div className="mb-4">
                <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {course.category}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{course.title}</h1>
              
              <p className="text-xl text-gray-200 mb-6 leading-relaxed">{course.description}</p>

              {/* Course Stats */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-200 mb-6">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-white">{course.rating}</span>
                  <span>({course.reviewCount.toLocaleString()} reviews)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>{course.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>{course.duration} total</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="h-5 w-5" />
                  <span>{course.language}</span>
                </div>
              </div>

              <p className="text-gray-300">
                Created by <span className="font-semibold text-white">{course.instructor}</span> • 
                Last updated {course.lastUpdated}
              </p>
            </div>

            {/* Course Preview/Enrollment Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                {/* Course Video/Image */}
                <div className="relative mb-6">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <button className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors rounded-lg group">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-8 w-8 text-blue-600 ml-1" />
                    </div>
                  </button>
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    Preview Course
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-baseline space-x-3 mb-2">
                    <span className="text-3xl font-bold text-gray-900">${course.price}</span>
                    {course.originalPrice && (
                      <>
                        <span className="text-xl text-gray-500 line-through">${course.originalPrice}</span>
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-semibold">
                          {discount}% off
                        </span>
                      </>
                    )}
                  </div>
                  <p className="text-red-600 font-medium text-sm">⏰ Limited time offer!</p>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3 mb-6">
                  <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Enroll Now
                  </button>
                  <button className="w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                    Add to Cart
                  </button>
                </div>

                {/* Course Includes */}
                <div className="space-y-3 text-sm">
                  <h4 className="font-semibold text-gray-900 mb-3">This course includes:</h4>
                  {course.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-3 text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Share & Wishlist */}
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200">
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                    <Share2 className="h-5 w-5" />
                    <span>Share</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors">
                    <Heart className="h-5 w-5" />
                    <span>Wishlist</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tab Navigation */}
            <div className="bg-white rounded-xl shadow-sm mb-8">
              <div className="border-b border-gray-200">
                <nav className="flex">
                  {[
                    { id: 'overview', label: 'Overview' },
                    { id: 'curriculum', label: 'Curriculum' },
                    { id: 'reviews', label: 'Reviews' },
                    { id: 'instructor', label: 'Instructor' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-6 py-4 border-b-2 font-medium text-sm transition-colors ${
                        activeTab === tab.id
                          ? 'border-blue-600 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-6">
                {/* Overview Tab */}
                {activeTab === 'overview' && (
                  <div className="space-y-8">
                    {/* What You'll Learn */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">What you'll learn</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {course.whatYoullLearn.map((item, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Requirements */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Requirements</h3>
                      <ul className="space-y-2">
                        {course.requirements.map((req, index) => (
                          <li key={index} className="flex items-center space-x-3 text-gray-700">
                            <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Target Audience */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Who this course is for</h3>
                      <ul className="space-y-2">
                        {course.targetAudience.map((audience, index) => (
                          <li key={index} className="flex items-center space-x-3 text-gray-700">
                            <div className="w-2 h-2 bg-teal-600 rounded-full flex-shrink-0"></div>
                            <span>{audience}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Curriculum Tab */}
                {activeTab === 'curriculum' && <CurriculumSection curriculum={course.curriculum} />}

                {/* Reviews Tab */}
                {activeTab === 'reviews' && (
                  <ReviewsSection 
                    reviews={course.reviews} 
                    rating={course.rating}
                    reviewCount={course.reviewCount}
                  />
                )}

                {/* Instructor Tab */}
                {activeTab === 'instructor' && <InstructorCard course={course} />}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Course Features */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Course Features</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-700">
                  <Tv className="h-5 w-5 text-blue-600" />
                  <span>Stream on any device</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Smartphone className="h-5 w-5 text-blue-600" />
                  <span>Mobile app access</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Download className="h-5 w-5 text-blue-600" />
                  <span>Downloadable resources</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Award className="h-5 w-5 text-blue-600" />
                  <span>Certificate of completion</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <MessageSquare className="h-5 w-5 text-blue-600" />
                  <span>Q&A with instructor</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                  <span>Lifetime access</span>
                </div>
              </div>
            </div>

            {/* Related Courses */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Related Courses</h3>
              <div className="space-y-4">
                {courses
                  .filter(c => c.category === course.category && c.id !== course.id)
                  .slice(0, 3)
                  .map((relatedCourse) => (
                    <Link
                      key={relatedCourse.id}
                      to={`/course/${relatedCourse.id}`}
                      className="block group"
                    >
                      <div className="flex space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <img
                          src={relatedCourse.image}
                          alt={relatedCourse.title}
                          className="w-16 h-12 object-cover rounded"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 text-sm">
                            {relatedCourse.title}
                          </h4>
                          <p className="text-gray-600 text-xs mt-1">{relatedCourse.instructor}</p>
                          <div className="flex items-center space-x-2 text-xs text-gray-500 mt-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span>{relatedCourse.rating}</span>
                            <span className="font-semibold text-gray-900">${relatedCourse.price}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetailPage;