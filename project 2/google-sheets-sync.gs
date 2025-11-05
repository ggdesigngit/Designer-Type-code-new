// Google Apps Script to sync Supabase email submissions to Google Sheets
// Instructions:
// 1. Open your Google Sheet
// 2. Go to Extensions > Apps Script
// 3. Copy this entire script
// 4. Set up a time-based trigger to run syncEmails() hourly

const SUPABASE_URL = 'https://srrnsradjvrwjgmjonzz.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNycm5zcmFkanZyd2pnbWpvbnp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzMzgzNDEsImV4cCI6MjA3NzkxNDM0MX0.mwEvSgdcp_p5Bzmo0ynvWbMpNBRB_hmnnfE7v_OP5WM';

function syncEmails() {
  try {
    // Fetch data directly from Supabase REST API
    const url = SUPABASE_URL + '/rest/v1/email_submissions?select=*&order=created_at.desc';

    const response = UrlFetchApp.fetch(url, {
      method: 'GET',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': 'Bearer ' + SUPABASE_ANON_KEY,
        'Content-Type': 'application/json'
      },
      muteHttpExceptions: true
    });

    const statusCode = response.getResponseCode();
    const responseText = response.getContentText();

    Logger.log('Response status: ' + statusCode);
    Logger.log('Response body: ' + responseText);

    if (statusCode !== 200) {
      Logger.log('Error: API returned status ' + statusCode);
      SpreadsheetApp.getUi().alert('Error: API returned status ' + statusCode + '\n\n' + responseText);
      return;
    }

    const submissions = JSON.parse(responseText);

    // Get the active sheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Clear existing data (except header row if it exists)
    const lastRow = sheet.getLastRow();
    if (lastRow > 1) {
      sheet.getRange(2, 1, lastRow - 1, sheet.getLastColumn()).clear();
    }

    // Add header row if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Email', 'Designer Type', 'Submitted Date', 'ID']);
      sheet.getRange(1, 1, 1, 4).setFontWeight('bold');
    }

    // Add data rows
    submissions.forEach(submission => {
      const date = new Date(submission.created_at);
      sheet.appendRow([
        submission.email,
        submission.designer_type || '',
        date.toLocaleString(),
        submission.id
      ]);
    });

    // Format the sheet
    sheet.autoResizeColumns(1, 4);

    Logger.log('Successfully synced ' + submissions.length + ' email submissions');

  } catch (error) {
    Logger.log('Error: ' + error.toString());
  }
}

// Optional: Add a menu item to manually sync
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Email Sync')
      .addItem('Sync Now', 'syncEmails')
      .addToUi();
}
