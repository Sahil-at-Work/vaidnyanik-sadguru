import React from 'react';
import { Tag } from 'lucide-react';
import { getAllTopics } from '../data/posts/index';
import { usePosts } from '../context/PostsContext';

const TagCloud: React.FC = () => {
  const { filters, updateFilters } = usePosts();
  const topics = getAllTopics();
  
  const handleTopicClick = (topic: string) => {
    // Toggle the topic in the filter
    const updatedTopics = filters.topics.includes(topic)
      ? filters.topics.filter(t => t !== topic)
      : [...filters.topics, topic];
    
    updateFilters({ topics: updatedTopics });
  };
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4">
      <div className="flex items-center space-x-2 mb-4">
        <Tag className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Explore Topics</h3>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {topics.map(topic => (
          <button
            key={topic}
            onClick={() => handleTopicClick(topic)}
            className={`text-sm px-3 py-1.5 rounded-full transition-colors ${
              filters.topics.includes(topic)
                ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {topic}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TagCloud;