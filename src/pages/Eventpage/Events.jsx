/* eslint-disable no-unused-vars */
import "./Events.css";

import React from "react";
import SideNav from "../../components/SideNav/SideNav";
import TodayEvents from "./TodayEvents";
import UpcomingEvents from "./UpcomingEvents";
// import PastEventList from "./PastEvents";


function Events() {
  return (
    <section className="events_container">
      <div className="left_content">
        <SideNav />
      </div>
      <div className="main_content">
        <TodayEvents />
        <UpcomingEvents />
        {/* <PastEventList /> */}
      </div>
    </section>
  );
}

export default Events;
