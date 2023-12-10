import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="navbar">
      <div className="sidebar">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </div>
      <div className="flex">
        <div className="searchBox">
          <input type="text" placeholder="Type here" />
        </div>
        <div className="accountOptions">
          <div className="dropdown" onClick={toggleDropdown}>
            <button>
              <span>Profile</span>
            </button>
            {showDropdown && (
              <div className="dropdown-content">
                <button>Sign In</button>
                <button>Sign Up</button>
                <button>Dashboard</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
