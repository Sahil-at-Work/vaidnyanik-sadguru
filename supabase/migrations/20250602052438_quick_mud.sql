-- Add images column to posts table
ALTER TABLE posts ADD COLUMN IF NOT EXISTS images jsonb[] DEFAULT '{}';

-- Insert sample posts
INSERT INTO posts (title, caption, class, subject, topics, created_at, likes_count, images) 
VALUES 
  (
    'Understanding Pythagorean Theorem',
    'Explore the fundamental relationship between the sides of a right triangle. Learn how to apply the Pythagorean theorem to solve real-world problems and understand its geometric significance.',
    '10th',
    'Mathematics',
    ARRAY['Geometry', 'Trigonometry', 'Mathematics'],
    NOW() - INTERVAL '2 days',
    156,
    ARRAY[
      '{"url": "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg", "caption": "Geometric visualization of Pythagorean theorem"}',
      '{"url": "https://images.pexels.com/photos/5905710/pexels-photo-5905710.jpeg", "caption": "Mathematical calculations"}',
      '{"url": "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg", "caption": "Practical applications"}',
      '{"url": "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg", "caption": "Problem-solving examples"}',
      '{"url": "https://images.pexels.com/photos/5905458/pexels-photo-5905458.jpeg", "caption": "Interactive demonstrations"}'
    ]::jsonb[]
  ),
  (
    'Cell Division: Mitosis vs Meiosis',
    'Dive into the fascinating world of cell division. Compare and contrast mitosis and meiosis, understanding their stages, significance in growth, and role in reproduction.',
    '9th',
    'Biology',
    ARRAY['Cell Biology', 'Reproduction', 'Genetics'],
    NOW() - INTERVAL '5 days',
    132,
    ARRAY[
      '{"url": "https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg", "caption": "Cell division phases"}',
      '{"url": "https://images.pexels.com/photos/3825379/pexels-photo-3825379.jpeg", "caption": "DNA replication"}',
      '{"url": "https://images.pexels.com/photos/3825567/pexels-photo-3825567.jpeg", "caption": "Chromosomal arrangement"}',
      '{"url": "https://images.pexels.com/photos/3825380/pexels-photo-3825380.jpeg", "caption": "Mitosis stages"}',
      '{"url": "https://images.pexels.com/photos/3825382/pexels-photo-3825382.jpeg", "caption": "Meiosis process"}'
    ]::jsonb[]
  ),
  (
    'Chemical Bonding Explained',
    'Understand the different types of chemical bonds and their importance in molecular structure. Learn about ionic, covalent, and metallic bonds through interactive examples.',
    '11th',
    'Chemistry',
    ARRAY['Chemical Bonding', 'Molecular Structure', 'Periodic Table'],
    NOW() - INTERVAL '7 days',
    98,
    ARRAY[
      '{"url": "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg", "caption": "Molecular structures"}',
      '{"url": "https://images.pexels.com/photos/5726837/pexels-photo-5726837.jpeg", "caption": "Chemical bonds"}',
      '{"url": "https://images.pexels.com/photos/8325710/pexels-photo-8325710.jpeg", "caption": "Periodic elements"}',
      '{"url": "https://images.pexels.com/photos/5726696/pexels-photo-5726696.jpeg", "caption": "Bond formation"}',
      '{"url": "https://images.pexels.com/photos/5726706/pexels-photo-5726706.jpeg", "caption": "Electron sharing"}'
    ]::jsonb[]
  ),
  (
    'Laws of Motion',
    'Discover Newton''s three laws of motion and their applications in everyday life. Learn how these fundamental principles govern the movement of objects in our universe.',
    '11th',
    'Physics',
    ARRAY['Mechanics', 'Forces', 'Motion'],
    NOW() - INTERVAL '3 days',
    145,
    ARRAY[
      '{"url": "https://images.pexels.com/photos/5726721/pexels-photo-5726721.jpeg", "caption": "Force and motion"}',
      '{"url": "https://images.pexels.com/photos/5726727/pexels-photo-5726727.jpeg", "caption": "Newton''s laws"}',
      '{"url": "https://images.pexels.com/photos/5726730/pexels-photo-5726730.jpeg", "caption": "Action and reaction"}',
      '{"url": "https://images.pexels.com/photos/5726735/pexels-photo-5726735.jpeg", "caption": "Practical examples"}',
      '{"url": "https://images.pexels.com/photos/5726738/pexels-photo-5726738.jpeg", "caption": "Real-world applications"}'
    ]::jsonb[]
  ),
  (
    'Introduction to Calculus',
    'Begin your journey into calculus with an exploration of limits, derivatives, and basic integration. Understand the mathematical foundations that drive advanced physics and engineering.',
    '12th',
    'Mathematics',
    ARRAY['Calculus', 'Functions', 'Mathematics'],
    NOW() - INTERVAL '1 day',
    167,
    ARRAY[
      '{"url": "https://images.pexels.com/photos/5905711/pexels-photo-5905711.jpeg", "caption": "Calculus fundamentals"}',
      '{"url": "https://images.pexels.com/photos/5905712/pexels-photo-5905712.jpeg", "caption": "Derivative concepts"}',
      '{"url": "https://images.pexels.com/photos/5905713/pexels-photo-5905713.jpeg", "caption": "Integration basics"}',
      '{"url": "https://images.pexels.com/photos/5905714/pexels-photo-5905714.jpeg", "caption": "Mathematical proofs"}',
      '{"url": "https://images.pexels.com/photos/5905715/pexels-photo-5905715.jpeg", "caption": "Problem solutions"}'
    ]::jsonb[]
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