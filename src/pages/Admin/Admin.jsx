/* eslint-disable no-unused-vars */
import React from "react";
import "./Admin.css";
import AdminSideNav from "../../components/SideNav/AdminSideNav";
import AdminEvents from "./AdminEvents";
import FloatingWrite from "../../components/FloatingWrite/FloatingWrite";
import MembersApproved from './MembersApproved';
import UnApprovedMembers from './UnapprovedMembers';
import AddEvent from "./AddEvent";
function Admin() {
  return (
    <section>
      <div className="admin_wrapper">
        <div className="right_nav">
          <AdminSideNav />
        </div>
        <div className="Admin_panel">
          <h1>Hello World</h1>
          <MembersApproved /> 
         {/* <UnApprovedMembers /> */}
          {/* <AdminEvents /> */}
          {/* <FloatingWrite />
          <AddEvent /> */}
        </div>
      </div>
    </section>
  );
}

export default Admin;
