import "./Collabos.css";
import { useNavigate } from "react-router-dom";
import Collabos from "./Collabos";
import RightNav from "./RightNav";
import SideNav from "../../components/SideNav/SideNav";
import FloatingWrite from "../../components/FloatingWrite/FloatingWrite";

function Collaboration() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/create");
  };
  return (
    <section className="collabo_container">
      <div className="side_container">
        <SideNav />
      </div>
      <div className="center_container">
        <Collabos />
        <button onClick={handleClick}>Create Event</button>
        <FloatingWrite />
      </div>
      <div className="side_container">
        <RightNav />
      </div>
    </section>
  );
}

export default Collaboration;
