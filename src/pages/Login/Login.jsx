import "./Login.css";
import { useFormik } from "formik";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";

function Login() {
  const formik = useFormik({
    initialValues: {
      emailAddress: "",
      password: "",
    },
    onSubmit: (formState) => {
      console.log(formState);
    },
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
          </div>
          <button>Log In</button>
        </form>
        <hr />
        <div className="third-party">
          <FacebookLoginButton />
          <GoogleLoginButton />
        </div>
      </div>
    </section>
  );
}

export default Login;
