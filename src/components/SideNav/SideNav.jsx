import "./SideNav.css";
import sampleImg from "../../assets/sample.jpg";
import { MdEvent } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import authStore from "../../store/Store";
// import { useState } from "react";

function SideNav() {
  const{user} = authStore()
  return (
    <section>
      <div className="sidenav_wrapper">
        <div className="sidenav_profile">
          <img src={sampleImg} alt="profile image" />
          <p> Name:{user.firstname} {user.lastname}</p>
          <p> Year: {user.year}</p>
          <p> Role: {user.role}</p>
        </div>
        <div className="side_nav">
          <Link to="/profile">
            <CgProfile /> Profile
          </Link>
          <Link to="/collaboration">
            <FaPeopleGroup /> Collaborate
          </Link>
          <Link to="/events">
            <MdEvent /> Events
          </Link>
          <Link to="/login">
            <MdLogout /> Log Out
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SideNav;
