/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { IoEnterOutline } from "react-icons/io5";
import { FaSquarePhone } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import sampleImg from "../../assets/sample.jpg";
import { FcApproval } from "react-icons/fc";
import toast from "react-simple-toasts";
import { apiURL } from "../../config/config";
import axios from 'axios'

function MembersApproved(userImg, firstname, lastname, emailAddress, phone) {

  return (
    <section>
          <div className="members_approval_wrapper">
            <div className="profile_approval">
              <img src={userImg} alt="" />
              <h1>
                <IoPerson /> Name:{firstname} {lastname}
              </h1>
            </div>
            <div className="addes_info">
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
}

const DisplayApproved = () => {
  const[loading, setLoading] = useState(true)
  const [members, setMembers] = useState([])
  const [error, setError] = useState()
const fetchData = async() => {
  try{
    const response = await axios.get(`${apiURL}/api/users/display`, {credentials: "include"})
    console.log(response)
    const data = response.json()
    console.log(data)
  } catch(err){
    toast(err.message, {theme: "failure", duration: 2000})
  }finally{
    // setLoading{false}
  }
}

  useEffect(()=>{
    fetchData();
  }, [])

  return(
    <section>
      <h1 className="approved_title">Approved Members</h1>
    <div className="approved_container">
      {/* {data.map((_, i))} */}
    </div>
    </section>
  )
}
export default MembersApproved;
