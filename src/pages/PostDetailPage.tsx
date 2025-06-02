import React, { useEffect, useState, useCallback } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Bookmark, BookmarkCheck, Heart, Share2, ChevronRight, ChevronLeft } from 'lucide-react';
import { usePosts } from '../context/PostsContext';
import PostCard from '../components/PostCard';

const PostDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getPostById, bookmarkPost, getRelatedPosts } = usePosts();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  
  const post = getPostById(id || '');
  
  useEffect(() => {
    if (!post) {
      navigate('/');
    }
    window.scrollTo(0, 0);
  }, [post, navigate]);

  const handleKeyNavigation = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      handlePrevImage();
    } else if (e.key === 'ArrowRight') {
      handleNextImage();
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyNavigation);
    return () => window.removeEventListener('keydown', handleKeyNavigation);
  }, [handleKeyNavigation]);
  
  if (!post) {
    return null;
  }
  
  const relatedPosts = getRelatedPosts(post);
  
  const handleBookmark = () => {
    bookmarkPost(post.id);
  };
  
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.caption,
          url: window.location.href,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(prev => 
      prev === 0 ? post.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex(prev => 
      prev === post.images.length - 1 ? 0 : prev + 1
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;

    const currentTouch = e.touches[0].clientX;
    const diff = touchStart - currentTouch;

    // Threshold of 50px for swipe
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe left
        handleNextImage();
      } else {
        // Swipe right
        handlePrevImage();
      }
      setTouchStart(null);
    }
  };

  const handleTouchEnd = () => {
    setTouchStart(null);
  };
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb navigation */}
        <nav className="flex items-center space-x-2 mb-6 text-sm">
          <Link 
            to="/" 
            className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Home
          </Link>
          <ChevronRight className="h-4 w-4 text-gray-400 dark:text-gray-600" />
          <span className="text-gray-900 dark:text-white">{post.title}</span>
        </nav>
        
        {/* Post Header */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full">
              {post.class} Standard
            </span>
            <span className="inline-block px-3 py-1 text-sm font-medium bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full">
              {post.subject}
            </span>
            {post.topics.map(topic => (
              <span 
                key={topic} 
                className="inline-block px-3 py-1 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
              >
                {topic}
              </span>
            ))}
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
            <time dateTime={post.createdAt}>
              {new Date(post.createdAt).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </time>
            <div className="flex items-center space-x-1">
              <Heart className="h-4 w-4 text-rose-500" />
              <span>{post.likes} likes</span>
            </div>
          </div>
        </div>
        
        {/* Post Image Gallery */}
        <div className="mb-8 rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 p-2">
          <div className="relative">
            <img 
              src={post.images[currentImageIndex].url} 
              alt={post.images[currentImageIndex].caption}
              className="w-full max-h-[600px] object-contain rounded-lg cursor-grab active:cursor-grabbing"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              draggable={false}
            />
            
            {/* Image Navigation */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between items-center px-4">
              <button
                onClick={handlePrevImage}
                className="p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors transform hover:scale-110"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={handleNextImage}
                className="p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors transform hover:scale-110"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
            
            {/* Image Indicators */}
            <div className="absolute bottom-4 left-0 right-0">
              <div className="flex justify-center space-x-2">
                {post.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-white scale-110' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
              <p className="text-center text-white text-sm mt-2 bg-black/50 py-1 px-4 rounded-full mx-auto w-fit">
                {post.images[currentImageIndex].caption}
              </p>
            </div>
          </div>
          
          {/* Thumbnail Navigation */}
          <div className="flex justify-center space-x-2 mt-4 px-2">
            {post.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'ring-2 ring-indigo-600 dark:ring-indigo-400' 
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                <img 
                  src={image.url} 
                  alt={image.caption}
                  className="w-20 h-20 object-cover"
                  draggable={false}
                />
              </button>
            ))}
          </div>
        </div>
        
        {/* Post Content */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8">
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
            {post.caption}
          </p>
          
          {/* Action Buttons */}
          <div className="flex justify-center space-x-4 pt-6 border-t border-gray-100 dark:border-gray-700">
            <button 
              onClick={handleBookmark}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              {post.bookmarked ? (
                <>
                  <BookmarkCheck className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  <span>Bookmarked</span>
                </>
              ) : (
                <>
                  <Bookmark className="h-5 w-5" />
                  <span>Bookmark</span>
                </>
              )}
            </button>
            
            <button 
              onClick={handleShare}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <Share2 className="h-5 w-5" />
              <span>Share</span>
            </button>
          </div>
        </div>
        
        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Related Content
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map(relatedPost => (
                <PostCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostDetailPage;