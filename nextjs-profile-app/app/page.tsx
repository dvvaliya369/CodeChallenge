export default function Home() {
  return (
    <main>
      <div className="container">
        <h1>Welcome to User Profile</h1>
        <p>Click below to view the user profile page</p>
        <a href="/profile" className="link-button">
          Go to Profile
        </a>
      </div>

      <style jsx>{`
        .container {
          text-align: center;
          background: white;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        }

        h1 {
          color: #333;
          margin-bottom: 15px;
          font-size: 2.5rem;
        }

        p {
          color: #666;
          margin-bottom: 30px;
          font-size: 1.1rem;
        }

        .link-button {
          display: inline-block;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 12px 30px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .link-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
        }
      `}</style>
    </main>
  )
}
