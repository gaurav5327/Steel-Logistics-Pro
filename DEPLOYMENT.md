# Deployment Guide for Steel Logistics Pro

## Vercel Deployment Instructions

### Step 1: Vercel Project Settings

1. Go to your Vercel Dashboard: https://vercel.com/dashboard
2. Select your project: **steel-logistics-pro**
3. Click on **Settings** tab
4. Go to **General** section

### Step 2: Configure Root Directory

**IMPORTANT**: You need to set the Root Directory to `client`

1. In Settings → General, find **Root Directory**
2. Click **Edit**
3. Enter: `client`
4. Click **Save**

### Step 3: Build & Development Settings

1. Still in Settings, scroll to **Build & Development Settings**
2. Click **Override** if the fields are disabled
3. Configure as follows:
   - **Framework Preset**: `Vite`
   - **Build Command**: Leave empty (auto-detect) or `npm run build`
   - **Output Directory**: Leave empty (auto-detect) or `dist`
   - **Install Command**: Leave empty (auto-detect) or `npm install`
4. Click **Save**

### Step 4: Deploy

1. Go to **Deployments** tab
2. Click the three dots (•••) on the latest deployment
3. Click **Redeploy**
4. **UNCHECK** "Use existing Build Cache"
5. Click **Redeploy**

## Troubleshooting

### 404 Error After Successful Build

If you see a 404 error even though the build succeeded:

1. **Check Root Directory**: Make sure it's set to `client` in Settings → General
2. **Clear Build Cache**: Redeploy without using existing build cache
3. **Check Output**: In deployment logs, verify that files are being created in the `dist` folder
4. **Check URL**: Make sure you're accessing the correct deployment URL

### Build Fails with "No such file or directory"

This means the Root Directory is not set correctly. Follow Step 2 above.

### Files Not Found

If static assets (CSS, JS) are not loading:
1. Check that the build completed successfully
2. Verify the Output Directory is set to `dist`
3. Check the deployment logs for any warnings

## Local Development

To run locally:

```bash
# Install dependencies
cd client
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
Steel-Logistics-Pro/
├── client/              ← Frontend (React + Vite)
│   ├── src/
│   ├── public/
│   ├── dist/           ← Build output
│   └── package.json
├── server/             ← Backend (Node.js + Express)
│   └── package.json
└── README.md
```

## Important Notes

- The **Root Directory must be set to `client`** in Vercel settings
- Do NOT use `vercel.json` - let Vercel auto-detect Vite
- The `_redirects` file in `client/public/` handles SPA routing
- Clear build cache if you encounter persistent issues
