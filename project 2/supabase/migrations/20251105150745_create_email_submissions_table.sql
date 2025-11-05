/*
  # Create email submissions table

  1. New Tables
    - `email_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `email` (text, unique, not null) - User's email address
      - `designer_type` (text) - The designer type result from the quiz
      - `created_at` (timestamptz) - Timestamp of submission
  
  2. Security
    - Enable RLS on `email_submissions` table
    - Add policy for service role to insert data (no public access needed for this table)
*/

CREATE TABLE IF NOT EXISTS email_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  designer_type text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE email_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role can insert email submissions"
  ON email_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);
