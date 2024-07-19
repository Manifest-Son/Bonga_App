import "./Profile.css";
import sampleImg from "../../assets/sample.jpg";

function Profile() {
  return (
    <section>
      <div className="profile_wrapper">
        <div className="image_bg">
          <img src={sampleImg} alt="Profile image" />
        </div>
        <form>
          <div className="form-contents">
            <div className="profile_input">
              <label htmlFor="firstname">First Name:</label>
              <input type="text" name="firstname" id="firstname" />
            </div>
            <div className="profile_input">
              <label htmlFor="lastname">Last Name:</label>
              <input type="text" name="lastname" id="lastname" />
            </div>
            <div className="profile_input">
              <label htmlFor="emailAddress">Email Address:</label>
              <input type="email" name="emailAddress" id="emailAddress" />
            </div>
            <div className="profile_input">
              <label htmlFor="registration">Registration No:</label>
              <input type="text" name="reg_no" id="reg_no" />
            </div>
            <div className="profile_input">
              <label htmlFor="course">Course:</label>
              <input type="text" name="course" id="course" />
            </div>
            <div className="profile_input">
              <label htmlFor="phoneno">Phone Number:</label>
              <input type="text" name="phoneno" id="phoneno" />
            </div>
          </div>
          <button>Edit</button>
        </form>
        <hr />
        <div className="profile_opt">
          <p>
            Want to delete your account? <a href="">Delete Account</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Profile;
