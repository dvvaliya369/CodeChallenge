# Next.js User Profile Page - Setup & Development Guide

## 📋 Overview

This is a complete Next.js 14 user profile page application with TypeScript support. It showcases a beautiful, fully responsive profile card with all essential user information, skills, and social links.

## 🎯 Quick Start

### Prerequisites
- Node.js 18.17 or later
- npm or yarn package manager

### Installation Steps

1. **Navigate to the project:**
   ```bash
   cd /vercel/sandbox/nextjs-profile-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   - Navigate to http://localhost:3000
   - You should see the home page with a link to the profile

## 📂 Project Structure Explained

```
nextjs-profile-app/
│
├── app/                           # Next.js app directory
│   ├── layout.tsx                # Root layout with metadata
│   ├── globals.css               # Global styles and animations
│   ├── page.tsx                  # Home page (landing)
│   └── profile/
│       └── page.tsx              # Profile page with user data
│
├── components/                    # Reusable React components
│   └── ProfileCard.tsx           # Main profile card component
│
├── public/                        # Static assets
│   └── images/                   # Images folder (for future use)
│
├── package.json                  # Dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
├── jsconfig.json                 # Path aliases configuration
├── next.config.js                # Next.js configuration
├── .eslintrc.json               # ESLint configuration
├── .gitignore                    # Git ignore rules
├── README.md                     # Project documentation
└── SETUP_GUIDE.md               # This file
```

## 🎨 Component Architecture

### ProfileCard Component (`components/ProfileCard.tsx`)

The main component that renders the user profile. It's a client component with interactivity.

**Props:**
```typescript
interface UserProfile {
  name: string
  title: string
  bio: string
  email: string
  location: string
  phone: string
  website: string
  avatar: string
  coverImage: string
  skills: string[]
  social: { platform: string; url: string; icon: string }[]
}
```

**State:**
- `isFollowing`: Boolean state to track follow button state

**Features:**
- Animated cover image
- Circular avatar with shadow
- User information display
- Follow/Message buttons with hover effects
- Contact information section
- Skills grid with gradient badges
- Social media links with icons
- Responsive grid layout

### Pages

**Home Page (`app/page.tsx`)**
- Server component
- Simple landing page
- Link to profile page
- Uses CSS-in-JS styling

**Profile Page (`app/profile/page.tsx`)**
- Server component
- Renders ProfileCard with sample user data
- Easy to modify with real data

## 🎨 Styling Approach

### Global Styles (`app/globals.css`)
- Reset and normalization
- Body styling with gradient background
- Container responsive sizing

### Component Styles (CSS-in-JS)
- Styled with `<style jsx>` for scoped styling
- Prevents style conflicts
- Easy to customize per component
- Includes animations and transitions

### Color Scheme
- **Primary Gradient**: `#667eea` to `#764ba2`
- **Text Color**: `#333` (dark) and `#666` (medium)
- **Background**: White for cards, gradient for body
- **Accents**: Purple gradient buttons

## 🔧 Customization Guide

### 1. Update User Profile Data

Edit `app/profile/page.tsx`:

```typescript
const userProfile = {
  name: 'Your Name',                          // User's full name
  title: 'Your Title',                        // Job title or role
  bio: 'Your bio here',                       // Short bio
  email: 'you@example.com',                   // Email address
  location: 'City, Country',                  // Location
  phone: '+1 (555) 123-4567',                 // Phone number
  website: 'https://yoursite.com',            // Website URL
  avatar: 'https://api.dicebear.com/...',    // Avatar image URL
  coverImage: 'https://images.unsplash.com/...', // Cover image URL
  skills: ['Skill1', 'Skill2', 'Skill3'],    // Skills array
  social: [
    { platform: 'GitHub', url: 'https://...', icon: '🐙' },
    // ... more social links
  ]
}
```

### 2. Change Colors

**Option A: Update button colors in ProfileCard.tsx**
Find and replace:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

**Option B: Update global background in globals.css**
```css
background: linear-gradient(135deg, #your-color-1 0%, #your-color-2 100%);
```

### 3. Modify Avatar

Use these avatar services:
- **DiceBear**: `https://api.dicebear.com/7.x/avataaars/svg?seed=Name`
- **Gravatar**: `https://www.gravatar.com/avatar/your-hash`
- **Local image**: Upload to `public/images/avatar.jpg`

### 4. Add New Sections

Add a new section to ProfileCard.tsx:

```typescript
<div className="your-section">
  <h2>Your Section Title</h2>
  {/* Your content */}
</div>

<style jsx>{`
  .your-section {
    padding: 30px;
    border-bottom: 1px solid #eee;
  }
  // ... your styles
`}</style>
```

### 5. Add Interactive Features

Use React hooks in ProfileCard.tsx:

```typescript
'use client' // Already at the top

import { useState } from 'react'

// Add state
const [newState, setNewState] = useState(false)

// Use in component
<button onClick={() => setNewState(!newState)}>
  Toggle
</button>
```

## 📱 Responsive Design

The application uses CSS media queries for responsiveness:

### Breakpoints
- **Mobile**: < 768px - Single column, touch-friendly
- **Tablet**: 768px - 1024px - Two column layout
- **Desktop**: > 1024px - Full layout

### Mobile Optimizations
- Stacked buttons in action section
- Single column contact info
- Adjusted padding and margins
- Touch-friendly button sizes

## 🚀 Building for Production

### Create Production Build
```bash
npm run build
```

This creates an optimized build in the `.next` folder.

### Run Production Server
```bash
npm start
```

Starts the server on `http://localhost:3000` (production optimized)

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your repository
5. Click "Deploy"

Vercel automatically detects Next.js and configures everything!

### Option 2: Docker

Create `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t profile-app .
docker run -p 3000:3000 profile-app
```

### Option 3: Other Platforms
- **AWS Amplify**: Connect Git repo
- **Netlify**: Connect Git repo
- **Railway**: Connect Git repo
- **Any VPS**: Run `npm run build && npm start`

## 🔒 Environment Variables

For sensitive data, create `.env.local`:

```env
NEXT_PUBLIC_API_URL=https://api.example.com
API_SECRET=your_secret_key
```

Access in code:
```typescript
process.env.NEXT_PUBLIC_API_URL  // Browser-accessible
process.env.API_SECRET            // Server-only
```

## 📊 Performance Optimization Tips

1. **Image Optimization**: Use Next.js Image component
2. **Code Splitting**: Components are automatically split
3. **CSS**: CSS-in-JS is scoped and optimized
4. **Bundle Size**: Minimal dependencies
5. **SEO**: Metadata setup in layout

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
# Kill process on port 3000
lsof -i :3000
kill -9 <PID>
```

### Module Not Found
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
```bash
# Generate types
npm run build
```

### Styles Not Loading
- Check `<style jsx>` syntax
- Ensure CSS is within component
- Clear `.next` folder: `rm -rf .next`

## 📚 Additional Resources

### Official Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org)

### Useful Tools
- [Tailwind CSS](https://tailwindcss.com) - Alternative for styling
- [Shadcn/ui](https://ui.shadcn.com) - Component library
- [Next UI](https://nextui.org) - React UI library

### Learning Resources
- [Next.js Tutorial](https://nextjs.org/learn)
- [React Hooks](https://react.dev/reference/react/hooks)
- [Web Design Inspiration](https://dribbble.com)

## ✨ Enhancement Ideas

1. **Dark Mode**: Add toggle for light/dark theme
2. **Authentication**: Add login/signup functionality
3. **Database**: Connect to MongoDB or PostgreSQL
4. **API**: Create backend API endpoints
5. **Blog**: Add blog/articles section
6. **Projects**: Showcase portfolio projects
7. **Analytics**: Track page views with Google Analytics
8. **CMS**: Connect to Sanity or Contentful
9. **Search**: Add search functionality
10. **Comments**: Add testimonials section

## 🤝 Contributing

Feel free to fork, modify, and use this project for your own needs!

## 📄 License

MIT License - Free to use for personal and commercial projects.

---

**Happy coding! 🎉**

For questions or issues, refer to the documentation or create an issue on GitHub.
