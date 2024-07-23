import "./SideNav.css";
import sampleImg from "../../assets/sample.jpg";
import { Link } from "react-router-dom";

function AdminSideNav() {
  return (
    <section>
      <div className="admin_nav_wrapper">
        <div className="admin_profile">
          <img src={sampleImg} alt="" />
          <h1>Name: Lennox Githinji</h1>
          <p>Role: Admin</p>
        </div>
        <div className="admin_links">
          <Link to="/profile">Profile</Link>
          <Link to="/members-approved">Members Approved</Link>
          <Link to="/members-unapproved">Members Pending</Link>
          <Link to="/events">Events Box</Link>
          <Link to="/bulk">Bulk SMS</Link>
          <Link to="/posts">Posts</Link>
          <Link to="/login">Log Out</Link>
        </div>
      </div>
    </section>
  );
}

export default AdminSideNav;
