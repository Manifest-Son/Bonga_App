/* eslint-disable no-unused-vars */
import React from "react";
import "./Signin.css";
import { useFormik } from "formik";
// import * as Yup from 'yup';

function Signin() {
  //    const validationSchema = Yup.object({
  //     firstname: Yup.string().required("First Name is required"),
  //     lastname:Yup.string().required("Last Name is required"),
  //     emailAddress: Yup.string().required("Email Address is required.").email("Use correct email address"),
  //     year: Yup.string().required("Year of study is required"),
  //     phoneno: Yup.string().length(10, "The number should have 10 characters"),
  //     gender: Yup.string().required("Gender is required"),
  //     password: Yup.string().min(6, "Password should be more than 6 characters").max(15, "Password should be less than 15 characters")
  //    })
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      emailAddress: "",
      year: "",
      phoneno: "",
      gender: "",
      password: "",
    },

    // onSubmit : (formState) => {
    //     console.log("The form has been submitted successfully")
    //     console.log(formState)
    // },

    // validationSchema: validationSchema,
  });
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
          </div>
          <div className="signin_input">
            <label htmlFor="phoneno">Phone Number:</label>
            <input
              type="number"
              name="phoneno"
              id="phoneno"
              value={formik.values.phoneno}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
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
              <option value="year-1">Year 1</option>
              <option value="year-2">Year 2</option>
              <option value="year-3">Year 3</option>
              <option value="year-4">Year 4</option>
            </select>
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
          </div>
          <button>Sign In</button>
        </form>
      </div>
    </section>
  );
}

export default Signin;
