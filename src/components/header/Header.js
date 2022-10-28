import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href("/");
  };

  return (
    <div className="HeaderPage">
      <nav className="navigation">
        <a href="#" className="logo">
          Front<span>Project</span>
        </a>
        <input type="checkbox" className="menu-btn" id="menu-btn" />
        <label htmlFor="menu-btn" className="menu-icon">
          <span className="nav-icon"></span>
        </label>
        <ul className="menu">
          {localStorage.getItem("token") ? (
            <>
              <li>
                <Link className="header_link" to="/users">
                  Users
                </Link>
              </li>
              <li>
                <Link className="header_link active" to="/resources">
                  Resources
                </Link>
              </li>
              <li>
                <Link className="header_link" to="/create">
                  Add User
                </Link>
              </li>
              <li>
                <Link className="header_link" to="/delayed">
                  Delayed Responce
                </Link>
              </li>
              <div className="headerLogin">
                <Link to="/" className="header_link" onClick={() => logout()}>
                  <button>Logout</button>
                </Link>
              </div>
            </>
          ) : (
            ""
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
