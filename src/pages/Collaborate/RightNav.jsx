/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Collabos.css";
import socialImg from "../../assets/sample.jpg";

function RightNav() {
  const leadership = [
    {
      img: { socialImg },
      leadname: "Lennox Githinji",
      position: "Chairperson",
      phonenumber: "+2547123456788",
    },
    {
      img: { socialImg },
      leadname: "Faith Musanga",
      position: "Vice Chairperson",
      phonenumber: "+2547123456788",
    },
    {
      img: { socialImg },
      leadname: "Patrick Ngugi",
      position: "2nd Vice Chairperson",
      phonenumber: "+2547123456788",
    },
    {
      img: { socialImg },
      leadname: "Ann Wanjiku",
      position: "Secretary",
      phonenumber: "+2547123456788",
    },
    {
      img: { socialImg },
      leadname: "Grace Kanyiri",
      position: "Vice Secretary",
      phonenumber: "+2547123456788",
    },
  ];

  return (
    <section className="leadership_container">
      <h1>Executive Council</h1>
      {leadership.map((leaders) => (
        <div className="social_wrapper">
          <img src={leaders.img} alt="" />
          <div className="social_details">
            <h2>{leaders.leadname}</h2>
            <p>{leaders.position}</p>
            <p>{leaders.phonenumber}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default RightNav;
