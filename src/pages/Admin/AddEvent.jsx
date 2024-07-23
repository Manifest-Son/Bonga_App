/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Admin.css";
import { useFormik } from "formik";
import { apiURL } from "../../config/config";
import {useNavigate} from 'react-router-dom'
import toast from "react-simple-toasts";
import "react-simple-toasts/dist/theme/failure.css";
import "react-simple-toasts/dist/theme/success.css";
import * as Yup from "yup";
import axios from "axios";

const validationSchema = Yup.object({
  eventTitle: Yup.string().required("Title is required"),
  eventDescription: Yup.string().required("Description is required"),
  hosted: Yup.string().required("Hosted By is required"),
  date: Yup.string().required("Date is required"),
  time: Yup.string().required("Time is required")
});

function AddEvent() {
  const [loading, setLoading] = useState();
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      eventTitle: "",
      eventDescription: "",
      hosted: "",
      date: "",
      time: ""
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        setLoading(true)
        const response = await axios.post(`${apiURL}/api/events/create`, values);
        console.log(response)
        toast("Event created successfully", {theme: "success", duration: 3000})
      } catch (err) {
        toast(err.message, { theme: "failure" })
      } finally{
        setLoading(false)
      }
    },
  });

  return (
    <section className="create_event_container">
      <div className="create_event">
        <form onSubmit={formik.handleSubmit}>
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
            {formik.touched.title && formik.errors.title ? (
              <div className="error">{formik.errors.title}</div>
            ) : null}
          </div>
          <div className="form_event">
            <label htmlFor="eventDescription">Description</label>
            <textarea
              name="eventDescription"
              id="description"
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
            <button type="submit" disabled={loading}>
              {loading ? "Creating Event...": "Publish"}
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

export default AddEvent;
