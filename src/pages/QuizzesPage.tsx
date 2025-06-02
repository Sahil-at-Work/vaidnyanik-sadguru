import React, { useState } from 'react';
import { GraduationCap, Clock, Award, ExternalLink, Filter, X, ChevronDown, ChevronUp } from 'lucide-react';
import { quizzes, getAllSubjects, getAllClassLevels, getAllTopics } from '../data/quiz';
import { ClassLevel, Subject, Quiz } from '../types';

const QuizzesPage: React.FC = () => {
  const [selectedSubjects, setSelectedSubjects] = useState<Subject[]>([]);
  const [selectedClasses, setSelectedClasses] = useState<ClassLevel[]>([]);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Only get subjects and topics that are actually used in quizzes
  const subjects = getAllSubjects();
  const classLevels = getAllClassLevels();
  const topics = getAllTopics();

  const filteredQuizzes = quizzes.filter(quiz => {
    const matchesSubject = selectedSubjects.length === 0 || selectedSubjects.includes(quiz.subject);
    const matchesClass = selectedClasses.length === 0 || selectedClasses.includes(quiz.classLevel);
    const matchesTopics = selectedTopics.length === 0 || quiz.topics.some(topic => selectedTopics.includes(topic));
    const matchesSearch = !searchQuery || 
      quiz.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      quiz.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesSubject && matchesClass && matchesTopics && matchesSearch;
  });

  const clearFilters = () => {
    setSelectedSubjects([]);
    setSelectedClasses([]);
    setSelectedTopics([]);
    setSearchQuery('');
  };

  const activeFilterCount = selectedSubjects.length + selectedClasses.length + selectedTopics.length + (searchQuery ? 1 : 0);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <GraduationCap className="h-16 w-16 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Interactive Quizzes
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Challenge yourself with our curated collection of subject-specific quizzes. 
              Each quiz is designed to test and enhance your understanding of key concepts.
            </p>
          </div>

          {/* Filters Toggle Button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 mb-4 flex items-center justify-between"
          >
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              <span className="font-medium text-gray-900 dark:text-white">
                Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
              </span>
            </div>
            {showFilters ? (
              <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            )}
          </button>

          {/* Filters Section */}
          {showFilters && (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Filter Options</h2>
                {activeFilterCount > 0 && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    Clear all filters
                  </button>
                )}
              </div>

              {/* Search */}
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Search quizzes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Filter Groups */}
              <div className="space-y-6">
                {/* Subjects */}
                <div>
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subjects</h3>
                  <div className="flex flex-wrap gap-2">
                    {subjects.map(subject => (
                      <button
                        key={subject}
                        onClick={() => {
                          setSelectedSubjects(prev =>
                            prev.includes(subject)
                              ? prev.filter(s => s !== subject)
                              : [...prev, subject]
                          );
                        }}
                        className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                          selectedSubjects.includes(subject)
                            ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                        }`}
                      >
                        {subject}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Class Levels */}
                <div>
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Class Level</h3>
                  <div className="flex flex-wrap gap-2">
                    {classLevels.map(level => (
                      <button
                        key={level}
                        onClick={() => {
                          setSelectedClasses(prev =>
                            prev.includes(level)
                              ? prev.filter(c => c !== level)
                              : [...prev, level]
                          );
                        }}
                        className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                          selectedClasses.includes(level)
                            ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                        }`}
                      >
                        {level} Standard
                      </button>
                    ))}
                  </div>
                </div>

                {/* Topics */}
                <div>
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Topics</h3>
                  <div className="flex flex-wrap gap-2">
                    {topics.map(topic => (
                      <button
                        key={topic}
                        onClick={() => {
                          setSelectedTopics(prev =>
                            prev.includes(topic)
                              ? prev.filter(t => t !== topic)
                              : [...prev, topic]
                          );
                        }}
                        className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                          selectedTopics.includes(topic)
                            ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                        }`}
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Active Filters */}
          {activeFilterCount > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedSubjects.map(subject => (
                <button
                  key={subject}
                  onClick={() => setSelectedSubjects(prev => prev.filter(s => s !== subject))}
                  className="flex items-center space-x-1 px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm"
                >
                  <span>{subject}</span>
                  <X className="h-4 w-4" />
                </button>
              ))}
              {selectedClasses.map(level => (
                <button
                  key={level}
                  onClick={() => setSelectedClasses(prev => prev.filter(c => c !== level))}
                  className="flex items-center space-x-1 px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm"
                >
                  <span>{level} Standard</span>
                  <X className="h-4 w-4" />
                </button>
              ))}
              {selectedTopics.map(topic => (
                <button
                  key={topic}
                  onClick={() => setSelectedTopics(prev => prev.filter(t => t !== topic))}
                  className="flex items-center space-x-1 px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm"
                >
                  <span>{topic}</span>
                  <X className="h-4 w-4" />
                </button>
              ))}
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="flex items-center space-x-1 px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm"
                >
                  <span>Search: {searchQuery}</span>
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          )}

          {/* Quiz Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {filteredQuizzes.map(quiz => (
              <a
                key={quiz.id}
                href={quiz.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                  <img 
                    src={quiz.imageUrl} 
                    alt={quiz.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="px-3 py-1 bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white text-sm font-medium rounded-full">
                          {quiz.subject}
                        </span>
                        <span className="px-3 py-1 bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white text-sm font-medium rounded-full">
                          {quiz.classLevel}
                        </span>
                      </div>
                      <ExternalLink className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {quiz.title}
                  </h2>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {quiz.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {quiz.topics.map(topic => (
                      <span
                        key={topic}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400">
                      <div className="flex items-center">
                        <Award className="h-4 w-4 mr-1" />
                        <span>{quiz.questionCount} questions</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{quiz.duration} minutes</span>
                      </div>
                    </div>
                    
                    <span className="text-indigo-600 dark:text-indigo-400 font-medium">
                      Take Quiz
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {filteredQuizzes.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400">
                No quizzes found matching your filters. Try adjusting your selection.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizzesPage;