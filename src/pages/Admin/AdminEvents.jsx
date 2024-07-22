/* eslint-disable no-unused-vars */
import React from "react";
import { BsCalendarDate } from "react-icons/bs";
import { IoTicketOutline } from "react-icons/io5";
import { SiTicktick } from "react-icons/si";
import socialImg from "../../assets/social.png";

function AdminEvents() {
  const events = [
    {
      img: socialImg,
      title: "Vuka Fyt",
      organize: "Music Committee",
      date: "Mon JULY 20",
      time: "7:00 PM",
      going: "12",
    },
    {
      img: socialImg,
      title: "Anza Fyt",
      organize: "Dicipleship Committee",
      date: "Mon JULY 20",
      time: "7:00 PM",
      going: "12",
    },
    {
      img: socialImg,
      title: "Orientation Week",
      organize: "ANZA Committee",
      date: "Mon AUG 28",
      time: "7:00 PM",
      going: "21",
    },
    {
      img: socialImg,
      title: "",
      organize: "Music Committee",
      date: "Mon JULY 20",
      time: "7:00 PM",
      going: "12",
    },
    {
      img: socialImg,
      title: "Vuka Fyt",
      organize: "Music Committee",
      date: "Mon JULY 20",
      time: "7:00 PM",
      going: "12",
    },
    {
      img: socialImg,
      title: "Vuka Fyt",
      organize: "Music Committee",
      date: "Mon JULY 20",
      time: "7:00 PM",
      going: "12",
    },
  ];
  return (
    <section>
      <h1 className="admin_event_title">Define Events</h1>
      <div className="admin_events_container">
        {events.map((data) => (
          <div key={data.id} className="admin_event_wrapper">
            <img src={data.img} alt="profile_photo" />
            <h1>{data.title}</h1>
            <h3>Hosted by: {data.organize}</h3>
            <p>
              <BsCalendarDate /> {data.date} . {data.time}
            </p>
            <div className="admin_people">
              <p>
                <SiTicktick /> {data.going} going
              </p>
              <p>
                <IoTicketOutline /> Ticket: Free
              </p>
            </div>
            <div className="event_controls">
              <button>Update</button>
              <button>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AdminEvents;
