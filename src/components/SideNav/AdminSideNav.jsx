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
          <Link to="/">Profile</Link>
          <Link to="/">Members Approved</Link>
          <Link to="/">Members Pending</Link>
          <Link to="/">Events Box</Link>
          <Link to="/">Bulk SMS</Link>
          <Link to="/">Posts</Link>
          <Link to="/login">Log Out</Link>
        </div>
      </div>
    </section>
  );
}

export default AdminSideNav;
