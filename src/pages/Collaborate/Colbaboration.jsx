import "./Collabos.css";
import Collabos from "./Collabos";
import RightNav from './RightNav';
import SideNav from './SideNav';

function Collaboration() {
  return (
    <section className="collabo_container">
      <div className="side_container">
        <SideNav />
        </div>
      <div className="center_container">
        <Collabos />
      </div>
      <div className="side_container">
        <RightNav />
        </div>
    </section>
  );
}

export default Collaboration;
