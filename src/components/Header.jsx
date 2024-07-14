import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.svg'; // 로고 이미지 경로
import profile from '../assets/images/header-profile.png'; // 프로필 이미지 경로
import './Header.css';

function Header() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    window.location.reload(); // 페이지 새로고침
  };

  const handleProfileClick = () => {
    navigate('/mypage'); // '/mypage'로 이동
  };

  return (
    <header className="header-container">
      <div className="header-wrapper">
        <div className="header-logo-container">
          <button type="button" onClick={handleLogoClick} aria-label="Reload the page">
            <img src={logo} alt="Fandom-k logo" className="header-logo" />
          </button>
        </div>
        <div className="header-profile-container">
          <button type="button" onClick={handleProfileClick} aria-label="Go to My Page">
            <img src={profile} alt="Profile" className="header-profile" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
