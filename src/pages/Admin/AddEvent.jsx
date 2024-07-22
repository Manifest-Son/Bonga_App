/* eslint-disable no-unused-vars */
import React from "react";
import "./Admin.css";
import { useFormik } from "formik";
import socialImg from "../../assets/social.png";

function AddEvent() {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      hosted: "",
      date: "",
    },
  });
  const handleSubmit = {};
  return (
    <section className="create_event_container">
      <div className="create_event">
        <img src={socialImg} alt="" />
        <form>
          <div className="form_event">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" />
          </div>
          <div className="form_event">
            <label htmlFor="description">Description</label>
            <textarea name="description" id="description">
              Write the details of the Event!
            </textarea>
          </div>
          <div className="form_event">
            <label htmlFor="hosted">Hoted By:</label>
            <input type="text" name="hosted" id="hosted" />
          </div>
          <div className="form_event">
            <label htmlFor="Date">Date</label>
            <input type="date" name="date" id="date" />
          </div>
          <div className="form_button">
            <button onSubmit={handleSubmit}>Publish</button>
            <button>Cancel</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AddEvent;
