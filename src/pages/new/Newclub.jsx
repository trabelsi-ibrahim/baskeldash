import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { TextField } from "@mui/material";

const Newc = ({ inputs, title }) => {
  const [file, setFile] = useState("");

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              
                <div className="formInput" >
                  <label>Nom de club</label>
                  <input type="text" placeholder="club de velo" />
                </div>
                <div className="formInput" key="1">
                  <label>Description</label>
                  <input type="text" placeholder="Description" />
                </div>
                <div className="formInput" >
                  <label>Adresse</label>
                  <input type="adresse" placeholder="Monastir R6" />
                </div>
              
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newc;
