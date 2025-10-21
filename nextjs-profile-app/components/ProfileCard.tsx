'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

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

interface Props {
  profile: UserProfile
}

export default function ProfileCard({ profile }: Props) {
  const [isFollowing, setIsFollowing] = useState(false)

  return (
    <div className="profile-card">
      {/* Cover Image */}
      <div className="cover-image">
        <img src={profile.coverImage} alt="Cover" />
      </div>

      {/* Profile Header */}
      <div className="profile-header">
        <div className="avatar-container">
          <img src={profile.avatar} alt={profile.name} className="avatar" />
        </div>
        <h1 className="name">{profile.name}</h1>
        <p className="title">{profile.title}</p>
        <p className="bio">{profile.bio}</p>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button
            className={`btn btn-primary ${isFollowing ? 'following' : ''}`}
            onClick={() => setIsFollowing(!isFollowing)}
          >
            {isFollowing ? '✓ Following' : '+ Follow'}
          </button>
          <button className="btn btn-secondary">Message</button>
        </div>
      </div>

      {/* Contact Information */}
      <div className="contact-info">
        <div className="info-item">
          <span className="icon">📍</span>
          <span className="value">{profile.location}</span>
        </div>
        <div className="info-item">
          <span className="icon">📧</span>
          <a href={`mailto:${profile.email}`} className="value">
            {profile.email}
          </a>
        </div>
        <div className="info-item">
          <span className="icon">📱</span>
          <span className="value">{profile.phone}</span>
        </div>
        <div className="info-item">
          <span className="icon">🌐</span>
          <a href={profile.website} target="_blank" rel="noopener noreferrer" className="value">
            {profile.website}
          </a>
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills-section">
        <h2>Skills & Expertise</h2>
        <div className="skills-grid">
          {profile.skills.map((skill) => (
            <div key={skill} className="skill-badge">
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="social-section">
        <h2>Connect</h2>
        <div className="social-links">
          {profile.social.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title={link.platform}
            >
              <span className="social-icon">{link.icon}</span>
              <span className="social-text">{link.platform}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Back Link */}
      <div className="back-link">
        <Link href="/">← Back to Home</Link>
      </div>

      <style jsx>{`
        .profile-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          animation: slideUp 0.5s ease-out;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .cover-image {
          width: 100%;
          height: 250px;
          overflow: hidden;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .cover-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .profile-header {
          padding: 0 30px 20px;
          text-align: center;
        }

        .avatar-container {
          margin-top: -60px;
          margin-bottom: 20px;
          display: flex;
          justify-content: center;
        }

        .avatar {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          border: 5px solid white;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .name {
          font-size: 1.8rem;
          color: #333;
          margin: 15px 0 5px;
        }

        .title {
          font-size: 1.1rem;
          color: #667eea;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .bio {
          font-size: 1rem;
          color: #666;
          margin-bottom: 20px;
          line-height: 1.6;
        }

        .action-buttons {
          display: flex;
          gap: 10px;
          justify-content: center;
          margin-bottom: 20px;
        }

        .btn {
          padding: 10px 20px;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.95rem;
        }

        .btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .btn-primary:hover:not(.following) {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
        }

        .btn-primary.following {
          background: #e8e8e8;
          color: #333;
        }

        .btn-secondary {
          background: #f0f0f0;
          color: #333;
          border: 2px solid #667eea;
        }

        .btn-secondary:hover {
          background: #667eea;
          color: white;
        }

        .contact-info {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          padding: 20px 30px;
          border-top: 1px solid #eee;
          border-bottom: 1px solid #eee;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.95rem;
        }

        .icon {
          font-size: 1.3rem;
        }

        .value {
          color: #333;
          text-decoration: none;
          word-break: break-word;
        }

        .value:hover {
          color: #667eea;
          text-decoration: underline;
        }

        .skills-section {
          padding: 30px;
          border-bottom: 1px solid #eee;
        }

        .skills-section h2 {
          font-size: 1.3rem;
          color: #333;
          margin-bottom: 15px;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          gap: 10px;
        }

        .skill-badge {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 10px 15px;
          border-radius: 20px;
          text-align: center;
          font-weight: 500;
          font-size: 0.9rem;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .skill-badge:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
        }

        .social-section {
          padding: 30px;
          border-bottom: 1px solid #eee;
        }

        .social-section h2 {
          font-size: 1.3rem;
          color: #333;
          margin-bottom: 15px;
        }

        .social-links {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
          gap: 10px;
        }

        .social-link {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 15px;
          background: #f5f5f5;
          border-radius: 8px;
          text-decoration: none;
          color: #333;
          transition: all 0.2s;
          border: 2px solid transparent;
        }

        .social-link:hover {
          background: #667eea;
          color: white;
          border-color: #764ba2;
        }

        .social-icon {
          font-size: 1.3rem;
        }

        .social-text {
          font-weight: 500;
          font-size: 0.9rem;
        }

        .back-link {
          padding: 20px 30px;
          text-align: center;
        }

        .back-link a {
          color: #667eea;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.2s;
        }

        .back-link a:hover {
          color: #764ba2;
        }

        @media (max-width: 768px) {
          .profile-header {
            padding: 0 20px 20px;
          }

          .cover-image {
            height: 180px;
          }

          .avatar {
            width: 100px;
            height: 100px;
          }

          .name {
            font-size: 1.5rem;
          }

          .contact-info {
            grid-template-columns: 1fr;
            padding: 15px 20px;
          }

          .skills-grid {
            grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
          }

          .social-links {
            grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
          }

          .action-buttons {
            flex-direction: column;
          }

          .btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}
