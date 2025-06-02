import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://hjnbagvfgfwzerysblwo.supabase.co";
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhqbmJhZ3ZmZ2Z3emVyeXNibHdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg4NDAzMzksImV4cCI6MjA2NDQxNjMzOX0.Dv-hlcN7MUklji8Stlcd89tOeIjGRfCvh6Lj8eYtekY';

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});
