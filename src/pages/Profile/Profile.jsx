import "./Profile.css";
import sampleImg from "../../assets/sample.jpg";
import userStore from "../../store/Store.js";
import { useState, useEffect } from "react";
import { apiURL } from "../../config/config.js";
import toast from "react-simple-toasts";

function Profile() {
  const { user, setUser, updateUser } = userStore();
  const [profile, setProfile] = useState(user);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const response = await fetch(`${apiURL}/api/users/profile`);
        if (!response.ok) {
          throw new Error("Failed to fetch user profile");
        }
        console.log(response)
        const data = response.json();
        setUser(data), setProfile(data);
        console.log(data);
      } catch (error) {
        console.error("Failed to load user profile", error);
      }
    };

    loadProfile();
  }, [setUser]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiURL}/api/users`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profile),
      });
      console.log(response)
      if (response.ok) {
        const updatedProfile = await response.json();
        updateUser(updatedProfile);
        toast("Profile updated successfully!", {
          theme: "success",
          duration: 2000,
        });
      } else {
        toast("Failed to update profile", { theme: "failure", duration: 2000 });
      }
    } catch (error) {
      console.error("Failed to update profile", error);
      alert("Failed to update profile");
    }
  };

  return (
    <section>
      <div className="profile_wrapper">
        <div className="image_bg">
          <img src={sampleImg} alt="Profile image" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-contents">
            <div className="profile_input">
              <label htmlFor="firstname">First Name:</label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                // value={profile.firstname || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="profile_input">
              <label htmlFor="lastname">Last Name:</label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                // value={profile.lastname || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="profile_input">
              <label htmlFor="emailAddress">Email Address:</label>
              <input
                type="email"
                name="emailAddress"
                id="emailAddress"
                // value={profile.emailAddress || ""}
              />
            </div>
            <div className="profile_input">
              <label htmlFor="registration">Year:</label>
              <input
                type="text"
                name="year"
                id="year"
                // value={profile.year || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="profile_input">
              <label htmlFor="course">Course:</label>
              <input
                type="text"
                name="course"
                id="course"
                // value={profile.course || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="profile_input">
              <label htmlFor="phoneno">Phone Number:</label>
              <input
                type="text"
                name="phone"
                id="phone"
                // value={profile.phone || ""}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <button type="submit">Edit</button>
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
