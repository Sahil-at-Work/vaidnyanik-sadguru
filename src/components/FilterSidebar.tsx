import React from 'react';
import { X, Filter, ChevronDown, ChevronUp } from 'lucide-react';
import { usePosts } from '../context/PostsContext';
import { ClassLevel, Subject } from '../types';

interface FilterSectionProps {
  title: string;
  isOpen: boolean;
  toggleOpen: () => void;
  children: React.ReactNode;
}

const FilterSection: React.FC<FilterSectionProps> = ({ title, isOpen, toggleOpen, children }) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
      <button 
        className="flex justify-between items-center w-full py-2 text-left font-medium text-gray-900 dark:text-white"
        onClick={toggleOpen}
      >
        {title}
        {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </button>
      {isOpen && (
        <div className="mt-2 space-y-2">
          {children}
        </div>
      )}
    </div>
  );
};

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ isOpen, onClose }) => {
  const { filters, updateFilters, resetFilters, availableFilters } = usePosts();
  const [openSections, setOpenSections] = React.useState({
    class: true,
    subject: true,
    topics: true
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleClassChange = (classLevel: ClassLevel) => {
    const updatedClasses = filters.classLevels.includes(classLevel)
      ? filters.classLevels.filter(cl => cl !== classLevel)
      : [...filters.classLevels, classLevel];
    
    updateFilters({ classLevels: updatedClasses });
  };

  const handleSubjectChange = (subject: Subject) => {
    const updatedSubjects = filters.subjects.includes(subject)
      ? filters.subjects.filter(s => s !== subject)
      : [...filters.subjects, subject];
    
    updateFilters({ subjects: updatedSubjects });
  };

  const handleTopicChange = (topic: string) => {
    const updatedTopics = filters.topics.includes(topic)
      ? filters.topics.filter(t => t !== topic)
      : [...filters.topics, topic];
    
    updateFilters({ topics: updatedTopics });
  };

  return (
    <div 
      className={`fixed inset-y-0 left-0 z-50 w-72 bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 md:static md:w-64`}
    >
      <div className="p-4 h-full overflow-y-auto pt-20 md:pt-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
            <Filter className="h-5 w-5 mr-2" />
            Filters
          </h2>
          <button 
            onClick={onClose} 
            className="md:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="space-y-6">
          <button 
            onClick={resetFilters}
            className="w-full py-2 px-4 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 rounded-lg transition-colors duration-200 text-sm font-medium dark:bg-indigo-900/30 dark:hover:bg-indigo-900/50 dark:text-indigo-400"
          >
            Clear All Filters
          </button>
          
          <FilterSection 
            title="Class Level" 
            isOpen={openSections.class}
            toggleOpen={() => toggleSection('class')}
          >
            {availableFilters.classLevels.map(classLevel => (
              <label key={classLevel} className="flex items-center space-x-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={filters.classLevels.includes(classLevel)}
                  onChange={() => handleClassChange(classLevel)}
                  className="rounded text-indigo-600 focus:ring-indigo-500 h-4 w-4 dark:bg-gray-800 dark:border-gray-600"
                />
                <span className="text-gray-700 dark:text-gray-300">{classLevel} Standard</span>
              </label>
            ))}
          </FilterSection>
          
          <FilterSection 
            title="Subject" 
            isOpen={openSections.subject}
            toggleOpen={() => toggleSection('subject')}
          >
            {availableFilters.subjects.map(subject => (
              <label key={subject} className="flex items-center space-x-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={filters.subjects.includes(subject)}
                  onChange={() => handleSubjectChange(subject)}
                  className="rounded text-indigo-600 focus:ring-indigo-500 h-4 w-4 dark:bg-gray-800 dark:border-gray-600"
                />
                <span className="text-gray-700 dark:text-gray-300">{subject}</span>
              </label>
            ))}
          </FilterSection>
          
          <FilterSection 
            title="Topics" 
            isOpen={openSections.topics}
            toggleOpen={() => toggleSection('topics')}
          >
            <div className="grid grid-cols-1 gap-2">
              {availableFilters.topics.map(topic => (
                <label key={topic} className="flex items-center space-x-2 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={filters.topics.includes(topic)}
                    onChange={() => handleTopicChange(topic)}
                    className="rounded text-indigo-600 focus:ring-indigo-500 h-4 w-4 dark:bg-gray-800 dark:border-gray-600"
                  />
                  <span className="text-gray-700 dark:text-gray-300 text-sm">{topic}</span>
                </label>
              ))}
            </div>
          </FilterSection>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;