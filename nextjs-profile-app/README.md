# User Profile Page - Next.js Application

A modern, responsive user profile page built with **Next.js 14**, **TypeScript**, and **React 18**.

## 🚀 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Beautiful gradient design with smooth animations
- **User Profile Card**: Displays comprehensive user information
- **Skills Section**: Showcase technical skills and expertise
- **Social Links**: Connect to various social media platforms
- **Contact Information**: Display email, phone, location, and website
- **Interactive Elements**: Follow button, message button with hover effects
- **TypeScript Support**: Full type safety and better developer experience
- **Next.js App Router**: Using the latest Next.js 14 features

## 📁 Project Structure

```
nextjs-profile-app/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page
│   ├── profile/
│   │   └── page.tsx            # Profile page
│   └── globals.css             # Global styles
├── components/
│   └── ProfileCard.tsx         # Profile card component
├── public/                     # Static assets
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

## 🛠️ Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Edit User Profile Data

Open `app/profile/page.tsx` and modify the `userProfile` object:

```typescript
const userProfile = {
  name: 'Your Name',
  title: 'Your Title',
  bio: 'Your bio',
  email: 'your.email@example.com',
  // ... other fields
}
```

### Customize Colors

The color scheme uses a gradient: `#667eea` to `#764ba2`. You can modify these colors in:
- `app/globals.css` - Background gradient
- `components/ProfileCard.tsx` - Button and accent colors

### Update Skills

Add or remove skills in the `skills` array:

```typescript
skills: ['React', 'Next.js', 'TypeScript', 'Node.js', /* ... */]
```

### Update Social Links

Modify the `social` array to change social media links:

```typescript
social: [
  { platform: 'GitHub', url: 'https://github.com/yourprofile', icon: '🐙' },
  // ... other links
]
```

## 🎯 Key Components

### ProfileCard Component

The main component that displays user profile information. Located at `components/ProfileCard.tsx`.

**Features:**
- Cover image with profile avatar
- User information (name, title, bio)
- Contact information with icons
- Skills section with badges
- Social media links
- Interactive follow/message buttons
- Fully responsive design

### Pages

**Home Page** (`app/page.tsx`)
- Landing page with link to profile
- Introduction and navigation

**Profile Page** (`app/profile/page.tsx`)
- Displays the main profile card
- Contains sample user data

## 📱 Responsive Breakpoints

- **Desktop**: Full layout with multiple columns
- **Tablet**: Optimized grid layout
- **Mobile**: Single column layout with touch-friendly buttons

## 🎨 Styling

- **Global Styles**: `app/globals.css`
- **Component Styles**: CSS-in-JS using `<style jsx>`
- **Responsive**: Mobile-first approach with media queries

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect it's a Next.js app and configure it
4. Your app will be live!

### Deploy to Other Platforms

```bash
npm run build
npm start
```

This builds the application for production and starts the server.

## 💡 Tips

- Replace avatar URL with your own image or use an avatar service
- Update the cover image URL to personalize it
- Add more sections as needed (experience, education, projects, etc.)
- Customize colors and gradients to match your brand
- Add animations and transitions for a more dynamic feel

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 📄 License

This project is open source and available under the MIT License.

## ✨ Features You Can Add

- Dark mode toggle
- Edit profile functionality
- Image upload for avatar and cover
- Additional profile sections (experience, education)
- Comments or testimonials section
- Blog posts section
- Project portfolio section
- Resume download button

---

Enjoy building your profile page! 🎉
