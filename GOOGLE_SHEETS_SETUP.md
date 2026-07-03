# Google Sheets contact form setup

1. Create a Google Sheet and rename its first tab to `Contact`.
2. Add these headings in row 1: `Timestamp`, `Name`, `Email`, `Message`.
3. Open **Extensions > Apps Script** and paste this code:

```javascript
function doPost(event) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Contact");

  sheet.appendRow([
    new Date(),
    event.parameter.name || "",
    event.parameter.email || "",
    event.parameter.message || "",
  ]);

  return ContentService.createTextOutput("success");
}
```

4. Select **Deploy > New deployment > Web app**.
5. Set **Execute as** to yourself and **Who has access** to `Anyone`, then deploy.
6. Copy the Web app URL.
7. Create a `.env.local` file beside `package.json`:

```env
VITE_GOOGLE_SCRIPT_URL=PASTE_YOUR_WEB_APP_URL_HERE
```

8. Restart the Vite development server.
