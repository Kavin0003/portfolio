# 🚀 Portfolio Setup Guide

## Prerequisites
- Node.js installed
- Git installed
- Code editor (VS Code recommended)

## 📋 Manual Updates Required

### 1. **Contact Form Setup (Formspree)**
1. Go to [https://formspree.io](https://formspree.io)
2. Create a free account
3. Create a new form and get your form ID
4. In `src/components/Contact.tsx`, replace `YOUR_FORM_ID` with your actual form ID:
   ```typescript
   const response = await fetch('https://formspree.io/f/YOUR_ACTUAL_FORM_ID', {
   ```

### 2. **Project Images**
Add your project screenshots to `/public/images/` and update paths in `src/data/portfolio.ts`:

**Current:**
```typescript
image: "/placeholder.svg",
```

**Update to:**
```typescript
image: "/images/weather-app.png",
image: "/images/hospital-management.png", 
image: "/images/linkedin-analyzer.png",
```

### 3. **Demo Links**
Deploy your projects and uncomment/update demo URLs:

**In `src/data/portfolio.ts`:**
```typescript
// Uncomment and update these lines:
demo: "https://your-weather-app.vercel.app",
demo: "https://your-hospital-system.netlify.app",
demo: "https://your-linkedin-analyzer.vercel.app",
```

### 4. **Publication/Blog Links**
Update the placeholder URLs in the publications section with real article links.

### 5. **Resume File**
- Ensure your resume PDF is in `/public/` folder
- Current path: `/Kavin-Anand-Resume (1).pdf`
- Make sure the filename matches exactly

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)
1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Deploy automatically

### Option 2: Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify

### Option 3: GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run build && npm run deploy`

## 📂 Project Structure
```
dark-dynamic-portfolio/
├── public/
│   ├── images/          # Add your project screenshots here
│   └── resume.pdf       # Your resume file
├── src/
│   ├── components/      # React components
│   ├── data/
│   │   └── portfolio.ts # Update your personal data here
│   └── pages/
└── package.json
```

## 🎨 Customization Tips

### Colors & Theme
- Main colors are defined in `tailwind.config.ts`
- Custom CSS in `src/index.css`

### Adding More Projects
Add new project objects to the `projects` array in `src/data/portfolio.ts`

### Adding Skills
Update the `skills` array in `src/data/portfolio.ts`

## 🐛 Troubleshooting

### Build Errors
- Run `npm run build` to check for errors
- Fix any TypeScript/import errors

### Images Not Loading
- Ensure images are in `/public/images/`
- Use correct paths (start with `/images/...`)

### Contact Form Not Working
- Verify Formspree form ID is correct
- Check browser console for errors

## 📞 Need Help?
If you encounter any issues, provide:
1. Error messages
2. What you were trying to do
3. Your current code
