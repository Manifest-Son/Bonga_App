/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Login.css";
import { useFormik } from "formik";
import toast from "react-simple-toasts";
import "react-simple-toasts/dist/theme/failure.css";
import "react-simple-toasts/dist/theme/success.css";
import { useNavigate } from "react-router-dom";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import * as Yup from "yup";
import { apiURL } from "../../config/config";
import authStore from "../../store/Store";

const validateSchema = Yup.object({
  emailAddress: Yup.string()
    .required("Email Address cannot be empty")
    .email("Invalid email address"),
  password: Yup.string()
    .required("Password cannot be empty")
    .min(5, "Password cannot be less than 5 characters")
    .max(15, "Password cannot be more than 15 characters"),
});

function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const setUser = authStore((state) => state.setUser);
  const setToken = authStore((state) => state.setToken);

  const initialValues = {
    emailAddress: "",
    password: "",
  };

  const onSubmit = async (formState) => {
    setLoading(true);
    try {
      const response = await fetch(`${apiURL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok) {
        setUser(data.data);
        setToken(data.token);
        toast("Login successful!", { theme: "success", duration: 2000 });
        if (data.role == "user") {
          navigate("/collaboration");
        } else {
          navigate("/admin");
        }
      } else {
        throw new Error(
          data.message && toast(data.message, { theme: "failure" }),
        );
      }
    } catch (err) {
      toast(err.message, { theme: "failure", duration: 2000 });
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: validateSchema,
  });

  return (
    <section className="login_container">
      <div className="login_wrapper">
        <h1>Log In</h1>
        <form onSubmit={formik.handleSubmit} className="form_section">
          <div className="input-container">
            <label htmlFor="emailAddress">Email Address:</label>
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
          <div className="input-container">
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
          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>
        <hr />
        <div className="third-party">
          <FacebookLoginButton
            onClick={() =>
              toast("Facebook login is not implemented yet", {
                theme: "failure",
                duration: 2000,
              })
            }
          />
          <GoogleLoginButton
            onClick={() =>
              toast("Google login is not implemented yet", {
                theme: "failure",
                duration: 2000,
              })
            }
          />
        </div>
      </div>
    </section>
  );
}

export default Login;
