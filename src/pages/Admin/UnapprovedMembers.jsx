/* eslint-disable no-unused-vars */
import React from "react";
import { BsCalendar2Date } from "react-icons/bs";
import { IoEnterOutline } from "react-icons/io5";
import { FaSquarePhone } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import sampleImg from "../../assets/sample.jpg";
import { FcApproval } from "react-icons/fc";

function UnApprovedMembers() {
  const approved = [
    {
      img: sampleImg,
      names: "Grace Mathaga",
      phone: "+2547123456778",
      joindate: "Nov, 2 2023",
      year: "Year 1",
    },
    {
      img: sampleImg,
      names: "Grace Mathaga",
      phone: "+2547123456778",
      joindate: "Nov, 2 2023",
      year: "Year 1",
    },
    {
      img: sampleImg,
      names: "Grace Mathaga",
      phone: "+2547123456778",
      joindate: "Nov, 2 2023",
      year: "Year 1",
    },
    {
      img: sampleImg,
      names: "Grace Mathaga",
      phone: "+2547123456778",
      joindate: "Nov, 2 2023",
      year: "Year 1",
    },
    {
      img: sampleImg,
      names: "Grace Mathaga",
      phone: "+2547123456778",
      joindate: "Nov, 2 2023",
      year: "Year 1",
    },
    {
      img: sampleImg,
      names: "Grace Mathaga",
      phone: "+2547123456778",
      joindate: "Nov, 2 2023",
      year: "Year 1",
    },
    {
      img: sampleImg,
      names: "Grace Mathaga",
      phone: "+2547123456778",
      joindate: "Nov, 2 2023",
      year: "Year 1",
    },
  ];
  return (
    <section>
      <h1 className="unapproved_title">Unapproved Members</h1>
      <div className="unapproved_container">
        {approved.map((data) => (
          <div key={data.id} className="unapproved_wrapper">
            <div className="profile_unapproval">
              <img src={data.img} alt="" />
              <h1>
                <IoPerson /> Name: {data.names}{" "}
              </h1>
            </div>
            <div className="addes_info">
              <p>
                <FaSquarePhone /> Phone No: {data.phone}
              </p>
              <p>
                <IoEnterOutline /> Joined Date: {data.joindate}{" "}
              </p>
              <p>
                <BsCalendar2Date /> Year: {data.year}
              </p>
            </div>
            <div className="unapproved_controls">
              <button>Accept</button>
              <button>Decline</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UnApprovedMembers;
