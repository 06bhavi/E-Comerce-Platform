import React from 'react';
import { BookOpen, Users, Award, TrendingUp } from 'lucide-react';

const HeroSection: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Active Students', value: '250K+' },
    { icon: BookOpen, label: 'Expert Courses', value: '1,200+' },
    { icon: Award, label: 'Certificates Issued', value: '180K+' },
    { icon: TrendingUp, label: 'Success Rate', value: '94%' },
  ];

  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Master New Skills with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-teal-200"> Expert-Led Courses</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join millions of learners advancing their careers with our comprehensive online courses taught by industry professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg">
              Browse Courses
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
              Start Free Trial
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-xl mb-4">
                  <IconComponent className="h-8 w-8" />
                </div>
                <div className="text-2xl md:text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;