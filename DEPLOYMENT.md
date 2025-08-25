# Vercel Deployment

This project is configured for deployment on Vercel.

## Deployment Configuration

The project uses the following key files for Vercel deployment:

- `vercel.json` - Vercel configuration with build settings and routing
- `.vercelignore` - Files to exclude from deployment
- `package.json` - Root build script and Node.js version
- `frontend/package.json` - React app configuration with homepage setting

## Build Process

1. Vercel installs dependencies with `npm install` (root level)
2. Runs `npm run build` which builds the React frontend
3. Serves static files from `frontend/build/`

## Manual Deployment

To deploy manually:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from root directory
vercel --prod
```

## Environment Variables

If your app needs environment variables, add them in the Vercel dashboard under Settings > Environment Variables.

## Troubleshooting

If deployment fails:

1. Check that `package.json` and `package-lock.json` are in sync
2. Ensure Node.js version matches `.nvmrc` (18.x)
3. Verify build works locally: `npm run build`
4. Check Vercel build logs for specific errors