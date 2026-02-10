# Firebase Hosting Setup Guide

Your project is now ready to deploy to Firebase! Follow these steps:

## Step 1: Install Firebase CLI (if not already installed)

```bash
npm install -g firebase-tools
```

## Step 2: Login to Firebase

```bash
firebase login
```

This will open a browser window for you to authenticate with your Google account.

## Step 3: Initialize Firebase in your project

```bash
firebase init hosting
```

When prompted:
- **Select a default Firebase project**: Choose your existing Firebase project or create a new one
- **What do you want to use as your public directory?**: Type `dist` (already configured)
- **Configure as a single-page app?**: Yes
- **Set up automatic builds and deploys with GitHub?**: No (or Yes if you want)
- **File dist/index.html already exists. Overwrite?**: No

## Step 4: Deploy to Firebase

```bash
firebase deploy
```

Your site will be live at: `https://your-project-id.web.app`

## Future Deployments

To update your site in the future:

1. Make your changes
2. Build the project: `npm run build`
3. Deploy: `firebase deploy`

## Important Notes

- **Music File**: Remember to add your `song.mp3` file to the `/public` folder before building
- **Images**: Your images are already in the assets folder and will be included in the build
- **Domain**: You can add a custom domain in the Firebase Console under Hosting settings

## Files Created

- `firebase.json` - Firebase hosting configuration
- `.firebaseignore` - Files to ignore during deployment
- `dist/` - Your built production files (created by `npm run build`)

## Common Commands

- `npm run dev` - Run local development server
- `npm run build` - Build for production
- `firebase serve` - Preview your production build locally
- `firebase deploy` - Deploy to Firebase Hosting
- `firebase deploy --only hosting` - Deploy only hosting (faster)

Happy deploying! 🚀❤️
