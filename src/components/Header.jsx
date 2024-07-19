import React from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/images/logo_pandom_k.svg"; // 로고 이미지 경로
import profile from "../assets/images/img_header_profile.png"; // 프로필 이미지 경로
import "./Header.css";

function Header() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/list");
  };

  const handleProfileClick = () => {
    navigate("/mypage");
  };

  return (
    <header className="header-container">
      <div className="header-wrapper">
        <div className="header-logo-container">
          <button
            type="button"
            onClick={handleLogoClick}
            aria-label="리스트 페이지로 이동하는 버튼"
          >
            <img src={logo} alt="Fandom-k logo" className="header-logo" />
          </button>
        </div>
        <div className="header-profile-container">
          <button
            type="button"
            onClick={handleProfileClick}
            aria-label="마이 페이지로 이동하는 버튼"
          >
            <img src={profile} alt="Profile" className="header-profile" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
