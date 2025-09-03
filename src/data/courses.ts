export interface Course {
  id: string;
  title: string;
  instructor: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  image: string;
  description: string;
  whatYoullLearn: string[];
  curriculum: Module[];
  requirements: string[];
  targetAudience: string[];
  certificateIncluded: boolean;
  lastUpdated: string;
  language: string;
  students: number;
  instructorBio: string;
  instructorImage: string;
  instructorRating: number;
  instructorCourses: number;
  highlights: string[];
  reviews: Review[];
}

export interface Module {
  id: string;
  title: string;
  duration: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  type: 'video' | 'article' | 'quiz';
  preview?: boolean;
}

export interface Review {
  id: string;
  userName: string;
  userAvatar: string;
  rating: number;
  comment: string;
  date: string;
}

export const categories = [
  'All Courses',
  'Web Development',
  'Data Science',
  'Digital Marketing',
  'Design',
  'Business',
  'Photography',
  'Music',
];

export const courses: Course[] = [
  {
    id: 'react-masterclass',
    title: 'Complete React Developer Masterclass 2025',
    instructor: 'Sarah Johnson',
    category: 'Web Development',
    price: 89.99,
    originalPrice: 199.99,
    rating: 4.8,
    reviewCount: 12847,
    duration: '42 hours',
    level: 'Intermediate',
    image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Master React from the ground up and build production-ready applications with hooks, context, and modern best practices.',
    whatYoullLearn: [
      'Build complete React applications from scratch',
      'Master React Hooks and Context API',
      'Implement state management with Redux Toolkit',
      'Create responsive UIs with Tailwind CSS',
      'Deploy applications to production',
      'Write clean, maintainable code',
      'Understand React performance optimization',
      'Build real-world projects for your portfolio'
    ],
    curriculum: [
      {
        id: 'module-1',
        title: 'React Fundamentals',
        duration: '8 hours',
        lessons: [
          { id: 'lesson-1', title: 'Introduction to React', duration: '45 min', type: 'video', preview: true },
          { id: 'lesson-2', title: 'JSX and Components', duration: '1 hour', type: 'video', preview: true },
          { id: 'lesson-3', title: 'Props and State', duration: '1.5 hours', type: 'video' },
          { id: 'lesson-4', title: 'Event Handling', duration: '1 hour', type: 'video' },
          { id: 'lesson-5', title: 'Conditional Rendering', duration: '45 min', type: 'video' },
          { id: 'lesson-6', title: 'Module Quiz', duration: '15 min', type: 'quiz' }
        ]
      },
      {
        id: 'module-2',
        title: 'Advanced React Concepts',
        duration: '12 hours',
        lessons: [
          { id: 'lesson-7', title: 'React Hooks Deep Dive', duration: '2 hours', type: 'video' },
          { id: 'lesson-8', title: 'Custom Hooks', duration: '1.5 hours', type: 'video' },
          { id: 'lesson-9', title: 'Context API and useReducer', duration: '2 hours', type: 'video' },
          { id: 'lesson-10', title: 'Performance Optimization', duration: '1.5 hours', type: 'video' },
          { id: 'lesson-11', title: 'Error Boundaries', duration: '1 hour', type: 'video' },
          { id: 'lesson-12', title: 'Testing React Components', duration: '2 hours', type: 'video' },
          { id: 'lesson-13', title: 'Module Project', duration: '2 hours', type: 'article' }
        ]
      },
      {
        id: 'module-3',
        title: 'State Management & Routing',
        duration: '10 hours',
        lessons: [
          { id: 'lesson-14', title: 'Redux Toolkit Setup', duration: '1 hour', type: 'video' },
          { id: 'lesson-15', title: 'Managing Complex State', duration: '2 hours', type: 'video' },
          { id: 'lesson-16', title: 'React Router v6', duration: '1.5 hours', type: 'video' },
          { id: 'lesson-17', title: 'Authentication Flow', duration: '2 hours', type: 'video' },
          { id: 'lesson-18', title: 'API Integration', duration: '2 hours', type: 'video' },
          { id: 'lesson-19', title: 'Final Project', duration: '1.5 hours', type: 'article' }
        ]
      },
      {
        id: 'module-4',
        title: 'Production Deployment',
        duration: '12 hours',
        lessons: [
          { id: 'lesson-20', title: 'Build Optimization', duration: '1 hour', type: 'video' },
          { id: 'lesson-21', title: 'Deployment Strategies', duration: '1.5 hours', type: 'video' },
          { id: 'lesson-22', title: 'CI/CD Pipeline Setup', duration: '2 hours', type: 'video' },
          { id: 'lesson-23', title: 'Monitoring and Analytics', duration: '1 hour', type: 'video' },
          { id: 'lesson-24', title: 'Course Completion Project', duration: '6.5 hours', type: 'article' }
        ]
      }
    ],
    requirements: [
      'Basic knowledge of HTML, CSS, and JavaScript',
      'Familiarity with ES6+ features',
      'A computer with internet access',
      'Text editor (VS Code recommended)',
      'Node.js installed on your machine'
    ],
    targetAudience: [
      'JavaScript developers looking to learn React',
      'Frontend developers wanting to advance their skills',
      'Students pursuing web development careers',
      'Professionals transitioning to modern web development',
      'Entrepreneurs building web applications'
    ],
    certificateIncluded: true,
    lastUpdated: 'January 2025',
    language: 'English',
    students: 89543,
    instructorBio: 'Sarah Johnson is a Senior Frontend Engineer at Google with over 8 years of experience building scalable web applications. She has taught over 200,000 students worldwide and is passionate about making complex concepts accessible to everyone.',
    instructorImage: 'https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=200',
    instructorRating: 4.9,
    instructorCourses: 12,
    highlights: [
      '42 hours of on-demand video',
      '25 coding exercises',
      '15 downloadable resources',
      'Full lifetime access',
      'Certificate of completion',
      '30-day money-back guarantee'
    ],
    reviews: [
      {
        id: 'review-1',
        userName: 'Michael Chen',
        userAvatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
        rating: 5,
        comment: 'Absolutely fantastic course! Sarah explains everything so clearly and the projects are really practical. I landed my first React job after completing this course.',
        date: '2 weeks ago'
      },
      {
        id: 'review-2',
        userName: 'Emily Rodriguez',
        userAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
        rating: 5,
        comment: 'Best React course I\'ve taken. The curriculum is well-structured and up-to-date with the latest React features. Highly recommend!',
        date: '1 month ago'
      },
      {
        id: 'review-3',
        userName: 'David Kumar',
        userAvatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100',
        rating: 4,
        comment: 'Great course content and examples. The only minor issue is that some sections could be a bit longer, but overall excellent value.',
        date: '3 weeks ago'
      }
    ]
  },
  {
    id: 'python-data-science',
    title: 'Python for Data Science and Machine Learning',
    instructor: 'Dr. Alex Thompson',
    category: 'Data Science',
    price: 129.99,
    originalPrice: 299.99,
    rating: 4.7,
    reviewCount: 8934,
    duration: '65 hours',
    level: 'Beginner',
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Complete Python data science bootcamp covering pandas, numpy, matplotlib, seaborn, scikit-learn, and machine learning algorithms.',
    whatYoullLearn: [
      'Master Python programming fundamentals',
      'Data manipulation with Pandas and NumPy',
      'Data visualization with Matplotlib and Seaborn',
      'Statistical analysis and hypothesis testing',
      'Machine learning algorithms and implementation',
      'Build real-world data science projects',
      'Deploy ML models to production',
      'Work with APIs and web scraping'
    ],
    curriculum: [],
    requirements: [
      'No prior programming experience required',
      'Basic mathematics knowledge helpful',
      'Computer with Python installed',
      'Willingness to learn and practice'
    ],
    targetAudience: [
      'Complete beginners to programming',
      'Professionals looking to transition to data science',
      'Students studying data science or statistics',
      'Business analysts wanting to upgrade skills'
    ],
    certificateIncluded: true,
    lastUpdated: 'December 2024',
    language: 'English',
    students: 45621,
    instructorBio: 'Dr. Alex Thompson holds a PhD in Computer Science and has 10+ years of experience in data science and machine learning at Fortune 500 companies.',
    instructorImage: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200',
    instructorRating: 4.8,
    instructorCourses: 8,
    highlights: [
      '65 hours of comprehensive content',
      '30+ hands-on projects',
      'Real datasets for practice',
      'Certificate of completion',
      'Lifetime access'
    ],
    reviews: []
  },
  {
    id: 'digital-marketing-mastery',
    title: 'Digital Marketing Mastery: From Beginner to Expert',
    instructor: 'Maria Garcia',
    category: 'Digital Marketing',
    price: 79.99,
    originalPrice: 179.99,
    rating: 4.6,
    reviewCount: 5672,
    duration: '28 hours',
    level: 'Beginner',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Comprehensive digital marketing course covering SEO, social media, PPC, email marketing, and analytics to grow your business online.',
    whatYoullLearn: [
      'Create effective marketing strategies',
      'Master Google Ads and Facebook advertising',
      'Build converting landing pages',
      'Understand SEO and content marketing',
      'Email marketing automation',
      'Social media marketing best practices',
      'Analytics and performance tracking',
      'Brand building and positioning'
    ],
    curriculum: [],
    requirements: [
      'Basic computer skills',
      'Access to internet and email',
      'Willingness to implement strategies'
    ],
    targetAudience: [
      'Small business owners',
      'Marketing professionals',
      'Entrepreneurs and startups',
      'Career changers to marketing'
    ],
    certificateIncluded: true,
    lastUpdated: 'January 2025',
    language: 'English',
    students: 23456,
    instructorBio: 'Maria Garcia is a digital marketing strategist who has helped over 500 businesses grow their online presence and revenue.',
    instructorImage: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=200',
    instructorRating: 4.7,
    instructorCourses: 15,
    highlights: [
      '28 hours of actionable content',
      'Real business case studies',
      'Marketing templates included',
      'Private community access',
      'Certificate of completion'
    ],
    reviews: []
  },
  {
    id: 'ux-ui-design-complete',
    title: 'UX/UI Design Complete Course: Figma to Code',
    instructor: 'James Wilson',
    category: 'Design',
    price: 109.99,
    originalPrice: 249.99,
    rating: 4.9,
    reviewCount: 7821,
    duration: '38 hours',
    level: 'Intermediate',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Learn UX/UI design from scratch using Figma, create stunning interfaces, and understand the complete design process from research to development.',
    whatYoullLearn: [
      'UX research and user testing methods',
      'Create wireframes and prototypes',
      'Master Figma for interface design',
      'Design systems and component libraries',
      'Mobile-first responsive design',
      'Accessibility and inclusive design',
      'Collaborate with developers effectively',
      'Build a professional design portfolio'
    ],
    curriculum: [],
    requirements: [
      'No design experience required',
      'Access to Figma (free account works)',
      'Creative mindset and attention to detail'
    ],
    targetAudience: [
      'Aspiring UX/UI designers',
      'Graphic designers transitioning to digital',
      'Developers wanting design skills',
      'Product managers and entrepreneurs'
    ],
    certificateIncluded: true,
    lastUpdated: 'November 2024',
    language: 'English',
    students: 34567,
    instructorBio: 'James Wilson is a Senior UX Designer at Apple with 12 years of experience designing products used by millions of people worldwide.',
    instructorImage: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200',
    instructorRating: 4.9,
    instructorCourses: 6,
    highlights: [
      '38 hours of design mastery',
      'Real client projects',
      'Figma community templates',
      'Portfolio review sessions',
      'Industry-standard practices'
    ],
    reviews: []
  },
  {
    id: 'business-strategy-fundamentals',
    title: 'Business Strategy and Growth Fundamentals',
    instructor: 'Robert Kim',
    category: 'Business',
    price: 149.99,
    originalPrice: 299.99,
    rating: 4.5,
    reviewCount: 3421,
    duration: '32 hours',
    level: 'Advanced',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Comprehensive business strategy course covering market analysis, competitive positioning, financial planning, and sustainable growth strategies.',
    whatYoullLearn: [
      'Develop winning business strategies',
      'Conduct market and competitor analysis',
      'Create financial models and projections',
      'Build scalable business processes',
      'Leadership and team management',
      'Risk management and mitigation',
      'Strategic planning and execution',
      'Measure and optimize business performance'
    ],
    curriculum: [],
    requirements: [
      'Basic business knowledge helpful',
      'Access to spreadsheet software',
      'Interest in business strategy and growth'
    ],
    targetAudience: [
      'Business owners and entrepreneurs',
      'MBA students and graduates',
      'Management consultants',
      'Corporate strategy professionals'
    ],
    certificateIncluded: true,
    lastUpdated: 'October 2024',
    language: 'English',
    students: 12789,
    instructorBio: 'Robert Kim is a former McKinsey consultant and current CEO who has helped scale multiple startups from $1M to $100M+ in revenue.',
    instructorImage: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200',
    instructorRating: 4.6,
    instructorCourses: 4,
    highlights: [
      '32 hours of strategic insights',
      'Case study analysis',
      'Business plan templates',
      'Expert guest interviews',
      'Peer networking opportunities'
    ],
    reviews: []
  },
  {
    id: 'photography-masterclass',
    title: 'Professional Photography: From Amateur to Pro',
    instructor: 'Lisa Zhang',
    category: 'Photography',
    price: 99.99,
    originalPrice: 199.99,
    rating: 4.8,
    reviewCount: 6543,
    duration: '35 hours',
    level: 'Beginner',
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Master the art of photography with comprehensive training in composition, lighting, editing, and building a successful photography business.',
    whatYoullLearn: [
      'Camera settings and technical fundamentals',
      'Composition and visual storytelling',
      'Portrait and landscape photography',
      'Studio lighting techniques',
      'Post-processing with Lightroom and Photoshop',
      'Building a photography business',
      'Client management and pricing',
      'Create a stunning portfolio'
    ],
    curriculum: [],
    requirements: [
      'Any camera (DSLR, mirrorless, or smartphone)',
      'Basic computer skills',
      'Passion for visual arts and creativity'
    ],
    targetAudience: [
      'Photography enthusiasts and hobbyists',
      'Aspiring professional photographers',
      'Social media content creators',
      'Small business owners needing product photos'
    ],
    certificateIncluded: true,
    lastUpdated: 'September 2024',
    language: 'English',
    students: 18765,
    instructorBio: 'Lisa Zhang is an award-winning photographer whose work has been featured in National Geographic and Vogue. She runs a successful photography studio in New York.',
    instructorImage: 'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=200',
    instructorRating: 4.9,
    instructorCourses: 7,
    highlights: [
      '35 hours of expert instruction',
      'Live photo critique sessions',
      'Exclusive preset collection',
      'Business templates included',
      'Community of photographers'
    ],
    reviews: []
  },
  {
    id: 'music-production-ableton',
    title: 'Electronic Music Production with Ableton Live',
    instructor: 'Marcus Rodriguez',
    category: 'Music',
    price: 119.99,
    originalPrice: 249.99,
    rating: 4.7,
    reviewCount: 4234,
    duration: '45 hours',
    level: 'Intermediate',
    image: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Complete electronic music production course using Ableton Live. Learn beat making, sound design, mixing, and mastering to create professional tracks.',
    whatYoullLearn: [
      'Master Ableton Live interface and workflow',
      'Create beats and drum patterns',
      'Sound design and synthesis',
      'Sampling and audio manipulation',
      'Mixing and mastering techniques',
      'Music theory for producers',
      'Arrangement and song structure',
      'Prepare tracks for streaming platforms'
    ],
    curriculum: [],
    requirements: [
      'Ableton Live (trial version acceptable)',
      'Audio interface and headphones recommended',
      'Basic computer skills',
      'Passion for electronic music'
    ],
    targetAudience: [
      'Music producers and beatmakers',
      'DJs wanting to create original music',
      'Musicians transitioning to electronic production',
      'Hobbyists interested in music creation'
    ],
    certificateIncluded: true,
    lastUpdated: 'August 2024',
    language: 'English',
    students: 15432,
    instructorBio: 'Marcus Rodriguez is a Grammy-nominated producer who has worked with major labels and independent artists, creating chart-topping electronic music for over 15 years.',
    instructorImage: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=200',
    instructorRating: 4.8,
    instructorCourses: 5,
    highlights: [
      '45 hours of production mastery',
      'Ableton Live project files',
      'Sample library included',
      'Feedback on your tracks',
      'Music industry insights'
    ],
    reviews: []
  }
];