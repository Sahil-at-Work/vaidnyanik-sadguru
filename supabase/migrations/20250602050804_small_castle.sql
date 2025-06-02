-- Insert sample posts
INSERT INTO posts (title, caption, class, subject, topics, created_at, likes_count) 
VALUES 
  (
    'Understanding Pythagorean Theorem',
    'Explore the fundamental relationship between the sides of a right triangle. Learn how to apply the Pythagorean theorem to solve real-world problems and understand its geometric significance.',
    '10th',
    'Mathematics',
    ARRAY['Geometry', 'Trigonometry', 'Mathematics'],
    NOW() - INTERVAL '2 days',
    156
  ),
  (
    'Cell Division: Mitosis vs Meiosis',
    'Dive into the fascinating world of cell division. Compare and contrast mitosis and meiosis, understanding their stages, significance in growth, and role in reproduction.',
    '9th',
    'Biology',
    ARRAY['Cell Biology', 'Reproduction', 'Genetics'],
    NOW() - INTERVAL '5 days',
    132
  ),
  (
    'Chemical Bonding Explained',
    'Understand the different types of chemical bonds and their importance in molecular structure. Learn about ionic, covalent, and metallic bonds through interactive examples.',
    '11th',
    'Chemistry',
    ARRAY['Chemical Bonding', 'Molecular Structure', 'Periodic Table'],
    NOW() - INTERVAL '7 days',
    98
  ),
  (
    'Laws of Motion',
    'Discover Newton''s three laws of motion and their applications in everyday life. Learn how these fundamental principles govern the movement of objects in our universe.',
    '11th',
    'Physics',
    ARRAY['Mechanics', 'Forces', 'Motion'],
    NOW() - INTERVAL '3 days',
    145
  ),
  (
    'Introduction to Calculus',
    'Begin your journey into calculus with an exploration of limits, derivatives, and basic integration. Understand the mathematical foundations that drive advanced physics and engineering.',
    '12th',
    'Mathematics',
    ARRAY['Calculus', 'Functions', 'Mathematics'],
    NOW() - INTERVAL '1 day',
    167
  );

-- Create function to increment likes
CREATE OR REPLACE FUNCTION increment_likes(post_id uuid)
RETURNS TABLE (likes_count integer) 
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  RETURN QUERY
  UPDATE posts
  SET likes_count = likes_count + 1
  WHERE id = post_id
  RETURNING likes_count;
END;
$$;