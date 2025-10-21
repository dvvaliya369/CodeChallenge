import ProfileCard from '@/components/ProfileCard'

export const metadata = {
  title: 'User Profile - Next.js App',
  description: 'View user profile information',
}

export default function ProfilePage() {
  const userProfile = {
    name: 'John Doe',
    title: 'Full Stack Developer',
    bio: 'Passionate about building amazing web applications with modern technologies.',
    email: 'john.doe@example.com',
    location: 'San Francisco, CA',
    phone: '+1 (555) 123-4567',
    website: 'https://johndoe.dev',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
    coverImage: 'https://images.unsplash.com/photo-1579546929662-711aa33e6b14?w=1200&h=400&fit=crop',
    skills: ['React', 'Next.js', 'TypeScript', 'Node.js', 'GraphQL', 'PostgreSQL', 'Tailwind CSS', 'AWS'],
    social: [
      { platform: 'GitHub', url: 'https://github.com', icon: '🐙' },
      { platform: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' },
      { platform: 'Twitter', url: 'https://twitter.com', icon: '🐦' },
      { platform: 'Portfolio', url: 'https://example.com', icon: '🌐' },
    ],
  }

  return (
    <main className="profile-container">
      <ProfileCard profile={userProfile} />
    </main>
  )
}
