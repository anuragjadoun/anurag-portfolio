# Anurag Singh Jadoun — Portfolio v2

Responsive React + Vite portfolio with a refreshed midnight gradient background, readable typography, scroll-reveal animations, the supplied pixel-art avatar, and downloadable resume.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Update your resume
Replace `public/Anurag_Jadoun_Resume.pdf` with your updated PDF, keeping the same filename. The download buttons will automatically serve the new file.

## Update the logo
Replace `public/anurag-logo.jpg` with your new image, keeping the same filename.

## Add a project
Open `src/data/projects.js` and copy one object in the `projects` array. Update `name`, `type`, `description`, `technologies`, `liveUrl`, `githubUrl`, `symbol`, and `theme`. Use `liveUrl: ""` if there is no live demo yet. For `githubUrl`, use the direct repository URL when available.

## Contact details
The email `anuragjadoun024@gmail.com` is used in the contact button and mailto link in `src/main.jsx`.

## Deploy on Vercel
Push the project to GitHub and import it into Vercel. Framework: Vite. Build command: `npm run build`. Output directory: `dist`.
