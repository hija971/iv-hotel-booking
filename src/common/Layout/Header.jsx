import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import headerLogo from "../../common/Layout/img/header-logo.png";
import "./Header.css";

const Header = () => {
  const navigateBackHome = useNavigate();
  const user = localStorage.getItem("user");

  const [isHeaderTopVisible, setIsHeaderTopVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 75) {
        setIsHeaderTopVisible(false);
      } else {
        setIsHeaderTopVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigateBackHome("/");
  };
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return (
    <header>
      <div
        className={`header-top py-1 ${
          isHeaderTopVisible ? "" : "hidden"
        } bg-transparent`}
      >
        <div className="container mx-auto flex justify-between">
          <div className="header-left flex">{/* Rest of the code */}</div>
          <div className="header-right flex">
            <span className="login-register">
              <div className="inline-block">
                {user ? (
                  <button
                    onClick={handleLogout}
                    className="text-sm text-white hover:bg-[#e1bd85] px-2 py-1"
                  >
                    LOGOUT
                  </button>
                ) : (
                  <Link
                    to="/login"
                    className="text-sm text-white hover:bg-[#e1bd85] px-2 py-1"
                  >
                    LOGIN
                  </Link>
                )}
              </div>
              {!user && (
                <Link
                  to="/register"
                  className="text-sm text-white hover:bg-[#e1bd85] px-2 py-1"
                >
                  REGISTER
                </Link>
              )}
            </span>
          </div>
        </div>
      </div>
      <div className="header-content bg-white py-3">
        <div className="container mx-auto flex items-center">
          <div className="header-logo w-[155px] mr-10 py-2">
            <img src={headerLogo} alt="" />
          </div>
          <nav className="header-menu">
            <ul className="flex">
              <li>
                <Link
                  to="/"
                  className="p-5 hover:bg-[#e1bd85] text-[#232323] hover:text-white font-medium text-sm"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="p-5 hover:bg-[#e1bd85] text-[#232323] hover:text-white font-medium text-sm"
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  to="/rooms"
                  className="p-5 hover:bg-[#e1bd85] text-[#232323] hover:text-white font-medium text-sm"
                >
                  ROOM
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="p-5 hover:bg-[#e1bd85] text-[#232323] hover:text-white font-medium text-sm"
                >
                  BLOG
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="p-5 hover:bg-[#e1bd85] text-[#232323] hover:text-white font-medium text-sm"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
