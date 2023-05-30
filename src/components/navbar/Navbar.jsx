import React from "react";
import hero from "../../assets/images/hero-icon.png";
import "./navbar.css";
import {FaUserCircle} from 'react-icons/fa'
import {HiOutlineChevronDown} from 'react-icons/hi'

const Navbar = () => {
  return (
    
      <nav>
        <div className="hero-icon">
          <img src={hero} alt="" />
        </div>

        <div className="nav-optons">
          <ul className="nav-items">
            <li>My Assignment</li>
            <li>Chat with Mentor</li>
            <li className="profile-drop">
              <FaUserCircle className="profile-icon"/>
              <span>ProfileName</span>
              <HiOutlineChevronDown/>
            </li>
          </ul>
        </div>
      </nav>
   
  );
};

export default Navbar;
