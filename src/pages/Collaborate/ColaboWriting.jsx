/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Collabos.css";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { apiURL } from "../../config/config";
import toast from "react-simple-toasts";
import authStore from "../../store/Store.js";

const validationSchema = Yup.object({
  postTitle: Yup.string().required("Post Title is required"),
  postDescription: Yup.string().required("Post Description is required"),
});

function CollaboWriting() {
  const navigate = useNavigate();
  const [image, setImage] = useState();
  const user = authStore((state) => state.user);

  const onSubmit = async (formState) => {
    const cloudname = "difce7p4s";
    const preset = "bonga_app";

    const payload = new FormData();
    payload.append("file", image);
    payload.append("upload_preset", preset);

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudname}/upload`,
        payload,
      );

      const secure_url = response.data.secure_url;

      const postData = {
        userId: user.id, // add userId to the postData
        postImg: secure_url,
        postTitle: formState.postTitle,
        postDescription: formState.postDescription,
      };

      const responseEvent = await fetch(`${apiURL}/api/events/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
        credentials: "include",
      });

      const data = await responseEvent.json();

      if (responseEvent.ok) {
        toast("Event creation successful.", {
          theme: "success",
          duration: 3000,
        });
        navigate("/admin");
      } else {
        toast("Event creation failed.", { theme: "failure", duration: 3000 });
      }
    } catch (err) {
      console.error(err);
      toast("Error occurred during event creation.", {
        theme: "failure",
        duration: 3000,
      });
    }
  };

  const formik = useFormik({
    initialValues: {
      postImg: "",
      postTitle: "",
      postDescription: "",
    },
    validationSchema,
    onSubmit,
  });

  return (
    <section className="create_event_container">
      <div className="create_event">
        <form onSubmit={formik.handleSubmit}>
          <input
            type="file"
            name="postImg"
            id="postImg"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <div className="form_event">
            <label htmlFor="postTitle">Post Title</label>
            <input
              type="text"
              name="postTitle"
              id="postTitle"
              value={formik.values.postTitle}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.postTitle && formik.errors.postTitle && (
              <p className="error">{formik.errors.postTitle}</p>
            )}
          </div>
          <div className="form_event">
            <label htmlFor="postDescription">Post Description</label>
            <input
              type="text"
              name="postDescription"
              id="postDescription"
              value={formik.values.postDescription}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.postDescription &&
              formik.errors.postDescription && (
                <p className="error">{formik.errors.postDescription}</p>
              )}
          </div>
          <div className="form_button">
            <button type="submit">Publish</button>
            <button type="button" onClick={() => navigate(-1)}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default CollaboWriting;
