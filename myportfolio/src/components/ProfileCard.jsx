import React, { useState, useEffect } from 'react';
import './ProfileCard.css';

const ProfileCard = ({ profileData }) => {
  const [currentRole, setCurrentRole] = useState('');
  const roles = ['UI/UX DESIGNER', 'FRONTEND DEVELOPER', 'EDITOR', 'ARTIST'];

  useEffect(() => {
    let roleIndex = 0;
    const interval = setInterval(() => {
      setCurrentRole(roles[roleIndex]);
      roleIndex = (roleIndex + 1) % roles.length;
    }, 2000); // Change role every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const { greeting, name, intro, avatarUrl } = profileData;

  return (
    <div className="profile-card-container">
      <div className="profile-content">
        <div className="profile-text">
          <p className="greeting">
            {greeting}
            <span className="hand-wave-emoji">👋</span>
          </p>
          <h1 className="name">{name}</h1>
          <p className="role">
            
            
            <span className="dev-text">I am a </span>
            <span className="dev-emoji"></span>
            {/* <span className="role-separator"> | </span> */}
            <span className="role-text">{currentRole}</span>
          </p>
          <p className="intro">{intro}</p>
          <a href="#" className="hire-button">
            Hire Me
          </a>
        </div>
        <div className="profile-image-container">
          <img className="profile-avatar" src={avatarUrl} alt="Profile Avatar" />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;