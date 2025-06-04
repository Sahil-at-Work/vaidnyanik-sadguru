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

DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'quizzes' 
    AND policyname = 'Anyone can read quizzes'
  ) THEN
    CREATE POLICY "Anyone can read quizzes"
      ON quizzes
      FOR SELECT
      TO public
      USING (true);
  END IF;
END $$;