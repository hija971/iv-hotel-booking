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
      if (window.scrollY > 100) {
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

  return (
    <header>
      <div
        className={`header-top py-1 ${
          isHeaderTopVisible ? "" : "hidden"
        } bg-transparent`}
      >
        <div className="container mx-auto flex justify-between">
          <div className="header-left flex">
            <span className="flex items-center mr-3 text-white text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4 mr-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
                />
              </svg>
              18 °C
            </span>
            <span className="flex items-center mr-3 text-white text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4 mr-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              225 Beach Street, Australian
            </span>
            <span className="flex items-center text-white text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4 mr-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              1-548-854-8898
            </span>
          </div>
          <div className="header-right flex">
            <span className="login-register">
              <div className="inline-block">
                {user && user !== null ? (
                  <button
                    onClick={handleLogout}
                    className="text-sm text-black px-2"
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
              <Link
                to="/register"
                className="text-sm text-white hover:bg-[#e1bd85] px-2 py-1"
              >
                REGISTER
              </Link>
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
                  to="/"
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
                  to="/"
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
