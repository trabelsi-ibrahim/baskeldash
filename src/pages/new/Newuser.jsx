import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const Newu = ({ inputs, title }) => {
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
                  <label>Cin</label>
                  <input type="text" placeholder="00864574" pattern="[0-9]{8}" max="8"/>
                </div>
                <div className="formInput" key="1">
                  <label>Nom</label>
                  <input type="text" placeholder="ali" />
                </div>
                <div className="formInput" >
                  <label>Prenom</label>
                  <input type="text" placeholder="Ben saleh" />
                </div>
                <div className="formInput" >
                  <label>E-mail</label>
                  <input type="mail" placeholder="ali-bensale@gmail.com"/>
                </div>
                <div className="formInput" >
                  <label>Numero telephone</label>
                  <input type="tel" placeholder="25 478 124" pattern="[2][0-9]{8}" />
                </div>
                <div className="formInput" >
                  <label>Address</label>
                  <input type="text" placeholder="Monastir R6" />
                </div>
              
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newu;
