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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
