import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Login from "./pages/Login/Login";
import Signin from "./pages/Signin/Signin";
import Profile from "./pages/Profile/Profile";
import Collaboration from "./pages/Collaborate/Colbaboration";
import Events from "./pages/Eventpage/Events";
import Admin from "./pages/Admin/Admin";
import About from "./pages/About/About";
import CollaboWriting from "./pages/Collaborate/ColaboWriting";
import MembersApproved from "./pages/Admin/MembersApproved";
import UnApprovedMembers from "./pages/Admin/UnapprovedMembers";
import AddEvent from "./pages/Admin/AddEvent";
import DeleteEvent from "./pages/Admin/DeleteEvent";
import UpdateEvent from "./pages/Admin/UpdateEvent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/collaboration" element={<Collaboration />} />
          <Route path="/events" element={<Events />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/create" element={<CollaboWriting />} />
          <Route path="/members-approved" element={<MembersApproved />} />
          <Route path="/members-unapproved" element={<UnApprovedMembers />} />
          <Route path="/add-event" element={<AddEvent />} />
          <Route path="/delete-event" element={<DeleteEvent />} />
          <Route path="/update-event" element={<UpdateEvent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
