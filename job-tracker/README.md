# Job Tracker

A React web app that uses your Google Sheet as its database.
You can add, view, edit, delete, search and filter job applications.

```
Browser (React)  ->  Google Apps Script web app  ->  your Google Sheet
```

No Google Cloud project, service account or key file is needed.

## 1. Create the backend (about 5 minutes)

1. Open your **Job Application Tracker** sheet. Row 1 must have these headers in order:
   `Company | Role | Date Applied | Status | Notes | Job Link`
2. Click **Extensions -> Apps Script**.
3. Delete everything in the editor, then paste the full contents of `apps-script/Code.gs`.
4. At the top of the code, change `TOKEN` to your own secret word (and `SHEET_NAME` if your tab is not `Sheet1`).
5. Click **Save**, then **Deploy -> New deployment**.
6. Click the gear icon, choose **Web app**, and set:
   - Execute as: **Me**
   - Who has access: **Anyone**
7. Click **Deploy**, approve the permission prompts (Advanced -> Go to project), and copy the **Web app URL** (ends in `/exec`).

If you change `Code.gs` later, use **Deploy -> Manage deployments -> Edit -> New version** so the URL stays the same.

## 2. Run it locally in VS Code

```bash
cd job-tracker
npm install
cp .env.example .env.local   # Windows: copy .env.example .env.local
npm run dev
```

Open `.env.local` and set:

- `VITE_APPS_SCRIPT_URL` = the Web app URL from step 1
- `VITE_API_TOKEN` = the same secret you put in `TOKEN`

Restart `npm run dev` after editing `.env.local`, then open http://localhost:5173.

## 3. Put it live (optional)

Upload the project to GitHub, then import it into Vercel or Netlify (both free).
Build command: `npm run build`. Output folder: `dist`.
Add the same two variables (`VITE_APPS_SCRIPT_URL`, `VITE_API_TOKEN`) in the host's Environment Variables, then deploy.

Note: because this is a front-end app, the token can be seen by anyone who opens the site's code.
That is fine for a personal tracker, but do not store anything highly sensitive in the sheet.

## Folder guide

| Path | Purpose |
| --- | --- |
| `apps-script/Code.gs` | Backend, pasted into the Sheet's Apps Script editor |
| `src/services/sheetsApi.js` | Front-end calls to the backend |
| `src/pages/` | Dashboard, Applications, AddJob pages |
| `src/components/` | Header, StatsBar, FilterBar, JobTable, JobRow, JobForm, EditModal, StatusBadge |
| `src/styles.css` | All styling |

## Troubleshooting

- **"Missing VITE_APPS_SCRIPT_URL..."**: `.env.local` is missing, or you did not restart `npm run dev`.
- **"Unauthorized"**: the token in `.env.local` does not match `TOKEN` in `Code.gs`.
- **"Backend did not return JSON"**: the deployment access is not set to Anyone, or you are using an old deployment URL.
- **Tab not found**: `SHEET_NAME` in `Code.gs` must match the tab name exactly.
