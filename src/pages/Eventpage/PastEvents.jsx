/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from "react";
import { BsCalendarDate } from "react-icons/bs";
import { IoTicketOutline } from "react-icons/io5";
import { SiTicktick } from "react-icons/si";
import { apiURL } from "../../config/config";
import toast from "react-simple-toasts";
import "react-simple-toasts/dist/theme/failure.css";
import "react-simple-toasts/dist/theme/success.css";

// eslint-disable-next-line react/prop-types
function PastEvents({eventImg, eventTitle, eventDescription, date, time}) {
  
  return (
    <section>
      <h1 className="event_title">Past Events</h1>
      <div className="todayevents_container">
          <div className="today_wrapper">
            <img src={eventImg} alt="" />
            <h1>{eventTitle}</h1>
            <h3>Hosted by: {eventDescription}</h3>
            <p>
              <BsCalendarDate /> {date} . {time}
            </p>
            <div className="today_people">
              <p>
                <SiTicktick /> 10 going
              </p>
              <p>
                <IoTicketOutline /> Ticket: Free
              </p>
            </div>
          </div>
      </div>
    </section>
  );
}

function PastEventList(){
  const[loading, setLoading] = useState(true)
  const [error, setErrors] =useState([])
  const [events, setEvents] = useState([]);


    const fetchEvents = async () => {
      try{
        const response = await fetch(`${apiURL}/api/events/all/events`)
        const data = await response.json()
        setEvents(data)
      } catch(err){
        toast('Error fetching events', {theme: "failure" , duration: 3000})
      }
    }
useEffect(() => {
    fetchEvents();
  },[])
  
  return(
    <div className="events_container">
      {events.map((event) => (
        <PastEvents 
        key = {event.id}
        eventImg = {event.eventImg}
        eventTitle = {event.eventTitle}
        eventDescription = {event.eventDescription}
        date={event.date}
        time={event.time}
        />
      ))}
    </div>
  )
}
export default PastEventList;
