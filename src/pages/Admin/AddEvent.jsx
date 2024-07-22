/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import "./Admin.css";
import { useFormik } from "formik";
import axios from 'axios'
import socialImg from "../../assets/social.png";

function AddEvent() {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      hosted: "",
      date: "",
    },
  });
  const [image, setImage] = useState();
 
  console.log(image)
  const handleSubmit = async() => {
  const cloudname = "difce7p4s"
  const preset = "bonga_app"

  const payload = new FormData();
  payload.append("file", image)
  payload.append("upload_preset", preset)

    try{
      const response = await axios.post(`https://api.cloudinary.com/v1_1/${cloudname}/upload`, payload)
      const secure_url = response.data.secure_url
      const imageUrl = secure_url.replace("/upload/","/upload/w_300/f_auto/" )
      console.log(response)
    }catch(err){
      console.error(err)
    }
  }
  return (
    <section className="create_event_container">
      <div className="create_event">
        <input type="file" name="eventImg" id="image" onChange={(e) => {setImage(e.target.files[0])}}/>
        <button onClick={handleSubmit}>Post</button>
        <form>
          <div className="form_event">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" />
          </div>
          <div className="form_event">
            <label htmlFor="description">Description</label>
            <textarea name="description" id="description" placeholder="Write the details of the Event!">
            </textarea>
          </div>
          <div className="form_event">
            <label htmlFor="hosted">Hoted By:</label>
            <input type="text" name="hosted" id="hosted" />
          </div>
          <div className="form_event">
            <label htmlFor="Date">Date</label>
            <input type="date" name="date" id="date" />
          </div>
          <div className="form_button">
            <button>Publish</button>
            <button>Cancel</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AddEvent;
