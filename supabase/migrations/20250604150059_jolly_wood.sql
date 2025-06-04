/*
  # Create quizzes table

  1. New Tables
    - `quizzes`
      - `id` (uuid, primary key)
      - `title` (text, not null)
      - `subject` (text, not null)
      - `description` (text, nullable)
      - `external_url` (text, not null)
      - `image_url` (text, nullable)
      - `duration` (integer, not null)
      - `question_count` (integer, not null)
      - `class_level` (text, not null)
      - `topics` (text[], default '{}')
      - `post_id` (uuid, references posts.id)
      - `created_at` (timestamptz, default now())

  2. Security
    - Enable RLS on `quizzes` table
    - Add policy for public read access
*/

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
  topics text[] DEFAULT '{}'::text[],
  post_id uuid REFERENCES posts(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE quizzes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read quizzes"
  ON quizzes
  FOR SELECT
  TO public
  USING (true);