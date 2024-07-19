/* eslint-disable no-unused-vars */
import React from "react";
import { BsCalendarDate } from "react-icons/bs";
import { IoTicketOutline } from "react-icons/io5";
import { SiTicktick } from "react-icons/si";
import socialImg from "../../assets/social.png";

function PastEvents() {
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
      <h1 className="event_title">Past Events</h1>
      <div className="todayevents_container">
        {events.map((data) => (
          <div key={data.id} className="today_wrapper">
            <img src={data.img} alt="" />
            <h1>{data.title}</h1>
            <h3>Hosted by: {data.organize}</h3>
            <p>
              <BsCalendarDate /> {data.date} . {data.time}{" "}
            </p>
            <div className="today_people">
              <p>
                <SiTicktick /> {data.going} going{" "}
              </p>
              <p>
                <IoTicketOutline /> Ticket: Free
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PastEvents;
