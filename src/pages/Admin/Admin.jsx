/* eslint-disable no-unused-vars */
import React from "react";
import "./Admin.css";
import AdminSideNav from "../../components/SideNav/AdminSideNav";
import authStore from "../../store/Store";


function Admin() {
  const user = authStore()
  return (
    <section>
      <div className="admin_wrapper">
        <div className="right_nav">
          <AdminSideNav />
        </div>
        <div className="Admin_panel">
          <h1>Welcome back! {user.firstname} {user.lastname}</h1>
        </div>
      </div>
    </section>
  );
}

export default Admin;
