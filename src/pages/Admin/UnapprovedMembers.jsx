/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { IoEnterOutline } from "react-icons/io5";
import { FaSquarePhone } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import toast from "react-simple-toasts";
import { apiURL } from "../../config/config";
import "react-simple-toasts/dist/theme/failure.css";
import "react-simple-toasts/dist/theme/success.css";

// eslint-disable-next-line react/prop-types
const MembersApproved = ({ userImg, firstname, lastname, emailAddress, phone }) => {
  return (
    <section>
      <div className="members_approval_wrapper">
        <div className="profile_approval">
          <img src={userImg} alt="" />
          <h1>
            <IoPerson /> Name: {firstname} {lastname}
          </h1>
        </div>
        <div className="added_info">
          <p>
            <FaSquarePhone /> Phone No: {phone}
          </p>
          <p>
            <IoEnterOutline /> Email Address: {emailAddress}
          </p>
        </div>
      </div>
    </section>
  );
};

const DisplayApproved = () => {
  const [loading, setLoading] = useState(true);
  const [members, setMembers] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${apiURL}/api/users/unapprove`, { credentials: "include" });
      const data = await response.json();
      if (data.success === true) {
        setMembers(data.data);
      } else {
        toast("Server error", { theme: "failure" });
      }
    } catch (err) {
      toast(err.message, { theme: "failure", duration: 2000 });
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section>
      <h1 className="approved_title">Unpproved Members</h1>
      <div className="approved_container">
        {members.length > 0 ? (
          members.map((currentMember) => (
            <MembersApproved
              key={currentMember.id}
              userImg={currentMember.userImg}
              firstname={currentMember.firstname}
              lastname={currentMember.lastname}
              emailAddress={currentMember.emailAddress}
              phone={currentMember.phone}
            />
          ))
        ) : (
          <p>There are no approved members.</p>
        )}
      </div>
    </section>
  );
};

export default DisplayApproved;
