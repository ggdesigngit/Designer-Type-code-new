# Google Sheets Integration Setup

This guide will help you connect your quiz email submissions to Google Sheets for easy access outside of Bolt.

## What's Been Created

1. **Supabase Edge Function**: An API endpoint that securely fetches your email submissions
2. **Google Apps Script**: Code that syncs the data to Google Sheets automatically

## Setup Instructions

### Step 1: Choose Your API Key

Create a secure, random API key. You can generate one using:
- A password manager
- Or visit: https://www.random.org/strings/

Example: `sk_live_abc123xyz789secretkey`

**Important**: Keep this key secret! Don't share it publicly.

### Step 2: Update the Edge Function with Your API Key

You'll need to set the API key as an environment variable in Supabase:

1. Go to your Supabase Dashboard: https://supabase.com/dashboard
2. Select your project
3. Go to **Settings** > **Edge Functions**
4. Add a new secret:
   - Name: `API_KEY`
   - Value: Your generated API key from Step 1

### Step 3: Set Up Google Sheets

1. Create a new Google Sheet (or open an existing one)
2. Name it something like "Quiz Email Submissions"
3. Go to **Extensions** > **Apps Script**
4. Delete any existing code
5. Copy the entire contents of `google-sheets-sync.gs` and paste it
6. Replace `YOUR_API_KEY_HERE` with your API key from Step 1
7. Click the **Save** icon (💾)

### Step 4: Set Up Automatic Syncing

To sync your data automatically every hour:

1. In the Apps Script editor, click the **clock icon** (⏰) on the left sidebar (Triggers)
2. Click **+ Add Trigger** (bottom right)
3. Configure:
   - Choose which function to run: `syncEmails`
   - Choose which deployment should run: `Head`
   - Select event source: `Time-driven`
   - Select type of time based trigger: `Hour timer`
   - Select hour interval: `Every hour`
4. Click **Save**
5. Google will ask for permissions - click **Review Permissions** and allow access

### Step 5: Test the Sync

1. Go back to your Google Sheet
2. You should see a new menu called "Email Sync" in the menu bar
3. Click **Email Sync** > **Sync Now**
4. Your email submissions should appear in the sheet!

## Troubleshooting

**No data appearing?**
- Check that your API key is set correctly in both Supabase and the Google Script
- Go to Apps Script > **Executions** to see error logs

**"Unauthorized" error?**
- Double-check that the API keys match exactly in both places

**Need to sync manually?**
- Use the **Email Sync** > **Sync Now** menu in your Google Sheet

## API Endpoint

Your email data is available at:
```
https://0ec90b57d6e95fcbda19832f.supabase.co/functions/v1/get-email-submissions
```

Headers required:
```
x-api-key: YOUR_API_KEY
```

## Security Notes

- The API key protects your data from unauthorized access
- Never commit the API key to GitHub or share it publicly
- You can change the API key anytime by updating it in both Supabase and Google Sheets
