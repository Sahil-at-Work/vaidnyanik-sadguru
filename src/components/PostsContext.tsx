import React, { createContext, useContext, useState, useEffect } from 'react';
import { Post, FilterState, ClassLevel, Subject } from '../types';
import { posts as initialPosts, getAllClassLevels, getAllSubjects, getAllTopics } from '../data/posts/index';

interface PostsContextType {
  posts: Post[];
  filteredPosts: Post[];
  filters: FilterState;
  updateFilters: (newFilters: Partial<FilterState>) => void;
  resetFilters: () => void;
  bookmarkPost: (postId: string) => void;
  getPostById: (id: string) => Post | undefined;
  getRelatedPosts: (post: Post) => Post[];
  availableFilters: {
    classLevels: ClassLevel[];
    subjects: Subject[];
    topics: string[];
  };
}

const defaultFilters: FilterState = {
  classLevels: [],
  subjects: [],
  topics: [],
  searchQuery: '',
};

const PostsContext = createContext<PostsContextType | undefined>(undefined);

export const PostsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [posts] = useState<Post[]>(initialPosts);
  const [filters, setFilters] = useState<FilterState>(defaultFilters);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);
  const [availableFilters] = useState({
    classLevels: getAllClassLevels(),
    subjects: getAllSubjects(),
    topics: getAllTopics()
  });

  // Apply filters whenever posts or filters change
  useEffect(() => {
    let result = [...posts];
    
    // Filter by class levels
    if (filters.classLevels.length > 0) {
      result = result.filter(post => filters.classLevels.includes(post.class));
    }
    
    // Filter by subjects
    if (filters.subjects.length > 0) {
      result = result.filter(post => filters.subjects.includes(post.subject));
    }
    
    // Filter by topics
    if (filters.topics.length > 0) {
      result = result.filter(post => 
        post.topics.some(topic => filters.topics.includes(topic))
      );
    }
    
    // Filter by search query
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      result = result.filter(post => 
        post.title.toLowerCase().includes(query) || 
        post.caption.toLowerCase().includes(query) ||
        post.topics.some(topic => topic.toLowerCase().includes(query))
      );
    }
    
    setFilteredPosts(result);
  }, [posts, filters]);

  const updateFilters = (newFilters: Partial<FilterState>) => {
    setFilters(prevFilters => ({ ...prevFilters, ...newFilters }));
  };

  const resetFilters = () => {
    setFilters(defaultFilters);
  };

  const bookmarkPost = (postId: string) => {
    const updatedPosts = posts.map(post => 
      post.id === postId ? { ...post, bookmarked: !post.bookmarked } : post
    );
    // Update both posts and filtered posts to maintain consistency
    setFilteredPosts(prevFiltered => 
      prevFiltered.map(post => 
        post.id === postId ? { ...post, bookmarked: !post.bookmarked } : post
      )
    );
  };

  const getPostById = (id: string) => {
    return posts.find(post => post.id === id);
  };

  const getRelatedPosts = (post: Post) => {
    return posts
      .filter(p => 
        p.id !== post.id && 
        (p.subject === post.subject || 
          p.topics.some(topic => post.topics.includes(topic)))
      )
      .slice(0, 3);
  };

  return (
    <PostsContext.Provider 
      value={{ 
        posts, 
        filteredPosts, 
        filters, 
        updateFilters, 
        resetFilters, 
        bookmarkPost,
        getPostById,
        getRelatedPosts,
        availableFilters
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = (): PostsContextType => {
  const context = useContext(PostsContext);
  if (context === undefined) {
    throw new Error('usePosts must be used within a PostsProvider');
  }
  return context;
};