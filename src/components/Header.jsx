import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo_pandom_k.svg"; // 로고 이미지 경로
import profile from "../assets/images/img_header_profile.png"; // 프로필 이미지 경로
import "./Header.css";

function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // 스크롤을 내릴 때
        setShowHeader(false);
      } else {
        // 스크롤을 올릴 때
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  return (
    <header className={`header ${showHeader ? "visible" : "hidden"}`}>
      <div className="header-wrap">
        <Link to="/list" className="header-logo">
          <img src={logo} alt="Fandom-k logo" />
        </Link>
        <Link to="/mypage" className="header-profile">
          <img src={profile} alt="Profile" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
