/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import "./ImageUpload.css";

function ImageUpload() {
  const [image, setImage] = useState(null);

  const handleSubmit = async () => {
    const cloudname = "difce7p4s";
    const preset = "bonga_app";

    const payload = new FormData();
    payload.append("file", image);
    payload.append("upload_preset", preset);

    try {
      const response = await axios.post(
        `https://api/cloudinary.com/v1_1/${cloudname}/upload`,
        payload,
      );
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="imageupload">
      <img src={image} alt="" />
      <input
        type="file"
        name="eventImg"
        id="image"
        onChange={(e) => {
          setImage(e.target.files[0]);
        }}
      />
      <button onSubmit={handleSubmit}></button>
    </div>
  );
}

export default ImageUpload;
