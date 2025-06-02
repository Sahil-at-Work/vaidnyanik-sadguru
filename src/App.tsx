import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { PostsProvider } from './context/PostsContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BookmarksPage from './pages/BookmarksPage';
import PostDetailPage from './pages/PostDetailPage';
import AboutPage from './pages/AboutPage';
import QuizzesPage from './pages/QuizzesPage';
import LearnPage from './pages/LearnPage';

function App() {
  return (
    <ThemeProvider>
      <PostsProvider>
        <Router>
          <div className="flex flex-col min-h-screen dark:bg-gray-900">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/bookmarks" element={<BookmarksPage />} />
                <Route path="/post/:id" element={<PostDetailPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/quizzes" element={<QuizzesPage />} />
                <Route path="/learn" element={<LearnPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </PostsProvider>
    </ThemeProvider>
  );
}

export default App