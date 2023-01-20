import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const Newv = ({ inputs, title }) => {
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
                  <label>Id agence</label>
                  <input type="text" placeholder=""  maxLength={8}/>
                </div>
                <div className="formInput" key="1">
                  <label>Id velo</label>
                  <input type="text" placeholder="" maxLength={8} />
                </div>
                <div className="formInput" >
                  <label>Type</label>
                  <input type="text" placeholder="bike/scooter" />
                </div>
                <div className="formInput" >
                  <label>Marque</label>
                  <input type="text"placeholder=""/>
                </div>
                <div className="formInput" >
                  <label>Nom</label>
                  <input type="text" placeholder=""  />
                </div>
                <div className="formInput" >
                  <label>Prix</label>
                  <input type="number" placeholder="20 TND" />
                </div>
                <div className="formInput" >
                  <label>Couleur</label>
                  <input type="text" placeholder="noir" />
                </div>
                <div className="formInput" >
                  <label>Rate</label>
                  <input type="number" placeholder="0.00" min={0.00} max={10.00} step={0.1} />
                </div>
                <div className="formInput" >
                  <label>Vitesse</label>
                  <input type="number" placeholder="20.00" step={0.1} />

                </div>
                <div className="formInput" >
                  <label>Description</label>
                  <input type="text" placeholder="Description"  />
                  
                </div>
              
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newv;
