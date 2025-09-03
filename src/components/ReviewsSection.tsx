import React from 'react';
import { Star } from 'lucide-react';
import type { Review } from '../data/courses';

interface ReviewsSectionProps {
  reviews: Review[];
  rating: number;
  reviewCount: number;
}

const ReviewsSection: React.FC<ReviewsSectionProps> = ({ reviews, rating, reviewCount }) => {
  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) 
            ? 'fill-yellow-400 text-yellow-400' 
            : i < rating 
            ? 'fill-yellow-400 text-yellow-400 opacity-50'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  // Create rating distribution (mock data for demo)
  const ratingDistribution = [
    { stars: 5, count: Math.floor(reviewCount * 0.7), percentage: 70 },
    { stars: 4, count: Math.floor(reviewCount * 0.2), percentage: 20 },
    { stars: 3, count: Math.floor(reviewCount * 0.06), percentage: 6 },
    { stars: 2, count: Math.floor(reviewCount * 0.03), percentage: 3 },
    { stars: 1, count: Math.floor(reviewCount * 0.01), percentage: 1 },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Student Reviews</h3>
        <button className="text-blue-600 hover:text-blue-700 font-medium">Write a Review</button>
      </div>

      {/* Rating Overview */}
      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Overall Rating */}
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">{rating}</div>
            <div className="flex justify-center mb-2">
              {renderStars(rating)}
            </div>
            <p className="text-gray-600">{reviewCount.toLocaleString()} reviews</p>
          </div>

          {/* Rating Distribution */}
          <div className="space-y-2">
            {ratingDistribution.map((dist) => (
              <div key={dist.stars} className="flex items-center space-x-3">
                <div className="flex items-center space-x-1 w-12">
                  <span className="text-sm text-gray-600">{dist.stars}</span>
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                </div>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-yellow-400 h-2 rounded-full"
                    style={{ width: `${dist.percentage}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600 w-8">{dist.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Individual Reviews */}
      <div className="space-y-6">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
              <div className="flex items-start space-x-4">
                <img
                  src={review.userAvatar}
                  alt={review.userName}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">{review.userName}</h4>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex">
                      {renderStars(review.rating)}
                    </div>
                    <span className="text-sm text-gray-600">({review.rating}/5)</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8">
            <div className="text-gray-400 mb-4">
              <MessageSquare className="h-12 w-12 mx-auto" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">No reviews yet</h4>
            <p className="text-gray-600">Be the first to review this course!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewsSection;