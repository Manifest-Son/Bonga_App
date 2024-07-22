/* eslint-disable no-unused-vars */
import React from "react";
import { FaFeather } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import "./FloatingWrite.css";

function FloatingWrite() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <section>
      <div className="write_collabo">
        <FaFeather onClick={handleClick} className="write" />
      </div>
    </section>
  );
}

export default FloatingWrite;
