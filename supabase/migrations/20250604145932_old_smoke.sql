/*
  # Add quizzes table and sample data

  1. New Tables
    - `quizzes`
      - `id` (uuid, primary key)
      - `title` (text)
      - `subject` (text)
      - `description` (text)
      - `external_url` (text)
      - `image_url` (text)
      - `duration` (integer)
      - `question_count` (integer)
      - `class_level` (text)
      - `topics` (text[])
      - `post_id` (uuid, references posts)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on quizzes table
    - Add policy for public read access
*/

-- Create quizzes table
CREATE TABLE IF NOT EXISTS quizzes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  subject text NOT NULL,
  description text,
  external_url text NOT NULL,
  image_url text,
  duration integer NOT NULL,
  question_count integer NOT NULL,
  class_level text NOT NULL,
  topics text[] DEFAULT '{}',
  post_id uuid REFERENCES posts(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE quizzes ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Anyone can read quizzes"
  ON quizzes
  FOR SELECT
  TO public
  USING (true);

-- Insert sample quizzes
INSERT INTO quizzes (title, subject, description, external_url, image_url, duration, question_count, class_level, topics, post_id)
VALUES
  (
    'Vectors',
    'Mathematics',
    'Test your understanding of vectors, their properties, and applications.',
    'https://docs.google.com/forms/d/e/1FAIpQLScPZBBO-55t-_lZueJ9n0b2-eYtEwZgDaRUj63rUQ318qesMw/viewform',
    'https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg',
    30,
    12,
    '12th',
    ARRAY['Mathematics', 'Vectors'],
    (SELECT id FROM posts WHERE title = 'Understanding Pythagorean Theorem' LIMIT 1)
  ),
  (
    'Units and Measurements',
    'Physics',
    'Comprehensive quiz on units, measurements, and their conversions.',
    'https://docs.google.com/forms/d/e/1FAIpQLSfJ8LhEIzUKKVYTqTmAsfEHTvmf4XJp4nhXvCKj0_-fI2ciXQ/viewform',
    'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg',
    30,
    10,
    '11th',
    ARRAY['Physics', 'Units and Measurements'],
    (SELECT id FROM posts WHERE title = 'Laws of Motion' LIMIT 1)
  ),
  (
    'Chemistry-DPP (C.11)',
    'Chemistry',
    'Daily practice problems for basic concepts in chemistry.',
    'https://docs.google.com/forms/d/e/1FAIpQLSeI1xhuM5WB6bOXq2yuIC7mgIOdQTNORXmKoLPh3nYdt3m2tw/viewform',
    'https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg',
    20,
    10,
    '11th',
    ARRAY['Chemistry', 'Some Basic Concepts of Chemistry', 'DPP'],
    (SELECT id FROM posts WHERE title = 'Chemical Bonding Explained' LIMIT 1)
  );