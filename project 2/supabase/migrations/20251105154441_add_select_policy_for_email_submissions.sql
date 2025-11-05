/*
  # Add SELECT policy for email submissions

  1. Changes
    - Add a SELECT policy to allow anonymous users to read email submissions
    - This enables the Google Sheets script to fetch the data

  2. Security
    - Policy allows SELECT access for anonymous role
    - Necessary for external integrations like Google Sheets
*/

CREATE POLICY "Allow anonymous users to read email submissions"
  ON email_submissions
  FOR SELECT
  TO anon
  USING (true);