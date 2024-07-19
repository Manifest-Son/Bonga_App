import "./Collabos.css";
import sampleImg from "../../assets/sample.jpg";
import { MdEvent } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";

function SideNav() {
  return (
    <section>
      <div className="sidenav_wrapper">
        <div className="sidenav_profile">
          <img src={sampleImg} alt="profile image" />
          <p> Name: Lennox Githinji</p>
          <p> Year: Year 1</p>
        </div>
        <div className="side_nav">
          <a href="">
            <CgProfile /> Profile
          </a>
          <a href="">
            <FaPeopleGroup /> Collaborate
          </a>
          <a href="">
            <MdEvent /> Events
          </a>
          <a href="">
            <MdLogout /> Log Out
          </a>
        </div>
      </div>
    </section>
  );
}

export default SideNav;
