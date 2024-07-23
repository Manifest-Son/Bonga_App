import "./Login.css";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useNavigate } from "react-router-dom";
import authStore from "../../store/Store";

function Logout() {
  const navigate = useNavigate();
  const setToken = authStore((state) => state.setToken);
  const handleClick = () => {
    setToken(null);
    navigate("./login");
  };
  return (
    <div>
      <button className="login" onClick={handleClick}>
        Log Out
      </button>
    </div>
  );
}

export default Logout;
