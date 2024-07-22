// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Signin.css";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import toast from "react-simple-toasts";
import "react-simple-toasts/dist/theme/failure.css";
import "react-simple-toasts/dist/theme/success.css";
import { apiURL } from "../../config/config";

const validationSchema = Yup.object({
  firstname: Yup.string().required("First Name is required"),
  lastname: Yup.string().required("Last Name is required"),
  emailAddress: Yup.string()
    .required("Email Address is required.")
    .email("Use correct email address"),
  year: Yup.string().required("Year of study is required"),
  phone: Yup.string().length(10, "The number should have 10 characters"),
  gender: Yup.string()
    .required("Gender is required")
    .oneOf(["male", "female", "prefer not say"]),
  password: Yup.string()
    .min(6, "Password should be more than 6 characters")
    .max(15, "Password should be less than 15 characters"),
  conf_password: Yup.string()
    .min(6, "Password should be more than 6 characters")
    .max(15, "Password should be less than 15 characters"),
});

function Signin() {
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const initialValues = {
    firstname: "",
    lastname: "",
    emailAddress: "",
    year: "",
    phone: "",
    gender: "",
    password: "",
  };
  const onSubmit = async (formState) => {
    setSubmitting(false);
    if (formState.password !== formState.conf_password) {
      toast("Password mismatch", {
        theme: "failure",
        duration: 4000,
      });
      return;
    }
    try {
      const response = await fetch(`${apiURL}/api/users/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });
      console.log(response);

      const data = await response.json();
      if (data.success == true) {
        toast("Succesful Registration. Await ADMIN approval.", {
          theme: "success",
          duration: 2000,
        });
        navigate("/login");
      } else {
        toast(data.message, {
          theme: "failure",
          duration: 2000,
        });
      }
      console.log(data);
    } catch (err) {
      toast(err.message, { theme: "failure" });
    }
    setSubmitting(false);
  };

  const formik = useFormik({ initialValues, onSubmit, validationSchema });
  console.log(formik.values);

  return (
    <section className="signin_container">
      <div className="signin_wrapper">
        <h1>Sign In</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="signin_input">
            <label htmlFor="firstname">First Name:</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              value={formik.values.firstname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.firstname && formik.errors.firstname && (
              <p>{formik.errors.firstname}</p>
            )}
          </div>
          <div className="signin_input">
            <label htmlFor="lastname">Last Name:</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              value={formik.values.lastname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.lastname && formik.errors.lastname && (
              <p>{formik.errors.lastname}</p>
            )}
          </div>
          <div className="signin_input">
            <label htmlFor="firstname">Email Address:</label>
            <input
              type="email"
              name="emailAddress"
              id="emailAddress"
              value={formik.values.emailAddress}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.emailAddress && formik.errors.emailAddress && (
              <p>{formik.errors.emailAddress}</p>
            )}
          </div>
          <div className="signin_input">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.phone && formik.errors.phone && (
            <p>{formik.errors.phone}</p>
          )}
          <div className="signin_input">
            <label>Gender:</label>
            <div className="gender_input">
              <div>
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                  onChange={formik.handleChange}
                />
                <label htmlFor="male">Male</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                  onChange={formik.handleChange}
                />
                <label htmlFor="female">Female</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="gender"
                  id="prefer_not"
                  value="prefer not say"
                  onChange={formik.handleChange}
                />
                <label htmlFor="prefer_not">Prefer not to say</label>
              </div>
            </div>
            {formik.touched.gender && formik.errors.gender && (
              <p>{formik.errors.gender}</p>
            )}
          </div>
          <div className="signin_input">
            <label htmlFor="year">Year:</label>
            <select
              name="year"
              id="year"
              value={formik.values.year}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="year">--Year--</option>
              <option value="year 1">Year 1</option>
              <option value="year 2">Year 2</option>
              <option value="year 3">Year 3</option>
              <option value="year 4">Year 4</option>
            </select>
            {formik.touched.year && formik.errors.year && (
              <p>{formik.errors.year}</p>
            )}
          </div>
          <div className="signin_input">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <p>{formik.errors.password}</p>
            )}
          </div>
          <div className="signin_input">
            <label htmlFor="conf_password">Confirm Password:</label>
            <input
              type="password"
              name="conf_password"
              id="conf_password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.conf_password && formik.errors.conf_password && (
              <p>{formik.errors.conf_password}</p>
            )}
          </div>
          <button type="submit">Sign In</button>
        </form>
      </div>
    </section>
  );
}

export default Signin;
