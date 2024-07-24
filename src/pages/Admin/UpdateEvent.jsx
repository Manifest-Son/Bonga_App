/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { apiURL } from "../../config/config";
import { useNavigate } from "react-router-dom";
import toast from "react-simple-toasts";
import "react-simple-toasts/dist/theme/failure.css";
import "react-simple-toasts/dist/theme/success.css";
import * as Yup from "yup";
import axios from "axios";
import "./Admin.css";

const validationSchema = Yup.object({
  eventId: Yup.string().required("Event ID is required"),
  eventTitle: Yup.string().required("Title is required"),
  eventDescription: Yup.string().required("Description is required"),
  hosted: Yup.string().required("Hosted By is required"),
  date: Yup.string().required("Date is required"),
  time: Yup.string().required("Time is required"),
});

function UpdateEvent() {
  const [loading, setLoading] = useState();
  const [event, setEvent] = useState()
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      eventId: "",
      eventTitle: "",
      eventDescription: "",
      hosted: "",
      date: "",
      time: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const response = await axios.patch(`${apiURL}/api/events/update/${values.eventId}`, values);
        console.log(response);
        toast("Event updated successfully", { theme: "success", duration: 3000 });
        navigate("/admin");
      } catch (err) {
        toast(err.message, { theme: "failure" });
      } finally {
        setLoading(false);
      }
    },
  });

  const fetchData = async() => {
    try{
        const response = await fetch(`${apiURL}/api/events/all/events`, {credentials: "include"})
        console.log(response)
        const data = response.json()
        console.log(data)
        if(data.success  === true){
            setEvent(data.data)
        } else{
            setEvent(data.message)
            return toast("Server error", {success: "failure"})
        }
    } catch(err){
        toast(err.message, {theme: "failure", duration: 2000})
    }finally{
        setLoading(false)
    }
  }
  useEffect(() => {
    fetchData()
  }, []);

  return (
    <section className="update_event_container">
      <div className="update_event">
        <form onSubmit={formik.handleSubmit}>
          <div className="form_event">
            <label htmlFor="eventTitle">Title</label>
            <input
              type="text"
              name="eventTitle"
              id="eventTitle"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            //   value={event.eventTitle || "Mens Forum"}
            />
            {formik.touched.eventTitle && formik.errors.eventTitle ? (
              <div className="error">{formik.errors.eventTitle}</div>
            ) : null}
          </div>
          <div className="form_event">
            <label htmlFor="eventDescription">Description</label>
            <textarea
              name="eventDescription"
              id="eventDescription"
              placeholder="Write the details of the Event!"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            //   value={event.eventDescription || "Lorem Ipsum"}
            ></textarea>
            {formik.touched.eventDescription && formik.errors.eventDescription ? (
              <div className="error">{formik.errors.eventDescription}</div>
            ) : null}
          </div>
          <div className="form_event">
            <label htmlFor="hosted">Hosted By:</label>
            <input
              type="text"
              name="hosted"
              id="hosted"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            //   value={event.hosted || "The Mens"}
            />
            {formik.touched.hosted && formik.errors.hosted ? (
              <div className="error">{formik.errors.hosted}</div>
            ) : null}
          </div>
          <div className="form_event">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              name="date"
              id="date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            //   value={event.data || "23-07-2023"}
            />
            {formik.touched.date && formik.errors.date ? (
              <div className="error">{formik.errors.date}</div>
            ) : null}
          </div>
          <div className="form_event">
            <label htmlFor="date">Time</label>
            <input
              type="time"
              name="time"
              id="time"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            //   value={event.time || "07:00 AM"}
            />
            {formik.touched.time && formik.errors.time ? (
              <div className="error">{formik.errors.time}</div>
            ) : null}
          </div>
          <div className="form_button">
            <button type="submit" disabled={loading}>
              {loading ? "Updating Event..." : "Update"}
            </button>
            <button type="button" onClick={() => formik.resetForm()}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default UpdateEvent;
