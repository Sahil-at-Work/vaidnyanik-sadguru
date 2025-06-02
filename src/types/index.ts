export interface Post {
  id: string;
  title: string;
  images: PostImage[];
  caption: string;
  class: ClassLevel;
  subject: Subject;
  topics: string[];
  createdAt: string;
  likes: number;
  bookmarked: boolean;
  quiz?: Quiz;
}

export interface PostImage {
  url: string;
  caption: string;
}

export interface Quiz {
  id: string;
  title: string;
  subject: Subject;
  description: string;
  externalUrl: string;
  imageUrl: string;
  duration: number;
  questionCount: number;
  classLevel: ClassLevel;
  topics: string[];
}

export type ClassLevel = '8th' | '9th' | '10th' | '11th' | '12th';

export type Subject = 
  | 'Mathematics' 
  | 'Science' 
  | 'Physics' 
  | 'Chemistry' 
  | 'Biology' 
  | 'History' 
  | 'Geography' 
  | 'English' 
  | 'Computer Science' 
  | 'Economics';

export interface FilterState {
  classLevels: ClassLevel[];
  subjects: Subject[];
  topics: string[];
  searchQuery: string;
}

export interface UserProgress {
  completedPosts: string[];
  quizScores: Record<string, number>;
  achievements: Achievement[];
  studyTime: number;
  lastStudySession?: StudySession;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt?: string;
}

export interface StudySession {
  id: string;
  startTime: string;
  endTime?: string;
  duration: number;
  subject?: Subject;
  topic?: string;
}