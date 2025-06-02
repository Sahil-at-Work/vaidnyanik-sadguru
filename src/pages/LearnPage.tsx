import React, { useState } from 'react';
import FilterSidebar from '../components/FilterSidebar';
import PostGrid from '../components/PostGrid';
import TagCloud from '../components/TagCloud';
import { usePosts } from '../context/PostsContext';
import { Menu } from 'lucide-react';

const LearnPage: React.FC = () => {
  const { filteredPosts, filters } = usePosts();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Calculate the active filter count
  const activeFilterCount = 
    filters.classLevels.length + 
    filters.subjects.length + 
    filters.topics.length + 
    (filters.searchQuery ? 1 : 0);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar toggle for mobile */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden flex items-center space-x-2 mb-4 bg-white dark:bg-gray-800 py-2 px-4 rounded-lg shadow-sm"
          >
            <Menu className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            <span className="text-gray-900 dark:text-white font-medium">Filters</span>
            {activeFilterCount > 0 && (
              <span className="bg-indigo-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                {activeFilterCount}
              </span>
            )}
          </button>
          
          {/* Sidebar */}
          <div className="md:w-1/4">
            <FilterSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          </div>
          
          {/* Main content */}
          <div className="md:w-3/4">
            <div className="mb-6">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Educational Content
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Explore {filteredPosts.length} posts on various subjects and topics
              </p>
            </div>
            
            {/* Tag Cloud */}
            <div className="mb-8">
              <TagCloud />
            </div>
            
            {/* Post Grid */}
            <PostGrid />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnPage;