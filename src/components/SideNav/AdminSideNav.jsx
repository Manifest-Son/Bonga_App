import "./SideNav.css";
import sampleImg from "../../assets/sample.jpg";
import { Link } from "react-router-dom";
import authStore from "../../store/Store";

function AdminSideNav() {
  const {user} = authStore();
  
  return (
    <section>
      <div className="admin_nav_wrapper">
        <div className="admin_profile">
          <img src={sampleImg} alt="" />
          <h1>Name: {user.firstname} {user.lastname}</h1>
          <p>Role: {user.role}</p>
        </div>
        <div className="admin_links">
          <Link to="/profile">Profile</Link>
          <Link to="/members-approved">Members Approved</Link>
          <Link to="/members-unapproved">Members Pending</Link>
          <Link to="/">Events Box</Link>
          <Link to="/bulk">Bulk SMS</Link>
          <Link to="/posts">Posts</Link>
          <Link to="/login">Log Out</Link>
        </div>
      </div>
    </section>
  );
}

export default AdminSideNav;
