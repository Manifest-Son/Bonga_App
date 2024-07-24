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
  const [deleting, setdeleting] = useState();
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
        setdeleting(true);
        const response = await axios.patch(`${apiURL}/api/events/delete/${values.eventId}`, values);
        console.log(response);
        toast("Event updated successfully", { theme: "success", duration: 3000 });
        navigate("/admin");
      } catch (err) {
        toast(err.message, { theme: "failure" });
      } finally {
        setdeleting(false);
      }
    },
  });

  useEffect(() => {
    // You can fetch existing event data here if needed
  }, []);

  return (
    <section className="update_event_container">
      <div className="update_event">
        <form onSubmit={formik.handleSubmit}>
          <div className="form_event">
            <label htmlFor="eventId">Event ID</label>
            <input
              type="text"
              name="eventId"
              id="eventId"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.eventId}
            />
            {formik.touched.eventId && formik.errors.eventId ? (
              <div className="error">{formik.errors.eventId}</div>
            ) : null}
          </div>
          <div className="form_event">
            <label htmlFor="eventTitle">Title</label>
            <input
              type="text"
              name="eventTitle"
              id="eventTitle"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.eventTitle}
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
              value={formik.values.eventDescription}
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
              value={formik.values.hosted}
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
              value={formik.values.date}
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
              value={formik.values.time}
            />
            {formik.touched.time && formik.errors.time ? (
              <div className="error">{formik.errors.time}</div>
            ) : null}
          </div>
          <div className="form_button">
            <button type="submit" disabled={deleting}>
              {deleting ? "Deleting" : "Delete"}
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
