/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { BsCalendarDate } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";
import { IoTicketOutline } from "react-icons/io5";
import { apiURL } from "../../config/config";
import toast from "react-simple-toasts";
import "react-simple-toasts/dist/theme/failure.css";
import "react-simple-toasts/dist/theme/success.css";
import axios from "axios";

// eslint-disable-next-line react/prop-types
function DisplayEvents({ eventId, eventImg, eventTitle, eventDescription, date, time, onDelete }) {
  return (
    <section>
      <div className="admin_event_wrapper">
        <img src={eventImg} alt="profile_photo" />
        <h1>{eventTitle}</h1>
        <h3>{eventDescription}</h3>
        <p>
          <BsCalendarDate /> Date: {date}
        </p>
        <div className="admin_people">
          <p>
            <IoMdTime /> Time: {time}
          </p>
          <p>
            <IoTicketOutline /> Ticket: Free
          </p>
        </div>
        <div className="event_controls">
          <button>Update</button>
          <button onClick={() => onDelete(eventId)}>Delete</button>
        </div>
      </div>
    </section>
  );
}

const AdminEvents = () => {
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${apiURL}/api/events/all`, { credentials: "include" });
      const data = await response.json();
      if (data.success === true) {
        setEvents(data.data);
      } else {
        toast("Server error", { theme: "failure" });
      }
    } catch (error) { 
      toast(error.message, { theme: "failure", duration: 2000 });
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteEvent = async (eventId) => {
    try {
      const response = await axios.delete(`${apiURL}/api/events/delete/${eventId} `, {credentials: "include"});
      const data = await response.json();
      if (data.success) {
        toast("Event deleted successfully", { theme: "success" });
        setEvents(events.filter(event => event.eventId !== eventId)); 
      } else {
        toast("Failed to delete event", { theme: "failure" });
      }
    } catch (error) {
      toast(error.message, { theme: "failure", duration: 2000 });
    }
  };

  useEffect(() => {
    fetchData();
  }, []); 

  if (loading) {
    return <div>Loading...Please wait!</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1 className="admin_event_title">Define Events</h1>
      <div className="admin_events_container">
        {events.length > 0 ? (
          events.map((currentEvent) => (
            <DisplayEvents
              key={currentEvent.id}
              eventImg={currentEvent.eventImg}
              eventTitle={currentEvent.eventTitle}
              eventDescription={currentEvent.eventDescription}
              date={currentEvent.date}
              time={currentEvent.time}
              eventId={currentEvent.eventId}
              onDelete={deleteEvent} 
            />
          ))
        ) : (
          <p>Sorry there are no events to be displayed here. <br /> Have all the day all by yourself.</p>
        )}
      </div>
    </div>
  );
}

export default AdminEvents;
