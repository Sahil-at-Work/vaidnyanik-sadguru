import React, { createContext, useContext, useState, useEffect } from 'react';
import { Post, FilterState, ClassLevel, Subject } from '../types';
import { supabase } from '../lib/supabase';

interface PostsContextType {
  posts: Post[];
  filteredPosts: Post[];
  filters: FilterState;
  updateFilters: (newFilters: Partial<FilterState>) => void;
  resetFilters: () => void;
  bookmarkPost: (postId: string) => Promise<void>;
  likePost: (postId: string) => Promise<void>;
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
  const [posts, setPosts] = useState<Post[]>([]);
  const [filters, setFilters] = useState<FilterState>(defaultFilters);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [availableFilters, setAvailableFilters] = useState({
    classLevels: [] as ClassLevel[],
    subjects: [] as Subject[],
    topics: [] as string[]
  });

  // Fetch posts from Supabase
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('posts')
        .select('*, likes_count, bookmarks(user_id)');

      if (error) throw error;

      const formattedPosts = data.map(post => ({
        ...post,
        bookmarked: post.bookmarks?.length > 0,
        likes: post.likes_count,
        images: post.images || [] // Ensure images is always an array
      }));

      setPosts(formattedPosts);
      updateAvailableFilters(formattedPosts);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const updateAvailableFilters = (posts: Post[]) => {
    const subjects = new Set<Subject>();
    const topics = new Set<string>();
    const classLevels = new Set<ClassLevel>();

    posts.forEach(post => {
      subjects.add(post.subject);
      post.topics.forEach(topic => topics.add(topic));
      classLevels.add(post.class);
    });

    setAvailableFilters({
      subjects: Array.from(subjects).sort(),
      topics: Array.from(topics).sort(),
      classLevels: Array.from(classLevels).sort()
    });
  };

  // Apply filters whenever posts or filters change
  useEffect(() => {
    let result = [...posts];
    
    if (filters.classLevels.length > 0) {
      result = result.filter(post => filters.classLevels.includes(post.class));
    }
    
    if (filters.subjects.length > 0) {
      result = result.filter(post => filters.subjects.includes(post.subject));
    }
    
    if (filters.topics.length > 0) {
      result = result.filter(post => 
        post.topics.some(topic => filters.topics.includes(topic))
      );
    }
    
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

  const bookmarkPost = async (postId: string) => {
    try {
      const post = posts.find(p => p.id === postId);
      if (!post) return;

      if (post.bookmarked) {
        await supabase
          .from('bookmarks')
          .delete()
          .match({ post_id: postId });
      } else {
        await supabase
          .from('bookmarks')
          .insert({ post_id: postId });
      }

      setPosts(prevPosts => 
        prevPosts.map(p => 
          p.id === postId ? { ...p, bookmarked: !p.bookmarked } : p
        )
      );
    } catch (error) {
      console.error('Error toggling bookmark:', error);
    }
  };

  const likePost = async (postId: string) => {
    try {
      const { data, error } = await supabase.rpc('increment_likes', {
        post_id: postId
      });

      if (error) throw error;

      setPosts(prevPosts => 
        prevPosts.map(p => 
          p.id === postId ? { ...p, likes: data.likes_count } : p
        )
      );
    } catch (error) {
      console.error('Error liking post:', error);
    }
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
        likePost,
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