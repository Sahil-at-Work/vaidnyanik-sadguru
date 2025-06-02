import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Book, Moon, Sun, Search, Menu, X, GraduationCap, Home, BookmarkIcon, InfoIcon, BookOpen } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { usePosts } from '../context/PostsContext';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { updateFilters } = usePosts();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    updateFilters({ searchQuery });
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const getHeaderBackground = () => {
    if (isHomePage && !isScrolled) return 'bg-transparent';
    if (isScrolled) return 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md';
    return 'bg-white dark:bg-gray-900 shadow-sm';
  };

  const getLinkStyles = () => {
    if (isHomePage && !isScrolled) {
      return 'text-white/90 hover:text-white';
    }
    return 'text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400';
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${getHeaderBackground()}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Book className={`h-6 w-6 ${isHomePage && !isScrolled ? 'text-white' : 'text-indigo-600 dark:text-indigo-400'}`} />
            <span className={`text-xl font-bold ${isHomePage && !isScrolled ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
              Vaidnyanik
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`flex items-center space-x-2 ${getLinkStyles()}`}>
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link to="/learn" className={`flex items-center space-x-2 ${getLinkStyles()}`}>
              <BookOpen className="h-5 w-5" />
              <span>Learn</span>
            </Link>
            <Link to="/quizzes" className={`flex items-center space-x-2 ${getLinkStyles()}`}>
              <GraduationCap className="h-5 w-5" />
              <span>Quizzes</span>
            </Link>
            <Link to="/bookmarks" className={`flex items-center space-x-2 ${getLinkStyles()}`}>
              <BookmarkIcon className="h-5 w-5" />
              <span>Bookmarks</span>
            </Link>
            <Link to="/about" className={`flex items-center space-x-2 ${getLinkStyles()}`}>
              <InfoIcon className="h-5 w-5" />
              <span>About</span>
            </Link>
          </nav>
          
          {/* Search, Theme Toggle, and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <form onSubmit={handleSearch} className="hidden md:flex relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`py-1 px-3 pr-10 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  isHomePage && !isScrolled
                    ? 'bg-white/10 text-white placeholder-white/70'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100'
                }`}
              />
              <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <Search className={`h-4 w-4 ${
                  isHomePage && !isScrolled ? 'text-white/70' : 'text-gray-500 dark:text-gray-400'
                }`} />
              </button>
            </form>
            
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                isHomePage && !isScrolled
                  ? 'text-white/90 hover:text-white hover:bg-white/10'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            
            <button
              onClick={toggleMobileMenu}
              className={`md:hidden p-2 rounded-full transition-colors ${
                isHomePage && !isScrolled
                  ? 'text-white/90 hover:text-white hover:bg-white/10'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-4">
            <Link 
              to="/" 
              className="flex items-center space-x-2 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link 
              to="/learn" 
              className="flex items-center space-x-2 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              <BookOpen className="h-5 w-5" />
              <span>Learn</span>
            </Link>
            <Link 
              to="/quizzes" 
              className="flex items-center space-x-2 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              <GraduationCap className="h-5 w-5" />
              <span>Quizzes</span>
            </Link>
            <Link 
              to="/bookmarks" 
              className="flex items-center space-x-2 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              <BookmarkIcon className="h-5 w-5" />
              <span>Bookmarks</span>
            </Link>
            <Link 
              to="/about" 
              className="flex items-center space-x-2 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              <InfoIcon className="h-5 w-5" />
              <span>About</span>
            </Link>
            
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="flex relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2 px-4 pr-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Search className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;