import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const Newa = ({ inputs, title }) => {
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
                  <label>Nom d'agence</label>
                  <input type="text" placeholder="bike rent"/>
                </div>
                <div className="formInput" key="1">
                  <label>Adresse</label>
                  <input type="text" placeholder="Monastir falez" />
                </div>
                <div className="formInput" >
                  <label>E-mail</label>
                  <input type="mail" placeholder="bike_rent@gmail.com" />
                </div>

                <div className="formInput" >
                  <label>Numero telephone</label>
                  <input type="tel" placeholder="25 478 124" pattern="[2][0-9]{8}" />
                </div>
                <div className="formInput" >
                  <label>Site web</label>
                  <input type="url" placeholder="bike_rent.com" />
                </div>
                <div className="formInput" key="1">
                  <label>Description</label>
                  <input type="text" placeholder="Description" aria-required/>
                </div>
              
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newa;
