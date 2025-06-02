import React from 'react';
import PostGrid from '../components/PostGrid';
import { Bookmark } from 'lucide-react';

const BookmarksPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <Bookmark className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Your Bookmarks
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Access your saved educational content for later reference
          </p>
        </div>
        
        <PostGrid showBookmarkedOnly={true} />
      </div>
    </div>
  );
};

export default BookmarksPage;