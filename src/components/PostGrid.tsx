import React, { useEffect, useState } from 'react';
import PostCard from './PostCard';
import { usePosts } from '../context/PostsContext';
import { Search } from 'lucide-react';

interface PostGridProps {
  showBookmarkedOnly?: boolean;
}

const PostGrid: React.FC<PostGridProps> = ({ showBookmarkedOnly = false }) => {
  const { filteredPosts, filters } = usePosts();
  const [isLoading, setIsLoading] = useState(true);
  const [hasActiveFilters, setHasActiveFilters] = useState(false);
  
  const displayPosts = showBookmarkedOnly 
    ? filteredPosts.filter(post => post.bookmarked)
    : filteredPosts;

  // Simulate loading state
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [filters]);

  // Check if there are any active filters
  useEffect(() => {
    setHasActiveFilters(
      filters.classLevels.length > 0 || 
      filters.subjects.length > 0 || 
      filters.topics.length > 0 || 
      filters.searchQuery !== ''
    );
  }, [filters]);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow animate-pulse h-80">
            <div className="w-full h-48 bg-gray-200 dark:bg-gray-700"></div>
            <div className="p-4 space-y-3">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (displayPosts.length === 0) {
    return (
      <div className="text-center py-10">
        <Search className="mx-auto h-16 w-16 text-gray-400 dark:text-gray-600 mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No posts found</h3>
        <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
          {showBookmarkedOnly 
            ? "You haven't bookmarked any posts yet" 
            : hasActiveFilters 
              ? "Try adjusting your filters to see more content" 
              : "There are no posts available at the moment"}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayPosts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostGrid;