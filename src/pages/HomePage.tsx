import React, { useState } from 'react';
import FilterSidebar from '../components/FilterSidebar';
import PostCard from '../components/PostCard';
import TagCloud from '../components/TagCloud';
import { usePosts } from '../context/PostsContext';
import { Menu, GraduationCap, Users, Award, Target, BookOpen, Phone, ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const { posts } = usePosts();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const topPosts = [...posts]
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 3);

  const toppers = [
    {
      name: "Ms. Sara Jadhav",
      percentage: "98.20%",
      school: "Vidyadeep",
      rank: "1st in Vasai-Virar",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg"
    },
    {
      name: "Mst. Madhuranjan Mishra",
      percentage: "96.40%",
      school: "B.V.Thakur",
      rank: "1st in B.V. Thakur",
      image: "https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg"
    },
    {
      name: "Ms. Aarya Kherade",
      percentage: "95.40%",
      school: "St. Peter's",
      rank: "3rd in St. Peter's",
      image: "https://images.pexels.com/photos/3785083/pexels-photo-3785083.jpeg"
    },
    {
      name: "Mst. Arbaz Mohammad",
      percentage: "91.20%",
      school: "St. Mary",
      rank: "1st in St. Mary",
      image: "https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg"
    }
  ];

  const sscToppers = [
    { name: "Ms. Sara Jadhav", percentage: "98.20%", school: "Vidyadeep" },
    { name: "Mst. Madhuranjan Mishra", percentage: "96.40%", school: "B.V.Thakur" },
    { name: "Ms. Aarya Kherade", percentage: "95.40%", school: "St. Peter's" },
    { name: "Mst. Dakshal Marathe", percentage: "93.80%", school: "St. Peter's" },
    { name: "Ms. Aditi Jadhav", percentage: "93.40%", school: "St. Peter's" },
    { name: "Mst. Kushal Rane", percentage: "92.40%", school: "St. Peter's" },
    { name: "Mst. Arbaz Mohammad", percentage: "91.20%", school: "St. Mary" },
    { name: "Ms. Varshini Mogaveera", percentage: "91.20%", school: "St. Peter's" }
  ];

  const classPerformance = [
    { range: "Above 90%", count: 8 },
    { range: "80% to 90%", count: 21 },
    { range: "70% to 80%", count: 19 },
    { range: "60% to 70%", count: 15 }
  ];

const testimonials = [
  {
    id: 1,
    name: "Sahil Sawant",
    role: "Jr. Researcher at IUCAA",
    image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg",
    quote: "The foundational science education I received at Sadguru Science Classes was truly exceptional. The way complex topics were broken down and explained made all the difference, setting me on a clear path towards my research career at IUCAA.",
    rating: 5
  },
  {
    id: 2,
    name: "Bhavya Shah",
    role: "Cloud Expert at Nutanix",
    image: "https://images.pexels.com/photos/3785424/pexels-photo-3785424.jpeg",
    quote: "Sadguru Science Classes provided an incredibly strong academic base that fostered my problem-solving skills, which are crucial in my current role as a Cloud Expert. Their personalized approach ensured I grasped every concept thoroughly.",
    rating: 5
  },
  {
    id: 3,
    name: "Anas Ansari",
    role: "AI/ML Engineer at Avaulti",
    image: "https://images.pexels.com/photos/8197534/pexels-photo-8197534.jpeg",
    quote: "The rigorous training and comprehensive understanding of scientific principles I gained at Sadguru Science Classes were absolutely instrumental. This strong background was key to my success in pursuing AI/ML engineering.",
    rating: 5
  },
  {
    id: 4,
    name: "Nirbhay Thoke",
    role: "IIT-Guwahati Alumnus",
    image: "https://images.pexels.com/photos/3771118/pexels-photo-3771118.jpeg",
    quote: "The focused preparation and excellent doubt-solving sessions at Sadguru Science Classes were pivotal in my journey to IIT-Guwahati. The faculty's unwavering support and commitment to conceptual clarity truly made a difference.",
    rating: 5
  },
  {
    id: 5,
    name: "Tayyab Shaikh",
    role: "Product Manager at Kirloskar Engines",
    image: "https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg",
    quote: "Sadguru Science Classes goes beyond rote learning; they instill a deep understanding of scientific concepts and critical thinking. This holistic approach has been invaluable in my career as a Product Manager, where strong analytical skills are paramount.",
    rating: 5
  }
];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === toppers.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? toppers.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-32 min-h-[600px] flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              SADGURU SCIENCE CLASSES
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100">
              Our Guidance, Student's Hardwork, Parents' Satisfaction
            </p>
            <p className="text-lg mb-12 text-indigo-100">
              Empowering students with knowledge, skills, and confidence to excel in science and beyond. Join our community of achievers today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/learn"
                className="px-8 py-3 bg-white text-indigo-600 rounded-full font-semibold hover:bg-indigo-50 transition-colors"
              >
                Explore Courses
              </Link>
              <a
                href="#contact"
                className="px-8 py-3 bg-indigo-500 text-white rounded-full font-semibold hover:bg-indigo-400 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              About Us
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              SADGURU SCIENCE CLASSES has been a beacon of excellence in science education since 2002. We specialize in preparing students for competitive exams and building a strong foundation in scientific concepts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl text-center">
              <GraduationCap className="h-12 w-12 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Expert Guidance
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our experienced faculty members provide specialized coaching in Physics, Chemistry, Biology, and Mathematics with proven teaching methodologies.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl text-center">
              <Users className="h-12 w-12 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Personalized Attention
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We maintain small batch sizes to ensure individual attention, regular assessments, and personalized feedback to improve student performance.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl text-center">
              <Award className="h-12 w-12 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Track Record of Excellence
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our students consistently achieve top ranks in competitive exams including JEE, NEET, and Olympiads year after year.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Vision & Mission
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Our guiding principles that shape our approach to education and student development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl">
              <Target className="h-12 w-12 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                To be a beacon of excellence in science education, consistently nurturing and empowering secondary and higher secondary students to achieve their academic and personal goals.
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2" />
                  Establishing ourselves as a recognized and respected institution throughout Virar
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2" />
                  Creating lasting positive impact on students' lives
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2" />
                  Maintaining enduring quality in education delivery
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl">
              <BookOpen className="h-12 w-12 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                To provide high-quality, structured classroom coaching that fosters a deep understanding of scientific concepts while creating a supportive learning environment.
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2" />
                  Creating a supportive and encouraging learning environment
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2" />
                  Empowering students with knowledge, skills, and confidence
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2" />
                  Maintaining continuous improvement and adaptation
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2" />
                  Establishing strong teacher-student-parent bonds
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                SSC Result March 2024-25 - Our Toppers
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Our students' achievements reflect our commitment to excellence in education
              </p>
            </div>

            {/* Top 3 Toppers Slider */}
            <div className="mb-12 relative max-w-xl mx-auto">
              <div className="overflow-hidden rounded-xl">
                <div className="relative aspect-square">
                  <div className="absolute inset-0 flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {toppers.map((topper, index) => (
                      <div key={index} className="min-w-full">
                        <div className="relative h-full">
                          <img 
                            src={topper.image} 
                            alt={topper.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="text-2xl font-bold mb-2">{topper.name}</h3>
                                <p className="text-lg opacity-90">{topper.school}</p>
                              </div>
                              <div className="text-right">
                                <div className="text-3xl font-bold text-indigo-400">{topper.percentage}</div>
                                <div className="text-lg">Rank #{topper.rank}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Slider Controls */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Dots */}
              <div className="flex justify-center mt-4 space-x-2">
                {toppers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      currentSlide === index 
                        ? 'bg-indigo-600 dark:bg-indigo-400' 
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Toppers Table */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-700">
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Student Name</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Percentage</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">School</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {sscToppers.map((student, index) => (
                      <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                        <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">{student.name}</td>
                        <td className="px-6 py-4 text-sm font-semibold text-indigo-600 dark:text-indigo-400">{student.percentage}</td>
                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">{student.school}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Overall Performance */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Overall Class Performance
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Performance Stats */}
                <div className="space-y-4">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Overall Class Result</div>
                    <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">100%</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {classPerformance.map((range, index) => (
                      <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4">
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">{range.range}</div>
                        <div className="text-xl font-semibold text-gray-900 dark:text-white">
                          {range.count} Students
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Performance Chart */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                  <div className="space-y-4">
                    {classPerformance.map((range, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600 dark:text-gray-400">{range.range}</span>
                          <span className="text-gray-900 dark:text-white font-medium">{range.count} students</span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                          <div 
                            className="h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full"
                            style={{ width: `${(range.count / 63) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Students & Parents Say
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Don't just take our word for it - hear from our community about their experience with Sadguru Science Classes
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 md:p-12">
                      <div className="flex flex-col items-center text-center">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full object-cover mb-6"
                        />
                        <div className="flex items-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                          ))}
                        </div>
                        <blockquote className="text-xl text-gray-900 dark:text-white mb-6 italic">
                          "{testimonial.quote}"
                        </blockquote>
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white">
                            {testimonial.name}
                          </div>
                          <div className="text-gray-600 dark:text-gray-400">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-2 rounded-full bg-white dark:bg-gray-600 shadow-lg text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-500 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-2 rounded-full bg-white dark:bg-gray-600 shadow-lg text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-500 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    currentTestimonial === index 
                      ? 'bg-indigo-600 dark:bg-indigo-400' 
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Join Our Success Story?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join us and be a part of our legacy of academic excellence and achievement. Let us help you reach your full potential.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-white text-indigo-600 rounded-full font-semibold hover:bg-indigo-50 transition-colors"
          >
            <Phone className="h-5 w-5 mr-2" />
            Enroll Today
          </a>
        </div>
      </div>

      {/* Featured Educational Content Section */}
      <div className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Educational Content
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Explore our most popular educational resources and learning materials
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {topPosts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/learn"
              className="inline-flex items-center px-8 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition-colors"
            >
              <span>Explore All Content</span>
              <ArrowUpRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;