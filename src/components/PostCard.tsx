import React from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, BookmarkCheck, Heart, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { Post } from '../types';
import { usePosts } from '../context/PostsContext';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const { bookmarkPost } = usePosts();
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  
  const handleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    bookmarkPost(post.id);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex(prev => 
      prev === 0 ? post.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex(prev => 
      prev === post.images.length - 1 ? 0 : prev + 1
    );
  };

  const hasImages = post.images && post.images.length > 0;

  return (
    <Link 
      to={`/post/${post.id}`}
      className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
    >
      <div className="relative overflow-hidden">
        {hasImages ? (
          <>
            <img 
              src={post.images[currentImageIndex].url} 
              alt={post.images[currentImageIndex].caption || post.title}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            {post.images.length > 1 && (
              <>
                {/* Image Navigation */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between items-center px-2">
                  <button
                    onClick={handlePrevImage}
                    className="p-1.5 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors transform hover:scale-110"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="p-1.5 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors transform hover:scale-110"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
                
                {/* Image Indicators */}
                <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
                  {post.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setCurrentImageIndex(index);
                      }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'bg-white scale-110' 
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="w-full h-48 bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
            <ImageIcon className="w-12 h-12 text-gray-400 dark:text-gray-500" />
          </div>
        )}
        
        <div className="absolute top-0 left-0 m-3">
          <span className="inline-block px-2 py-1 text-xs font-semibold bg-indigo-600/90 text-white rounded-full">
            {post.class} Standard
          </span>
        </div>
        <div className="absolute top-0 right-0 m-3">
          <button 
            onClick={handleBookmark}
            className="p-1.5 bg-white/90 dark:bg-gray-800/90 rounded-full text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            aria-label={post.bookmarked ? "Remove bookmark" : "Add bookmark"}
          >
            {post.bookmarked ? (
              <BookmarkCheck className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            ) : (
              <Bookmark className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        <div className="mb-2 flex items-center space-x-2">
          <span className="px-2 py-1 text-xs font-medium bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 rounded">
            {post.subject}
          </span>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
          {post.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3 flex-grow">
          {post.caption}
        </p>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {post.topics.map(topic => (
            <span 
              key={topic} 
              className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
            >
              {topic}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mt-auto pt-2 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center space-x-1">
            <Heart className="h-4 w-4 text-rose-500" />
            <span>{post.likes}</span>
          </div>
          <time dateTime={post.createdAt}>
            {new Date(post.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </time>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;