import React from 'react';
import { Book, Award, Users, BookOpen, Star } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Book className="h-16 w-16 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Vaidnyanik
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Empowering students through engaging educational content
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mb-12">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Our Mission
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Vaidnyanik was created with a simple yet powerful mission: to make educational 
                content accessible, engaging, and easy to navigate for students from 8th to 12th standard.
                We believe that learning becomes more effective when information is presented in a 
                visually appealing and well-organized manner.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Our platform combines the best aspects of educational resources and social media, 
                creating an interactive space where students can discover content relevant to their 
                academic journey, bookmark important information, and easily filter through subjects 
                and topics that interest them the most.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center">
              <Award className="h-12 w-12 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Quality Content
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Expertly curated educational materials to enhance learning and understanding.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center">
              <Users className="h-12 w-12 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Student-Centered
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Designed with students' needs in mind, making learning more accessible and engaging.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center">
              <BookOpen className="h-12 w-12 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Diverse Subjects
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Covering a wide range of academic subjects from mathematics to literature.
              </p>
            </div>
          </div>
          
          <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-6 md:p-8 border border-indigo-100 dark:border-indigo-800 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              How It Works
            </h2>
            <ul className="space-y-4">
              <li className="flex">
                <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white font-semibold mr-3">
                  1
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Browse Content</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Explore our vast library of educational posts across various subjects.
                  </p>
                </div>
              </li>
              <li className="flex">
                <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white font-semibold mr-3">
                  2
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Filter by Needs</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Use our intuitive filtering system to find content by class, subject, or topic.
                  </p>
                </div>
              </li>
              <li className="flex">
                <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white font-semibold mr-3">
                  3
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Save & Share</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Bookmark important posts for later reference and share them with classmates.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Testimonials Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              What Our Community Says
            </h2>
            <div className="grid gap-8">
              {/* Student Testimonial */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      src="https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg"
                      alt="Student"
                      className="h-12 w-12 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center mb-1">
                      <Star className="h-5 w-5 text-amber-400" />
                      <Star className="h-5 w-5 text-amber-400" />
                      <Star className="h-5 w-5 text-amber-400" />
                      <Star className="h-5 w-5 text-amber-400" />
                      <Star className="h-5 w-5 text-amber-400" />
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      "Vaidnyanik has completely transformed my learning experience. The interactive content 
                      and detailed explanations make complex topics easy to understand. I've seen a significant 
                      improvement in my grades since I started using the platform."
                    </p>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Priya Sharma</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Class 12 Student, Delhi Public School</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Teacher Testimonial */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      src="https://images.pexels.com/photos/8197534/pexels-photo-8197534.jpeg"
                      alt="Teacher"
                      className="h-12 w-12 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center mb-1">
                      <Star className="h-5 w-5 text-amber-400" />
                      <Star className="h-5 w-5 text-amber-400" />
                      <Star className="h-5 w-5 text-amber-400" />
                      <Star className="h-5 w-5 text-amber-400" />
                      <Star className="h-5 w-5 text-amber-400" />
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      "As an educator, I find Vaidnyanik to be an invaluable teaching resource. The platform's 
                      structured approach to content delivery and the quality of educational materials have 
                      made my lessons more effective and engaging for students."
                    </p>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Dr. Rajesh Kumar</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Physics Teacher, 15 years experience</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Parent Testimonial */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      src="https://images.pexels.com/photos/3785424/pexels-photo-3785424.jpeg"
                      alt="Parent"
                      className="h-12 w-12 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center mb-1">
                      <Star className="h-5 w-5 text-amber-400" />
                      <Star className="h-5 w-5 text-amber-400" />
                      <Star className="h-5 w-5 text-amber-400" />
                      <Star className="h-5 w-5 text-amber-400" />
                      <Star className="h-5 w-5 text-amber-400" />
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      "I've seen a remarkable improvement in my daughter's academic performance since she 
                      started using Vaidnyanik. The platform's comprehensive coverage of subjects and 
                      interactive learning approach has helped her develop a deeper understanding of concepts."
                    </p>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Mrs. Meera Patel</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Parent of a Class 11 student</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Join Our Community
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Whether you're studying for exams or looking to deepen your understanding of a subject,
              Vaidnyanik is here to support your educational journey.
            </p>
            <a
              href="mailto:contact@vaidnyanik.com"
              className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;